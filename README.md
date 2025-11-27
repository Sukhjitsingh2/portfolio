# VIGILANTEye Portfolio Website

A modern, responsive portfolio website showcasing the VIGILANTEye project, team members, expertise, and contact information.

## Features

- 🎨 Modern, responsive design with dark theme
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive and mobile-friendly
- 🌈 Beautiful gradient effects and glassmorphism
- 🚀 Optimized for performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Expertise.tsx    # Skills & expertise
│   ├── Projects.tsx     # Project showcase
│   ├── Team.tsx         # Team members
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx        # Footer
├── public/              # Static assets
└── package.json         # Dependencies
```

## Customization

### Update Team Information

Edit `components/Team.tsx` to update team member information.

### Update Project Details

Edit `components/Projects.tsx` to modify project information.

### Update Contact Information

Edit `components/Contact.tsx` to change contact details.

### Change Colors

Modify the color scheme in `tailwind.config.ts` under the `colors` section.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed on:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any platform supporting Next.js

## License

MIT License

## Contributors

- Sukjit Singh (@Sukhjitsingh2) - Lead Developer
- N SriDatta (@NSriDatta16)
- Bhavik Gandhi (@probablybhavik)
- Sameer Keshavani (@sameerkeshvani)

