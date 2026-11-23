# Ilmora Academy Website

Production marketing website for **Ilmora Academy**, built with React, TypeScript, Vite, and Tailwind CSS for families, children, adults, new Muslims, and Pakistani diaspora households in the UK and USA.

## Deploying from GitHub to Vercel

1. Push this repository to GitHub.
2. In the Vercel dashboard, click **Add New Project** and import your GitHub repository.
3. Vercel detects the configuration automatically from `vercel.json`:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Client-side routes (`/Kids`, `/Adults`, `/Reverts`, `/Pakistani`, `/About`, `/Privacy`, `/Terms`, `/Contact`) are handled automatically by `vercel.json` rewrites.

## Enabling Live Email or CRM Notifications for Trial Bookings

The Free Trial modal and Contact form post to the included Vercel Serverless Function at `/api/lead`. To receive live lead notifications when deployed on Vercel, add either option in **Vercel Project Settings -> Environment Variables**:

- **Email via Resend**: Set `RESEND_API_KEY` and `LEAD_NOTIFICATION_EMAIL` (defaults to `ilmoraonline@gmail.com`).
- **Webhook (Zapier, Make, Google Sheets, CRM)**: Set `LEAD_WEBHOOK_URL` to receive JSON lead payloads on every submission.

## Local Development

```bash
npm install
npm run dev
```
