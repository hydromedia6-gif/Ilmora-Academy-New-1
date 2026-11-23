import type { IncomingMessage, ServerResponse } from 'node:http';

interface VercelRequest extends IncomingMessage {
  body?: unknown;
}

interface VercelResponse extends ServerResponse {
  status?: (code: number) => VercelResponse;
  json?: (data: unknown) => void;
}

interface LeadPayload {
  type?: 'trial' | 'contact';
  fullName?: string;
  email?: string;
  phone?: string;
  classFor?: string;
  studentAge?: string;
  timezone?: string;
  message?: string;
}

function sendJson(res: VercelResponse, statusCode: number, payload: unknown) {
  if (typeof res.status === 'function') {
    const statusRes = res.status(statusCode);
    if (statusRes && typeof statusRes.json === 'function') {
      statusRes.json(payload);
      return;
    }
  }
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload));
}

async function readBody(req: VercelRequest): Promise<LeadPayload> {
  if (req.body && typeof req.body === 'object') {
    return req.body as LeadPayload;
  }
  if (typeof req.body === 'string') {
    return JSON.parse(req.body) as LeadPayload;
  }
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? (JSON.parse(raw) as LeadPayload) : {};
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Method not allowed' });
    return;
  }

  let body: LeadPayload;
  try {
    body = await readBody(req);
  } catch {
    sendJson(res, 400, { error: 'Invalid JSON request body' });
    return;
  }

  const fullName = (body.fullName || '').trim();
  const email = (body.email || '').trim();
  if (!fullName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    sendJson(res, 400, { error: 'Valid name and email are required.' });
    return;
  }

  const leadRecord = {
    type: body.type === 'contact' ? 'contact' : 'trial',
    fullName,
    email,
    phone: (body.phone || '').trim(),
    classFor: (body.classFor || '').trim(),
    studentAge: (body.studentAge || '').trim(),
    timezone: (body.timezone || '').trim(),
    message: (body.message || '').trim(),
    submittedAt: new Date().toISOString(),
  };

  // Optional Resend email forwarding when RESEND_API_KEY is configured in Vercel
  const resendKey = process.env.RESEND_API_KEY;
  const recipient = process.env.LEAD_NOTIFICATION_EMAIL || 'ilmoraonline@gmail.com';
  if (resendKey) {
    try {
      const subject =
        leadRecord.type === 'contact'
          ? `New Ilmora Academy Contact Inquiry from ${leadRecord.fullName}`
          : `New Free Trial Booking: ${leadRecord.fullName} (${leadRecord.timezone || 'Unspecified TZ'})`;

      const textLines = [
        `Type: ${leadRecord.type.toUpperCase()}`,
        `Name: ${leadRecord.fullName}`,
        `Email: ${leadRecord.email}`,
        leadRecord.phone ? `WhatsApp / Phone: ${leadRecord.phone}` : null,
        leadRecord.classFor ? `Class For: ${leadRecord.classFor}` : null,
        leadRecord.studentAge ? `Student Age: ${leadRecord.studentAge}` : null,
        leadRecord.timezone ? `Timezone: ${leadRecord.timezone}` : null,
        leadRecord.message ? `Message:\n${leadRecord.message}` : null,
        `Submitted At: ${leadRecord.submittedAt}`,
      ].filter(Boolean);

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'Ilmora Academy <onboarding@resend.dev>',
          to: [recipient],
          reply_to: leadRecord.email,
          subject,
          text: textLines.join('\n'),
        }),
      });
    } catch {
      // Do not fail user confirmation if optional email relay experiences a transient error
    }
  }

  // Optional Webhook forwarding (Zapier, Make, Google Apps Script, Slack, CRM)
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadRecord),
      });
    } catch {
      // Ignore webhook errors to preserve smooth user confirmation
    }
  }

  sendJson(res, 200, { ok: true, receivedAt: leadRecord.submittedAt });
}
