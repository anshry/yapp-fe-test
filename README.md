# Raflux Landing Page Clone - Monklabs Technical Test

This project is a pixel-perfect, highly responsive frontend clone of the [Raflux Website](https://raflux.io), developed as part of the Monklabs Technical Test.

## Live Deployment

🚀 **[View the Live Site](https://yapp-fe-test.onrender.com/)**

## Objective Checkmarks

This implementation strictly adheres to the technical test requirements:
- **Responsive Design**: Flawless layout on Desktop (≥ 1024px) down to Mobile (≤ 768px).
- **Animations & Interactions**: Implemented complex micro-interactions, custom cursor tracking, infinite carousels, and 3D WebGL hero textures via Framer Motion & GSAP concepts.
- **Performance Optimization**: Code-split route architecture with intelligent parallel preloading for the WebGL Canvas bundle behind the initial animated splash screen.
- **Attention to Detail**: Exacting typography sizes, tailored Tailwind class configurations, structural grid alignment, and matching semantic HTML.
- **Code Quality**: Strict static typing over pure explicit boundaries, fully linted codebase, and organized UI component abstraction.

## Tech Stack

The requested stack allowed flexibility as long as core constraints were met. The foundation of this repository runs on:
- **Framework**: React 18 + Vite (SPA)
- **Routing**: `@tanstack/react-router` for type-safe filesystem tracking
- **Styling**: Tailwind CSS
- **Animations**: `framer-motion` for layout shifts & entry vectors
- **3D Graphics**: `@react-three/fiber` & `three` for the interactive Hero backdrop

## Local Setup Instructions

Ensure you have Node.js and `pnpm` (or `npm`/`yarn`) installed on your local machine.

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```
   The application will be running at `http://localhost:3000/`. *Note: The local Vite dev server intentionally skips chunk bundling for fast HMR. To see true production performance simulations, use the build preview commands below.*

4. **Build for Production / Preview**
   ```bash
   pnpm build
   pnpm preview
   ```
   This will compile the application into a highly optimized `/dist` folder with dynamic import boundaries, demonstrating the optimal 700ms load times and background ThreeJS fetching.

## Bonus Features Included

- Heavily abstracted, modular folder structure (`/src/components/sections/section-*`).
- Zero-flash Loading Screen algorithm that properly holds unmounting until both arbitrary asset promises (images) AND isolated Javascript chunks (`lazy()`) independently resolve.
- Scroll-linked animation hooks leveraging `framer-motion` viewport tracking.
- WebGL texture interactive trailing cursor effects built on custom Fragment Shaders.
