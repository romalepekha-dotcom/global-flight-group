# Blue Wings Aviation - Landing Page

A stunning, ultra-modern single-page landing site for Blue Wings Aviation, specializing in U.S. aircraft acquisition and export to Paraguay.

## 🚀 Features

- **Premium Design**: Modern, minimal design with smooth animations and high polish
- **Interactive Elements**: 
  - Animated flight path visualization
  - Scroll-driven timeline
  - Smooth scrollspy navigation
  - Interactive package selector
  - Accordion FAQ
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **Accessibility**: Keyboard navigable, high contrast, reduced motion support
- **Contact Form**: EmailJS integration with mailto fallback

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: EmailJS (optional)

## 📋 Prerequisites

- Node.js 18+ and npm

## 🚀 Getting Started

1. **Install Dependencies**

```bash
npm install
```

2. **Configure Environment Variables (Optional)**

Copy `.env.local.example` to `.env.local` and fill in your EmailJS credentials if you want to use EmailJS for form submissions. If not configured, the form will use mailto fallback.

```bash
cp .env.local.example .env.local
```

3. **Run Development Server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**

```bash
npm run build
npm start
```

## 📝 Customization

### Contact Email

The contact email is defined in `lib/content.ts`:

```typescript
export const CONTACT_EMAIL = "roman@bluewingsaviation.com";
```

### Content

All content (copy, package details, FAQ items, etc.) is centralized in `lib/content.ts` for easy editing.

### Colors

Brand colors are defined in `tailwind.config.ts`:

- Primary Navy: `#01274A`
- Dark Navy: `#0B0F1A`
- Accent Sky: `#38BDF8`
- Accent Blue: `#60A5FA`

### EmailJS Setup (Optional)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your public key
5. Add credentials to `.env.local`

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page assembling all components
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Nav.tsx             # Sticky navigation with scrollspy
│   ├── Hero.tsx            # Hero section with animated flight path
│   ├── HowItWorks.tsx      # Process timeline with scroll animation
│   ├── Packages.tsx        # Service packages selector
│   ├── Trust.tsx           # Trust & compliance cards
│   ├── AircraftTypes.tsx   # Aircraft types grid
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Contact.tsx         # Contact form with EmailJS
│   ├── Footer.tsx          # Footer with links
│   └── FloatingCTA.tsx     # Floating call-to-action button
├── lib/
│   └── content.ts          # All content and constants
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Design System

### Typography

- **Headings**: Montserrat (bold, strong hierarchy)
- **Body**: Inter (clean, readable)

### Components

- **Glass Panels**: Frosted glass effect with backdrop blur
- **Buttons**: Primary (gradient) and Secondary (glass)
- **Animations**: Smooth, purposeful motion with reduced motion support

### Spacing

Generous spacing throughout for a premium feel, using Tailwind's spacing scale.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2026 Blue Wings Aviation. All rights reserved.

## 🤝 Support

For questions or support, contact: roman@bluewingsaviation.com

