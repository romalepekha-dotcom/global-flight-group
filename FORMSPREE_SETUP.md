# Formspree Setup Instructions

## What is Formspree?
Formspree is a form backend service that handles form submissions and sends them to your email. It's free for up to 50 submissions/month.

## Setup Steps

### 1. Create a Formspree Account
1. Go to https://formspree.io/
2. Sign up with your email (roman@globalflightgroup.com)
3. Verify your email address

### 2. Create a New Form
1. Click "New Form" in your Formspree dashboard
2. Name it: "Global Flight Group - Contact Form"
3. Set the email to: roman@globalflightgroup.com
4. Copy the form endpoint URL (looks like: `https://formspree.io/f/xanykpbg`)

### 3. Update the Code
1. Open `components/Contact.tsx`
2. Find line with `const formspreeEndpoint = 'https://formspree.io/f/xanykpbg';`
3. Replace `xanykpbg` with your actual Formspree form ID

### 4. Test the Form
1. Visit your website
2. Fill out the contact form
3. Submit it
4. Check your email (roman@globalflightgroup.com)
5. You should receive the form submission

## Features Included

✅ **Spam Protection**: Honeypot field catches bots
✅ **Email Validation**: Client-side validation before submission
✅ **Success Message**: "Request sent — we'll reply within 24 hours."
✅ **Error Handling**: Graceful fallback with error messages
✅ **Form Reset**: Clears all fields after successful submission

## Formspree Free Tier Limits
- 50 submissions per month
- Email notifications
- Spam filtering
- File uploads (not used in this form)

## Upgrade Options
If you need more than 50 submissions/month:
- **Basic Plan**: $10/month for 1,000 submissions
- **Pro Plan**: $40/month for 10,000 submissions

## Alternative: Resend
If you prefer a different service, you can use Resend:
1. Sign up at https://resend.com/
2. Get API key
3. Create a Next.js API route at `app/api/contact/route.ts`
4. Use Resend SDK to send emails

## Support
If you have issues:
- Formspree Docs: https://help.formspree.io/
- Check spam folder for test emails
- Verify form endpoint URL is correct

