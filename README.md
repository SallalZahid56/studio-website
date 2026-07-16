PIXELCRAFT STUDIO
The digital agency that refuses to blend in.

Welcome to the official repository for the PixelCraft Studio landing page—a bold, high-converting, and hyper-responsive showcase website designed for creative agencies who want to dominate their market. Built using a modern, pixel-perfect stack of Next.js, React, TypeScript, and Tailwind CSS.

🔥 Key Features
⚡ Modern Next.js Architecture: Built using the Next.js App Router for optimal performance, routing, and fast initial page loads.

🎨 Bold & Rebellious UI: High-contrast dark theme elements balanced with clean minimalist spaces to capture absolute attention.

📦 Fully Typed React Components: Form flows, layout modules, and transitions built using clean, robust TypeScript.

✉️ Interactive Contact Engine: Built-in investment tier selector, state-controlled inputs, and dynamic submission feedback alerts.

⚡ Bulletproof SVG Architecture: Optimized icon fallbacks inside the footer to prevent TypeScript build failures and package drift.

📱 Edge-to-Edge Responsiveness: Extensively tested grid layouts that degrade beautifully from high-resolution desktop screens down to mobile viewports.

🛠️ Tech Stack
Framework: Next.js 14+ (App Router)

Library: React 18+

Styling: Tailwind CSS

Icons: Lucide React (with optimized inline brand SVGs)

Language: TypeScript

📁 Project Directory Structure
Here is how the core layout modules are organized within the directory:

Bash
studio-website/
├── public/                 # Static assets (images, logos, icons)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # App global layout & metadata
│   │   ├── page.tsx        # Aggregated home page view
│   │   └── globals.css     # Tailwind imports and root variables
│   └── components/
│       ├── Hero.tsx        # Impact introduction area
│       ├── Portfolio.tsx   # Interactive work showcase
│       ├── About.tsx       # Team values, narrative, & stats
│       ├── Contact.tsx     # State-managed conversion form
│       └── Footer.tsx      # Social directory & quick links
├── tailwind.config.ts      # Configured with the custom brand color token
├── package.json
└── tsconfig.json
🚀 Getting Started
Follow these steps to spin up PixelCraft Studio on your local development environment:

1. Clone the Repository
Bash
git clone https://github.com/your-username/studio-website.git
cd studio-website
2. Install Dependencies
Make sure you are on Node.js 18+ and install the project dependencies:

Bash
npm install
3. Run the Development Server
Kick off the local server on http://localhost:3000:

Bash
npm run dev
4. Build for Production
To generate a highly optimized, static, and production-ready build, run:

Bash
npm run build
npm run start
🎨 Customizing the Accent Color
This project uses a unified color configuration mapping called brand. To change the primary agency accent color system-wide:

Open your tailwind.config.ts (or tailwind.config.js) file.

Update the colors.brand value to match your own brand hex key:

TypeScript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF3E3E', // Change your dominant accent hex here
          light: '#FF5E5E',   // Change your hover accent hex here
        }
      }
    }
  }
}
export default config;