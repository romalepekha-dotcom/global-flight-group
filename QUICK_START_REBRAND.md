# Quick Start - Global Flight Group

## ✅ COMPLETED

### 1. Rebrand to Global Flight Group
- Company name: **Global Flight Group**
- Email: **roman@globalflightgroup.com**
- All brand references updated

### 2. Working Contact Form
- Integrated with **Formspree**
- Spam protection (honeypot field)
- Email delivery to roman@globalflightgroup.com

### 3. Accurate World Map
- Natural Earth 110m land data
- Real geographic coordinates
- Maintains radar aesthetic

---

## 🚀 SETUP (5 MINUTES)

### Step 1: Setup Formspree
```bash
# 1. Go to https://formspree.io/ and create account
# 2. Create new form named "Global Flight Group Contact"
# 3. Set email to: roman@globalflightgroup.com
# 4. Copy your form ID (looks like: xanykpbg)
```

### Step 2: Update Form Endpoint
Open `components/Contact.tsx` and find line 49:
```typescript
const formspreeEndpoint = 'https://formspree.io/f/xanykpbg';
```
Replace `xanykpbg` with your actual Formspree form ID.

### Step 3: Test
```bash
# Start dev server
npm run dev

# Visit http://localhost:3000
# Test the contact form
# Check your email
```

---

## 📋 FILES CHANGED

1. **`lib/content.ts`** - Brand name and email
2. **`app/layout.tsx`** - Page metadata
3. **`components/Contact.tsx`** - Form submission logic
4. **`components/Hero.tsx`** - Map with real geography
5. **`public/world-land-110m.json`** - Geographic data (NEW)

---

## ✨ FEATURES

### Contact Form
✅ Sends to roman@globalflightgroup.com
✅ Spam protection (honeypot)
✅ Field validation
✅ Success message: "Request sent — we'll reply within 24 hours."
✅ Error handling

### World Map
✅ Accurate continent shapes
✅ Real lon/lat coordinates
✅ Interactive regions
✅ Animated flight paths
✅ Radar aesthetic

---

## 🧪 TESTING

### Test Form
1. Fill out all fields
2. Click "Request Consultation"
3. See success message
4. Check email at roman@globalflightgroup.com

### Test Map
1. See accurate continent shapes
2. Click different destinations
3. Watch route arc animate
4. See aircraft dot move along path

---

## 📚 DOCUMENTATION

- **`REBRAND_SUMMARY.md`** - Complete change details
- **`FORMSPREE_SETUP.md`** - Detailed Formspree setup
- **`QUICK_START_REBRAND.md`** - This file

---

## 🆘 TROUBLESHOOTING

### Form not sending emails?
- Check Formspree form ID is correct
- Verify email address in Formspree dashboard
- Check spam folder

### Map not showing?
- Verify `/world-land-110m.json` exists in `public/` folder
- Check browser console for errors
- Clear cache and reload

### Dev server not starting?
- Run `npm install`
- Delete `.next` folder
- Run `npm run dev` again

---

## ✅ READY TO DEPLOY

Once Formspree is setup, you're ready to deploy:

```bash
npm run build
npm run start
```

Or deploy to Vercel/Netlify:
```bash
git add .
git commit -m "Rebrand to Global Flight Group"
git push
```

---

**Status**: ✅ Ready for production
**Last Updated**: 2026-01-02
**Contact**: roman@globalflightgroup.com

