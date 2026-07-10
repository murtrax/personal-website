const vercelProductionDomain =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = (
  process.env.SITE_URL ??
  (vercelProductionDomain
    ? `https://${vercelProductionDomain}`
    : "http://localhost:3000")
).replace(/\/$/, "");
