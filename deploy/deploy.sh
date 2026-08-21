#!/usr/bin/env bash
# =============================================================
# WellZED — Deploy to existing S3 + CloudFront
# =============================================================
# Usage:
#   ./deploy.sh <s3-bucket-name> <cloudfront-distribution-id> [aws-profile]
#
# Example:
#   ./deploy.sh wellzed-site-prod E1A2B3C4D5E6F7 wellzed-prod
#
# Requires: AWS CLI v2, configured credentials with permissions for
#   s3:PutObject / s3:DeleteObject / s3:ListBucket on the target bucket, and
#   cloudfront:CreateInvalidation on the target distribution.
# =============================================================
set -euo pipefail

BUCKET="${1:?Usage: ./deploy.sh <s3-bucket-name> <cloudfront-distribution-id> [aws-profile]}"
DISTRIBUTION_ID="${2:?Usage: ./deploy.sh <s3-bucket-name> <cloudfront-distribution-id> [aws-profile]}"
PROFILE_ARG=()
if [[ "${3:-}" != "" ]]; then
  PROFILE_ARG=(--profile "$3")
fi

DIST_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/dist"

if [[ ! -d "$DIST_DIR" ]]; then
  echo "dist/ not found at $DIST_DIR — run 'npm run build' first." >&2
  exit 1
fi

echo "==> Building fresh production bundle"
(cd "$(dirname "$DIST_DIR")" && npm run build)

echo "==> Syncing hashed, long-cache assets (JS/CSS with content hashes in filename)"
aws s3 sync "$DIST_DIR/assets" "s3://$BUCKET/assets" \
  "${PROFILE_ARG[@]}" \
  --delete \
  --cache-control "public,max-age=31536000,immutable"

echo "==> Syncing everything else (short cache — index.html, sitemap.xml, robots.txt, favicon)"
aws s3 sync "$DIST_DIR" "s3://$BUCKET" \
  "${PROFILE_ARG[@]}" \
  --delete \
  --exclude "assets/*" \
  --cache-control "public,max-age=0,must-revalidate"

echo "==> Invalidating CloudFront cache"
aws cloudfront create-invalidation \
  "${PROFILE_ARG[@]}" \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*"

echo "==> Done. Allow a few minutes for the CloudFront invalidation to propagate."
