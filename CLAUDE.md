# CLAUDE.md - Agency Site Development Guide

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site
- `npm run deploy` - Build and deploy with CNAME

## Code Style Guidelines
- **Components**: PascalCase (Hero.tsx, Navbar.tsx)
- **Hooks**: camelCase with 'use' prefix
- **Types/Interfaces**: PascalCase
- **Client Components**: Add "use client" directive
- **Import Order**: React/hooks → Next.js → Local components → Utils/contexts

## TypeScript
- Strict mode enabled
- Explicit return types for functions and hooks
- Type annotations for state and props

## Component Structure
- Functional components with React hooks
- useState for local state, useEffect for side effects
- Try/catch blocks for async operations

## Styling
- Tailwind CSS for styling
- Mobile-first responsive design
- CSS variables for theming