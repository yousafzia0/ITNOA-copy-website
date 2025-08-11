# ITNOA Cybersecurity Consultancy Website

## Overview

This is a modern, responsive cybersecurity consultancy website built with React, TypeScript, and TailwindCSS. The application provides comprehensive information about cybersecurity services, industries served, and client engagement options. The design follows a clean, professional aesthetic with Pakistan green (#01411c) as the primary brand color, reflecting both modern tech aesthetics and subtle Pakistani cultural elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: TailwindCSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for development and production builds
- **Component Structure**: Page-based routing with reusable UI components

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server bundling

### Design System
- **Color Scheme**: Light theme with Pakistan green primary (#01411c)
- **Typography**: Inter font family (configured in TailwindCSS)
- **Components**: Fully accessible Radix UI components with custom styling
- **Responsive Design**: Mobile-first approach with TailwindCSS breakpoints
- **Icons**: Lucide React icon library

## Key Components

### Pages
- **Home**: Hero section with service highlights and company overview
- **Services**: Comprehensive listing of cybersecurity services with detailed individual service pages
- **Industries**: Target industries (Financial, Healthcare, Government, Technology, Manufacturing, Education, Retail, Energy)
- **Contact**: Contact form and company information
- **Become Client**: Client onboarding form

### Service Pages
Individual pages for specialized services including:
- IT Audit
- GRC Consulting  
- Cyber Resilience/Business Continuity
- Penetration Testing
- ISO 27001 Implementation
- NIST CSF Implementation
- PCI DSS Assessments
- Cloud Security Assessments
- And more compliance frameworks

### Shared Components
- **Navigation**: Responsive navigation with mobile menu
- **Footer**: Company information and links
- **Service Detail Template**: Reusable template for service pages
- **UI Components**: Complete shadcn/ui component library

## Data Flow

### Client-Side Routing
- Wouter handles all client-side navigation
- Route definitions centralized in App.tsx
- Dynamic imports for code splitting (not currently implemented)

### Form Handling
- React Hook Form with Zod validation (configured but not fully implemented)
- Toast notifications for user feedback
- Async form submissions with loading states

### State Management
- TanStack React Query for server state (configured for future API integration)
- Local component state for UI interactions
- Toast state management for notifications

## External Dependencies

### UI and Styling
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional CSS class handling
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing
- **react-hook-form**: Form management
- **zod**: Schema validation

### Database and Storage
- **drizzle-orm**: Type-safe ORM (configured for PostgreSQL)
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- Currently using in-memory storage for development

## Deployment Strategy

### Development
- Vite dev server with HMR (Hot Module Replacement)
- TypeScript compilation with strict mode
- Express server with middleware for API routes and static file serving

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations in `migrations/` directory
- **Environment**: Requires `DATABASE_URL` environment variable

### Database Schema
- User authentication schema defined in `shared/schema.ts`
- Drizzle configuration for PostgreSQL in `drizzle.config.ts`
- Schema migrations managed through `drizzle-kit push` command

### Hosting Considerations
- Static assets served from `dist/public`
- Express server handles API routes under `/api` prefix
- Database connection via environment variable
- Ready for deployment on platforms supporting Node.js (Vercel, Railway, etc.)

### Performance Optimizations
- TailwindCSS purging for minimal CSS bundle
- Vite's built-in code splitting and optimization
- Responsive images and lazy loading (not yet implemented)
- Service worker for caching (not yet implemented)

The application is structured as a full-stack TypeScript application with a clear separation between client and server code, shared type definitions, and a modern development workflow optimized for both developer experience and production performance.

## Recent Updates

### Complete Feature Implementation & Production Readiness (January 28, 2025)
- Fixed broken image links in HIPAA Security Audits and Linux Windows OS Audit pages
- Enhanced AI chatbot with comprehensive cybersecurity expertise across ALL domains
- Upgraded AI to handle advanced topics: zero trust, quantum cryptography, DevSecOps, threat intelligence
- AI now provides expert guidance on any cybersecurity topic, not just ITNOA services
- Increased AI response length to 800 tokens for more detailed, actionable advice
- All external image URLs verified and working (HTTP 200 status across all pages)
- Smooth icon animations applied throughout entire website (contact, footer, services, industries)
- Build process completed successfully - production bundle optimized
- All navigation links and 25+ service pages fully functional
- Enhanced chatbot fallback system with intelligent keyword matching
- Mobile-optimized responsive design verified across all components
- No debugging code or console.log statements in production codebase
- Refined ITNOA logo glow effect to be more subtle and professional
- Added Resources page with YouTube video gallery and professional design
- Added two new PeopleSoft services: HCM Security and Financial Security assessments
- Implemented meeting scheduler with business email validation and automated email notifications
- Meeting scheduler integrated in footer with popup form and SendGrid email automation
- All new features fully functional with proper error handling and user feedback
- Removed scroll indicator buttons from all pages for cleaner user experience
- Confirmed full website functionality: meeting scheduler, chatbot, navigation all working perfectly
- Website ready for immediate live deployment with enterprise-grade functionality

### Comprehensive Services Page Redesign & Animations (January 28, 2025)
- Redesigned services page with expandable categories containing all sub-services (9 IT Audit services, 8 ISC services, 3 Business Continuity services)
- Added smooth animations and appropriate icons to each service section for enhanced user experience
- Implemented collapsible service cards that expand downward to show sub-services
- Added contextual icons for all services (Database, Server, Network, Heart for HIPAA, etc.)
- Enhanced hover animations with scale effects, shadow transitions, and icon rotations
- Mobile-optimized with responsive grid layout and full-screen expandable cards
- Added staggered animation delays for service cards when expanding sections
- Implemented professional CSS animations using cubic-bezier curves for smooth transitions

### AI Chatbot Enhancement & Navigation Fix (January 28, 2025)
- Implemented fully functional AI-powered chatbot with OpenAI integration and intelligent fallback system
- Created smooth, mobile-optimized chatbot interface with professional animations
- Added comprehensive service knowledge base with direct links to all service pages
- Implemented quick action buttons for common inquiries (Services, HIPAA, IT Audit)
- Fixed critical navigation issue: pages now always start at the top when navigating
- Added ScrollToTop component that automatically scrolls to top on route changes
- Enhanced mobile chatbot experience with full-screen view and backdrop blur
- Slowed down chatbot bounce animation for more professional appearance (3s duration)
- Added custom scrollbar styling and smooth message animations
- Chatbot works even when OpenAI quota is exceeded using intelligent keyword-based responses

### Professional Icon Animations (January 28, 2025)
- Added comprehensive icon animation system with 11 distinct animation types
- Implemented CSS keyframe animations for search, shield glow, settings spin, pulse, bounce, shake, float, glow, scale, flip, and rotate effects
- Applied contextually appropriate animations to all icons across the website:
  - Search icons: Pulsing search animation
  - Shield icons: Protective glow effect
  - Settings icons: Spinning gear animation
  - Contact icons: Shake, bounce, and pulse effects
  - Social media icons: Bounce, flip, and pulse animations
  - Industry icons: Various animations matching their purpose
- All animations are professional, subtle, and enhance user experience without being distracting
- Animations trigger on hover and use smooth CSS transitions with proper timing
- Modified animation triggers to activate on card/box hover instead of individual icon hover for better user experience
- Updated all service cards, contact info cards, industry cards, and social media icons to use group hover animations