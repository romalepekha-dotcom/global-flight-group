# Blue Wings Aviation - Getting Started

## 🎉 Your Premium Landing Page is Ready!

This is a fully-functional, production-ready Next.js landing page for Blue Wings Aviation.

## 📦 What You Need to Install

You need **Node.js** (version 18 or higher) installed on your system.

### Installing Node.js on Windows:

1. Download from: https://nodejs.org/
2. Run the installer
3. Restart your terminal/PowerShell after installation

## 🚀 Quick Start

Once Node.js is installed:

```powershell
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Then open your browser to: **http://localhost:3000**

## ✏️ Customizing Your Site

### 1. Change Contact Email

Edit `lib/content.ts` and find this line at the top:

```typescript
export const CONTACT_EMAIL = "roman@bluewingsaviation.com";
```

Change it to your email address.

### 2. Update Content

All content is in `lib/content.ts`:
- Hero headlines and subheadlines
- Process steps
- Package descriptions and pricing
- Trust points
- Aircraft types
- FAQ questions and answers
- Contact form options

Just edit the text in that file - no coding required!

### 3. Change Colors (Optional)

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  navy: {
    DEFAULT: '#01274A',  // Your primary navy color
    dark: '#0B0F1A',     // Dark background
  },
  accent: {
    sky: '#38BDF8',      // Light blue accent
    blue: '#60A5FA',     // Darker blue accent
  },
}
```

## 📧 Email Form Setup (Optional)

The contact form has two modes:

### Mode 1: Mailto (Default - No Setup Required)
- Works immediately
- Opens user's email client
- No configuration needed

### Mode 2: EmailJS (Optional - Better UX)
- Sends emails directly from the website
- Better user experience
- Requires free EmailJS account

**To enable EmailJS:**

1. Sign up at https://www.emailjs.com/ (free)
2. Create an email service
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{aircraft}}`
   - `{{budget}}`
   - `{{delivery}}`
   - `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Create a file named `.env.local` in the root folder:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart the dev server

If EmailJS is not configured, the form automatically falls back to mailto.

## 🌐 Deploying to Production

### Option 1: Vercel (Recommended - Free & Easy)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repository
4. Add environment variables (if using EmailJS)
5. Deploy!

### Option 2: Build Locally

```powershell
npm run build
npm start
```

Your site will be available at http://localhost:3000

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Site metadata and layout
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Global styles
│
├── components/          # All page sections
│   ├── Nav.tsx         # Sticky navigation
│   ├── Hero.tsx        # Hero with animated flight path
│   ├── HowItWorks.tsx  # Process timeline
│   ├── Packages.tsx    # Service packages
│   ├── Trust.tsx       # Trust & compliance
│   ├── AircraftTypes.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx
│   └── FloatingCTA.tsx # Floating "Schedule" button
│
├── lib/
│   └── content.ts      # ⭐ ALL CONTENT HERE - Easy to edit!
│
└── Configuration files
```

## ✨ Features Included

✅ Sticky navigation with smooth scroll and active section highlighting  
✅ Animated flight path visualization in hero  
✅ Scroll-driven timeline animation  
✅ Interactive package cards with hover effects  
✅ Trust & compliance proof cards  
✅ Aircraft types grid  
✅ Smooth FAQ accordion  
✅ Contact form with EmailJS + mailto fallback  
✅ Floating CTA button  
✅ Fully responsive (mobile, tablet, desktop)  
✅ Accessibility features (keyboard nav, reduced motion)  
✅ Performance optimized  
✅ SEO metadata  

## 🎨 Design Features

- Premium glass-morphism effects
- Smooth Framer Motion animations
- Parallax scrolling effects
- Gradient accents and glows
- Radar rings and flight path animations
- Professional typography (Montserrat + Inter)
- Dark theme with navy/blue palette

## 🔧 Troubleshooting

**"npm is not recognized"**
- Install Node.js from nodejs.org
- Restart your terminal

**Port 3000 already in use**
- Change port: `npm run dev -- -p 3001`

**Changes not showing**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

**EmailJS not working**
- Check `.env.local` file exists and has correct values
- Restart dev server after adding env variables
- Form will still work with mailto fallback

## 📞 Need Help?

Contact: roman@bluewingsaviation.com

## 🚀 Next Steps

1. Install Node.js if you haven't
2. Run `npm install`
3. Run `npm run dev`
4. Edit `lib/content.ts` to customize your content
5. Deploy to Vercel when ready!

---

**Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion**

