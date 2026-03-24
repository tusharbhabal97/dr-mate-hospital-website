# MediCare Plus - Hospital Website

A modern, fully responsive multi-specialty hospital website built with **Next.js 14** and **Tailwind CSS**.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
hospital-website/
├── app/
│   ├── globals.css         # Global styles, animations
│   ├── layout.tsx          # Root layout with SEO metadata
│   └── page.tsx            # Main page
├── components/
│   ├── Navbar.tsx           # Sticky navbar with mobile menu
│   ├── Hero.tsx             # Hero section with doctor image
│   ├── Services.tsx         # 8 department cards
│   ├── About.tsx            # About hospital + stats
│   ├── Doctors.tsx          # Doctor profiles grid
│   ├── Facilities.tsx       # Hospital facilities
│   ├── AppointmentProcess.tsx # 4-step booking flow
│   ├── Testimonials.tsx     # Auto-rotating testimonials
│   ├── Contact.tsx          # Appointment form + map
│   └── Footer.tsx           # Footer with links
├── public/
│   └── images/
│       └── doctor.png       # Doctor image (add your own)
├── tailwind.config.ts
└── package.json
```

---

## 🎨 Color Theme (Blue Healthcare)

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#1B6BF0` | Buttons, CTAs, accents |
| Primary Light | `#4A8FF5` | Hover states |
| Accent Cyan | `#00C4E8` | Gradients, highlights |
| Dark | `#0D1B2A` | Headings, text |
| Muted | `#6B7A8D` | Body text |
| Surface | `#F0F7FF` | Section backgrounds |

---

## 📱 Sections

1. **Navbar** - Sticky, responsive with hamburger mobile menu
2. **Hero** - Animated doctor image, floating icons, dashed rings, stats
3. **Services** - 8 medical departments with hover animations
4. **About** - Stats grid, highlights checklist, parallax card
5. **Doctors** - 6 specialist cards with ratings and booking button
6. **Facilities** - 8 facility cards + infrastructure stats bar
7. **Appointment Steps** - 4-step visual process flow
8. **Testimonials** - Auto-rotating 3-card carousel with dots
9. **Contact** - Appointment form + Google Maps + contact cards
10. **Footer** - Links, contact info, emergency banner

---

## 🖼️ Adding Your Own Images

Place images in `/public/images/`:
- `doctor.png` — Hero doctor image (already included)
- `hospital.jpg` — Hospital exterior (optional)
- Add any other images and reference as `/images/filename.ext`

---

## ⚙️ Customization

**Hospital Name:** Search `MediCare Plus` and replace with your hospital name.

**Phone/Email/Address:** Update in `components/Contact.tsx` and `components/Footer.tsx`.

**Doctors:** Edit the `doctors` array in `components/Doctors.tsx`.

**Services:** Edit the `services` array in `components/Services.tsx`.

**Colors:** Modify `tailwind.config.ts` primary color values.

---

## 🔍 SEO

- Full meta tags and OpenGraph in `app/layout.tsx`
- Semantic HTML throughout
- Next.js Image optimization
- Proper heading hierarchy
- ARIA labels on interactive elements

---

Built with ❤️ for Healthcare Excellence
