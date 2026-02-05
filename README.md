# NxtWave Intensive Clone 🚀

A high-fidelity, pixel-perfect clone of the [NxtWave Intensive](https://www.joined.nxtwave.tech/intensive) landing page, built with modern web technologies.

![NxtWave Intensive Banner](https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/690d6fab0cae49e13e2d5ef9_Group%201000005139.png)

## 📋 Overview

This project is a precision-focused recreation of the NxtWave Intensive marketing site. It aims to capture the exact look, feel, and interactivity of the original platform, highlighting modern frontend development practices.

The application features complex layouts, custom animations, responsive design patterns, and interactive elements.

## ✨ Key Features

- **High-Fidelity UI**: Pixel-perfect implementation of sections like Hero, Trusted By, Doubts, and Footer to match specific design references.
- **Custom Animations**:
  - Hand-drawn "scribble" SVG animations.
  - Smooth scrolling marquees for "Trusted By" companies.
  - Reveal animations using **Framer Motion**.
- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop viewports.
- **Interactive Forms**: Demo booking form with validation using **React Hook Form** and **Zod**.
- **Modern Styling**: Built with **Tailwind CSS v4** for a utility-first, maintainable styling architecture.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nxtwave-intensive
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in Browser**
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main landing page
├── components/
│   ├── layout/           # Global layout components (Header, Footer)
│   ├── sections/         # Individual landing page sections (Hero, TrustedBy, etc.)
│   ├── shared/           # Reusable UI components (Buttons, Cards, ChatWidget)
│   └── ui/               # shadcn/ui or base components
└── lib/
    ├── data/             # Static data files (testimonials, faqs, etc.)
    └── utils.ts          # Utility functions
```

## 🎨 Key Sections Implemented

- **Hero Section**: Dynamic carousel with "scribble" animations.
- **Trusted By Section**: Dual-column stats and auto-scrolling candidate marquee.
- **Doubts Clarification**: Interactive layout with custom illustrations and typography.
- **Course Tracks**: Tabbed or grid-based overview of available programs.
- **Testimonials**: Grid layout with success stories and video thumbnails.
- **Payment Plans**: Pricing cards with detailed benefits.

## 📝 License

This project is for educational and portfolio purposes. All original branding, logos, and content belong to [NxtWave](https://www.nxtwave.tech/).
