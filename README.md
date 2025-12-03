# APEC International Website

Modern, minimalist website for APEC International (Action Pour l'Education Citoyenne), a Guinean NGO focused on promoting democracy, citizenship, road safety, and youth empowerment.

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Package Manager:** npm

## Features

- 🎨 Modern, minimalist design with cream/orange color scheme
- ⚡ Fast, optimized performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessible (WCAG 2.1 AA compliant)
- 🌐 French language interface
- 🔍 SEO optimized with metadata
- 📊 Project showcase with filtering
- 📧 Contact form with validation
- 💰 Donation page with multiple payment methods
- 🗺️ Integrated Google Maps

## Pages

1. **Home (/)** - Hero, mission statement, statistics, featured projects
2. **About (/a-propos)** - Organization mission, values, and vision
3. **Projects (/projets)** - Filterable project grid showing 2023 initiatives
4. **Contact (/contact)** - Contact form with map integration
5. **Donate (/faire-un-don)** - Donation methods and transparency information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd /Volumes/KanjiDev/apec
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
apec/
├── src/
│   ├── app/                      # Next.js app directory
│   │   ├── layout.tsx           # Root layout with fonts
│   │   ├── page.tsx             # Home page
│   │   ├── a-propos/            # About page
│   │   ├── projets/             # Projects page
│   │   ├── contact/             # Contact page
│   │   └── faire-un-don/        # Donate page
│   ├── components/
│   │   ├── ui/                  # Reusable components (Button, Card, Input, etc.)
│   │   ├── layout/              # Layout components (Header, Footer, Newsletter)
│   │   └── sections/            # Page-specific sections
│   │       ├── home/
│   │       ├── about/
│   │       ├── projects/
│   │       ├── contact/
│   │       └── donate/
│   └── lib/
│       ├── constants.ts         # Project data, contact info, etc.
│       └── types.ts             # TypeScript interfaces
├── public/
│   └── images/                  # Image assets
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## Design System

### Colors

- **Primary Orange:** `#dd743a`
- **Light Orange:** `#f4a261`
- **Background Cream:** `#f5f3e8`
- **Dark Text:** `#2d1f2d`
- **White:** `#ffffff`

### Typography

- **Primary Font:** Poppins (Regular 400, Medium 500, Semibold 600)
- **Accent Font:** Fraunces (Italic) - for emphasized words

### Animations

All animations use Framer Motion:
- Page transitions (fade in)
- Scroll-triggered animations (slide up, fade in)
- Hover effects on cards and buttons
- Counter animations for statistics
- Smooth parallax effects

## Customization

### Adding Content

1. **Projects:** Edit `src/lib/constants.ts` and add to the `projects` array
2. **Contact Info:** Update the `contactInfo` object in `src/lib/constants.ts`
3. **Statistics:** Modify the `statistics` array in `src/lib/constants.ts`

### Adding Images

1. Place images in `public/images/`
2. Reference them in components using Next.js Image component
3. Replace placeholder divs in components with actual images

### Logo

Add your logo to `public/logo.svg` and update references in:
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`

## Future Enhancements

- [ ] Integrate Sanity CMS for blog/news management
- [ ] Add payment gateway for online donations
- [ ] Implement volunteer registration system
- [ ] Add project search functionality
- [ ] Multi-language support (English)
- [ ] Email service integration for contact form

## Contact Information

**APEC International**
- Address: Kiroty, Nongo, Conakry, Guinea
- Phone: (+224) 628 48 47 84 / 628 90 59 59
- Email: apecguinee2023@gmail.com
- Facebook: [APEC Guinea](https://facebook.com/apecguinee)

## License

© 2024 APEC International. All rights reserved.
