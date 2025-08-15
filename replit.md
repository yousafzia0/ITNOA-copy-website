# ITNOA Cybersecurity Consultancy Website

## Overview
This project is a professional IT audit and assurance consultancy website designed specifically for Chief Audit Executives, Board members, and senior management oversight. The website showcases ITNOA's expertise in independent IT audit services conducted in accordance with IIA International Standards, enterprise GRC consulting aligned with the Three Lines of Defense Model, and comprehensive business continuity assurance. All content has been enhanced with IIA-compliant terminology and methodology to appeal directly to Chief Audit Executives and demonstrate Board-ready capabilities. The website features an AI-powered chatbot, professional email integration, and an executive-level Business Continuity Planning diagram. The design maintains a clean, professional aesthetic with Pakistan green as the primary brand color, emphasizing credibility and audit expertise for enterprise clients.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: TailwindCSS with custom CSS variables, focusing on mobile-first responsive design.
- **UI Components**: Radix UI primitives and shadcn/ui component library for accessible and reusable components.
- **State Management**: TanStack React Query for server state management, and local component state for UI interactions.
- **Build Tool**: Vite for development and production builds.
- **Design System**: Light theme with Pakistan green primary (#01411c), Inter font family, Lucide React icons, and accessible Radix UI components.
- **Key Features**: Page-based routing, comprehensive service pages with expandable categories, client onboarding forms, and a responsive navigation system.
- **Interactive Elements**: Smooth animations for icons, service cards, and a sophisticated animated Business Continuity Planning diagram using Framer Motion.

### Backend
- **Runtime**: Node.js with Express.js server.
- **Language**: TypeScript with ES modules.
- **Development**: tsx for TypeScript execution.
- **Production Build**: esbuild for server bundling.
- **Data Flow**: Express server handles API routes under `/api`, serving static assets from the frontend build.

### Core Architectural Decisions
- **Full-Stack TypeScript**: Clear separation between client and server code with shared type definitions.
- **Component-Based UI**: Emphasizes reusable UI components for consistency and maintainability.
- **Accessibility**: Utilizes Radix UI for highly accessible components.
- **Modularity**: Structured for easy expansion of services and content.
- **Performance**: Optimized builds with TailwindCSS purging and Vite's built-in optimizations.
- **Scalability**: Designed for future API integrations and database scaling.

## External Dependencies

### UI and Styling
- `@radix-ui/*`: UI primitives for accessibility.
- `tailwindcss`: Utility-first CSS framework.
- `class-variance-authority`, `clsx`, `tailwind-merge`: For conditional CSS class management.
- `lucide-react`: Icon library.
- `framer-motion`: For advanced animations.

### Development & Core Functionality
- `vite`: Build tool and dev server.
- `typescript`: For type checking.
- `@tanstack/react-query`: Server state management.
- `wouter`: Lightweight routing library.
- `react-hook-form`: Form management.
- `zod`: Schema validation.
- `nodemailer`: For email sending functionality.
- `openai`: For AI chatbot integration.

### Database and Storage
- `drizzle-orm`: Type-safe ORM for database interactions.
- `@neondatabase/serverless`: Serverless PostgreSQL driver for database connectivity.
- **PostgreSQL**: Used for the AI chatbot's knowledge base, conversation tracking, and analytics, with Drizzle migrations for schema management.