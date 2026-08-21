# Deploying WellZED to your existing S3 + CloudFront + domain

This assumes you already have:
- an S3 bucket for static hosting
- a CloudFront distribution pointing at that bucket
- a domain (via Route 53 or elsewhere) pointing at the CloudFront distribution

## 1. One-time CloudFront setup (required for React Router)

This is a single-page app — all routes (`/ndis`, `/contact`, `/ndis/products/mmm-finder`, etc.)
are handled client-side by React Router. If someone loads `/ndis/products/mmm-finder` directly
(not by clicking a link from `/`), S3 will return a 403/404 for that path unless CloudFront is
told to serve `index.html` instead and let React Router take over.

In your CloudFront distribution, add **Custom Error Responses**:

| HTTP error code | Response page path | HTTP response code | TTL |
|---|---|---|---|
| 403 | `/index.html` | 200 | 0 (or a few seconds) |
| 404 | `/index.html` | 200 | 0 (or a few seconds) |

(Console: CloudFront → your distribution → **Error pages** tab → Create custom error response.)

If your S3 origin is set up as a **static website hosting endpoint** (not an S3 REST/OAC origin),
you can instead set the bucket's error document to `index.html` directly in S3 static website
hosting settings, and skip the CloudFront custom error responses. Either approach works — pick
whichever matches how the bucket is already wired up to CloudFront.

## 2. Set your real domain for the sitemap

Before building, set the `SITE_DOMAIN` env var to your real domain so `sitemap.xml` contains the
correct URLs:

```bash
export SITE_DOMAIN="https://www.wellzed.com.au"
```

(Defaults to `https://www.wellzed.com.au` already — only needed if that changes.)

## 3. Deploy

```bash
cd wellzed-site
npm install
./deploy/deploy.sh <your-s3-bucket-name> <your-cloudfront-distribution-id> [aws-profile]
```

This will:
1. Run `npm run build` (Vite build + sitemap.xml generation)
2. Sync `dist/assets/*` (hashed JS/CSS) to S3 with a 1-year immutable cache
3. Sync everything else (`index.html`, `sitemap.xml`, `robots.txt`, `favicon.svg`) with a
   no-cache header, so visitors always get the latest shell HTML
4. Invalidate the CloudFront distribution (`/*`) so changes go live immediately

You need AWS CLI v2 installed and credentials configured (`aws configure` or an SSO profile)
with permission to write to the bucket and invalidate the distribution.

## 4. Contact form — swap the mailto fallback

The Contact page (`src/pages/Contact.jsx`) currently opens the visitor's email client via a
`mailto:` link when the form is submitted. For a production-grade version, replace the
`handleSubmit` function with a `fetch()` call to a real backend — the field names already match
the sitemap/architecture doc, so no other page changes are needed. A simple serverless option:

- API Gateway (HTTP API) → Lambda → SES `SendEmail`, or
- API Gateway → Lambda → write to DynamoDB + SES notification

Both fit naturally next to a CloudFront + S3 static site — happy to build that Lambda/API
Gateway piece as a follow-up if useful.

## CI/CD (optional)

If you'd like this to deploy automatically on push, the same three `aws` commands in
`deploy.sh` can run inside a GitHub Actions workflow using `aws-actions/configure-aws-credentials`
with an OIDC role (no long-lived AWS keys stored in GitHub). Ask and I can add that workflow file.
