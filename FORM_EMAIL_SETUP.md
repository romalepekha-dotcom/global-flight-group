# Form Email Setup & Testing

## Overview
The consultation form uses a Next.js API route (`/api/consultation`) that sends emails via **Resend**.

## Development Mode (Localhost)

### Without API Key
The form works in development mode WITHOUT any API key:
- Form submissions are logged to the **server console**
- Returns success to the user
- No actual emails are sent
- Perfect for local testing

### Test Locally
```bash
# 1. Start dev server
npm run dev

# 2. Visit http://localhost:3000
# 3. Fill out the contact form
# 4. Click "Request Consultation"
# 5. Check your terminal/console for form data
```

You'll see output like:
```
📧 Form Submission (Development Mode):
To: roman@globalflightgroup.com
From: John Doe <john@example.com>
Message: I'm interested in a Cessna 172...
---
Set RESEND_API_KEY env var to enable email delivery
```

## Production Mode (Real Emails)

### Setup Resend

1. **Create Resend Account**
   - Go to https://resend.com/
   - Sign up (free tier: 100 emails/day)
   - Verify your email

2. **Get API Key**
   - Go to https://resend.com/api-keys
   - Click "Create API Key"
   - Copy the key (starts with `re_`)

3. **Add Domain (Optional but Recommended)**
   - Go to https://resend.com/domains
   - Add `globalflightgroup.com`
   - Add DNS records (SPF, DKIM)
   - Verify domain

4. **Set Environment Variable**

   Create `.env.local` file:
   ```bash
   RESEND_API_KEY=re_your_api_key_here
   ```

5. **Restart Server**
   ```bash
   npm run dev
   ```

### Test with Real Emails
```bash
# 1. Make sure RESEND_API_KEY is set
# 2. Start server: npm run dev
# 3. Submit form
# 4. Check roman@globalflightgroup.com inbox
```

## Environment Variables

### `.env.local` (for development)
```bash
RESEND_API_KEY=re_your_api_key_here
```

### Production (Vercel/Netlify)
Add environment variable in your deployment platform:
- **Name**: `RESEND_API_KEY`
- **Value**: `re_your_api_key_here`

## Features

✅ **Spam Protection**: Honeypot field catches bots
✅ **Validation**: Required fields (Name, Email, Message)
✅ **Dev Mode**: Works locally without API key
✅ **Error Handling**: User-friendly error messages
✅ **Success State**: "Request sent - we'll reply within 24 hours."
✅ **Form Reset**: Clears fields after submission
✅ **Disabled State**: Button disabled while sending

## Email Details

- **From**: `Global Flight Group <noreply@globalflightgroup.com>`
- **To**: `roman@globalflightgroup.com`
- **Reply-To**: User's email address
- **Subject**: `Aircraft Inquiry from [User Name]`

## Troubleshooting

### Form not working in dev?
- Check terminal/console for error messages
- Form should still work without API key (dev mode)
- Check that `/api/consultation/route.ts` exists

### Emails not arriving in production?
- Verify `RESEND_API_KEY` is set in environment variables
- Check Resend dashboard for delivery status
- Verify domain is configured (if using custom domain)
- Check spam folder

### API Key errors?
- Make sure key starts with `re_`
- Verify key is active in Resend dashboard
- Check `.env.local` file is in project root
- Restart dev server after adding env var

## Alternative: Formspree

If you prefer Formspree instead of Resend:

1. Create account at https://formspree.io/
2. Create form, get endpoint like `https://formspree.io/f/xanykpbg`
3. Update `components/Contact.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   ```

## Support

- **Resend Docs**: https://resend.com/docs
- **Resend Status**: https://status.resend.com/
- **Free Tier**: 100 emails/day, 3,000/month

## Summary

- ✅ Works locally WITHOUT any setup (dev mode)
- ✅ Add RESEND_API_KEY for real email delivery
- ✅ Free tier is sufficient for most use cases
- ✅ Spam protected with honeypot
- ✅ User-friendly error messages

