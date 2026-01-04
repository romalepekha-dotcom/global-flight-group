# Setup Instructions

## Environment Variables (Optional)

If you want to use EmailJS for form submissions:

1. Create a file named `.env.local` in the root directory
2. Add the following variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Sign up at https://www.emailjs.com/ to get these credentials

If not configured, the contact form will use mailto fallback automatically.

## Contact Email

To change the contact email, edit `lib/content.ts`:

```typescript
export const CONTACT_EMAIL = "roman@bluewingsaviation.com";
```

## Installation

```bash
npm install
npm run dev
```

Visit http://localhost:3000

