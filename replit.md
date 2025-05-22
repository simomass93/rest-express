# Replit.md - Totem Selfie Photobooth Presentation

## Overview

This is a modern web application for presenting a photobooth service to wedding venues and locations. The project is a full-stack application with a React frontend showcasing an elegant presentation about "Totem Selfie Photobooth" services for weddings, and an Express.js backend ready for future API development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom wedding-themed color palette
- **UI Components**: Radix UI components via shadcn/ui for accessibility and consistency
- **Animations**: Framer Motion for smooth presentation transitions
- **State Management**: React hooks with custom presentation hook
- **Routing**: Wouter for lightweight client-side routing
- **HTTP Client**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: tsx for development server with hot reload
- **Build**: esbuild for production bundling

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL support
- **Schema**: Centralized in shared folder for type safety
- **Provider**: Configured for Neon Database (@neondatabase/serverless)
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Key Components

### Presentation System
- **Slide-based architecture** with 7 main slides covering the photobooth service
- **Navigation controls** with fullscreen support and PDF download (placeholder)
- **Responsive design** optimized for both desktop and mobile presentations
- **Custom animations** using Framer Motion for professional presentation flow

### UI System
- **Component library** based on Radix UI primitives
- **Design system** with wedding-themed colors (elegant gold, rose antique, charcoal)
- **Typography** using Google Fonts (Playfair Display, Inter, Dancing Script)
- **Responsive layout** with mobile-first approach

### Development Infrastructure
- **Hot reload** with Vite for frontend development
- **Type safety** with shared TypeScript types between frontend and backend
- **Error handling** with runtime error overlay in development
- **Code organization** with clear separation of concerns

## Data Flow

### Current Implementation
1. **Static presentation flow**: Single-page application with slide navigation
2. **Client-side routing**: Wouter handles navigation between presentation and 404 pages
3. **State management**: Custom usePresentation hook manages slide state and controls

### Future Database Integration
- **User management**: Schema ready for user authentication
- **CRUD operations**: Storage interface abstraction allows easy switch from in-memory to database
- **API endpoints**: Express routes structure prepared for REST API implementation

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm & drizzle-zod**: Type-safe database operations and validation
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for presentation effects
- **@radix-ui/***: Comprehensive UI component primitives
- **wouter**: Lightweight routing solution

### Development Infrastructure
- **Vite**: Frontend build tool and development server
- **esbuild**: Backend bundling for production
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Type safety across the entire application

## Deployment Strategy

### Platform Configuration
- **Replit environment**: Configured for nodejs-20, web, and postgresql-16 modules
- **Development**: npm run dev starts both frontend and backend with hot reload
- **Production build**: Vite builds frontend, esbuild bundles backend
- **Process management**: Production server runs on port 5000 with autoscale deployment

### Build Process
1. **Frontend**: Vite bundles React application to dist/public
2. **Backend**: esbuild creates production server bundle in dist/
3. **Assets**: Static files served from built frontend directory
4. **Database**: Drizzle migrations applied during deployment

### Environment Variables
- **DATABASE_URL**: Required for PostgreSQL connection
- **NODE_ENV**: Controls development vs production behavior
- **REPL_ID**: Enables Replit-specific development features

The application is designed to be easily extensible with additional features like contact forms, user authentication, and booking systems while maintaining the elegant presentation-focused user experience.