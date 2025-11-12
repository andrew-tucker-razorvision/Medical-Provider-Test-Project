# Codebase Exploration & README Generation Guide
## Using Claude Code to Understand and Document Your Project

**Purpose:** This guide walks through the process of using Claude Code (or similar AI tools) to explore a new codebase, understand its structure, and automatically generate comprehensive documentation.

**When to Use This:**
- After downloading code from builder.io or other template generators
- When inheriting an existing project
- When onboarding new team members
- When documentation is missing or outdated

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step 1: Initial Codebase Exploration](#step-1-initial-codebase-exploration)
3. [Step 2: Understanding the Tech Stack](#step-2-understanding-the-tech-stack)
4. [Step 3: Analyzing Project Structure](#step-3-analyzing-project-structure)
5. [Step 4: Understanding Key Components](#step-4-understanding-key-components)
6. [Step 5: Generating the README](#step-5-generating-the-readme)
7. [Example: AcciLink Project Exploration](#example-accilink-project-exploration)
8. [README Template](#readme-template)

---

## Prerequisites

**Before starting, ensure:**
- [ ] Code downloaded and extracted to local directory
- [ ] Git initialized and initial commit made (optional but recommended)
- [ ] Claude Code or similar AI assistant available
- [ ] Project dependencies NOT yet installed (exploration first, then install)

---

## Step 1: Initial Codebase Exploration

### What to Ask Claude Code

**Prompt Template:**
```
I've just downloaded a new codebase from [builder.io / template / existing project].

Please explore the codebase and provide:
1. A high-level overview of what this project does
2. The technology stack (frontend, backend, database, etc.)
3. Project structure and folder organization
4. Key files and their purposes
5. Dependencies and libraries used
6. Any configuration files (vite.config, tailwind.config, etc.)
7. Build and development scripts

Start by examining:
- package.json
- Root-level config files
- Main entry points (index.html, main.tsx, App.tsx)
- Folder structure

Use the Glob and Read tools to explore systematically.
```

### Expected Output

Claude Code should provide:

**1. Project Overview:**
```
This is a React 18 application built with Vite, designed for [purpose].
It appears to be a [type of application] with [key features].
```

**2. Tech Stack Summary:**
```
Frontend:
- React 18.3.1 with TypeScript
- Vite 7.1.2 (build tool)
- React Router 7.1.1 (routing)
- Tailwind CSS 4.0.1 (styling)

State Management:
- React Query (TanStack Query)
- React Context API

UI Components:
- shadcn/ui (Radix UI primitives)
- Lucide React (icons)

Forms & Validation:
- React Hook Form
- Zod
```

**3. Project Structure:**
```
project-name/
├── client/               # Frontend application
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Route pages/views
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── hooks/           # Custom React hooks
│   ├── contexts/        # React contexts for state
│   ├── App.tsx          # Main app component
│   └── global.css       # Global styles and Tailwind
├── shared/
│   └── types/           # Shared TypeScript types
├── server/              # Backend (if applicable)
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

**4. Key Files Analysis:**
```
Entry Point: client/App.tsx
- Sets up routing with React Router
- Wraps app with providers (Query, Auth, Toast)
- Defines route structure

Main Stylesheet: client/global.css
- Tailwind CSS imports
- Custom CSS variables for design system
- Global styles

Configuration:
- vite.config.ts: Dev server, build settings, proxy config
- tailwind.config.ts: Theme customization, plugins
- tsconfig.json: TypeScript compiler options
```

**5. Dependencies Breakdown:**
```
Production Dependencies:
- react, react-dom: ^18.3.1
- react-router: ^7.1.1
- @tanstack/react-query: ^5.62.11
- lucide-react: ^0.468.0
- tailwindcss: ^4.0.1

Development Dependencies:
- vite: ^7.1.2
- typescript: ^5.6.2
- @vitejs/plugin-react-swc: ^3.7.2
```

---

## Step 2: Understanding the Tech Stack

### Deep Dive Questions

**Ask Claude Code:**
```
Now that we have an overview, please analyze:

1. What UI component library is being used? (Material-UI, shadcn/ui, Ant Design, etc.)
2. How is routing configured? (React Router, Next.js, etc.)
3. What state management approach is used? (Context, Redux, Zustand, etc.)
4. How are forms handled? (React Hook Form, Formik, native, etc.)
5. What styling approach? (CSS Modules, Tailwind, Styled Components, etc.)
6. Are there any API integrations or backend communication?
7. What build tool and dev server? (Vite, Webpack, etc.)
```

### Example Response (AcciLink)

```
UI Component Library: shadcn/ui
- Built on Radix UI primitives
- Highly customizable, accessible components
- Located in client/components/ui/
- Components: Button, Card, Input, Label, Select, Textarea, Toast, etc.

Routing: React Router v7.1.1
- Configured in client/App.tsx
- Uses BrowserRouter with Routes/Route
- Current routes:
  - / (Index page)
  - /login (Login page)
  - /dashboard (Protected route)
  - /contact (Contact page)
  - /about (About page)
  - * (404 NotFound)

State Management:
- React Context API for authentication (client/contexts/AuthContext.tsx)
- React Query for server state (not yet implemented)
- Local component state with useState

Forms: React Hook Form + Zod
- Contact form: client/pages/Contact.tsx
- Login form: client/pages/Login.tsx
- Schema validation with Zod
- Type-safe form data

Styling: Tailwind CSS 4.0.1
- Custom design tokens in client/global.css
- Colors: --navy, --teal, --sage-green, --charcoal, --light-gray
- Responsive design with Tailwind utilities
- Dark mode support via CSS variables

Build Tool: Vite 7.1.2
- Fast HMR (Hot Module Replacement)
- Dev server on localhost:8080
- Optimized production builds
- SWC for faster TypeScript compilation
```

---

## Step 3: Analyzing Project Structure

### Questions to Ask

**Prompt:**
```
Please analyze the folder structure in detail:

1. What is the purpose of each top-level directory?
2. How are components organized? (By feature, by type, flat, nested?)
3. Where are pages/routes defined?
4. How are shared types/utilities organized?
5. Is there a clear separation between client and server?
6. Are there any configuration files in subdirectories?
7. Where are assets (images, fonts, icons) stored?
```

### Expected Analysis

**Directory Purpose Breakdown:**

```
client/
└── Purpose: Frontend React application
    ├── components/
    │   ├── Purpose: Reusable UI components
    │   ├── ui/           → shadcn/ui base components
    │   ├── Header.tsx    → Site navigation header
    │   ├── Footer.tsx    → Site footer
    │   └── auth/         → Authentication-related components
    │       └── ProtectedRoute.tsx
    │
    ├── pages/
    │   ├── Purpose: Route-level page components
    │   ├── Index.tsx     → Homepage (/)
    │   ├── Login.tsx     → Login page (/login)
    │   ├── Dashboard.tsx → User dashboard (/dashboard)
    │   ├── Contact.tsx   → Contact page (/contact)
    │   ├── About.tsx     → About page (/about)
    │   └── NotFound.tsx  → 404 page (*)
    │
    ├── contexts/
    │   ├── Purpose: React Context providers for global state
    │   └── AuthContext.tsx → Authentication state
    │
    ├── hooks/
    │   ├── Purpose: Custom React hooks
    │   └── useAuth.ts    → Hook to access auth context
    │
    ├── App.tsx
    │   └── Purpose: Main app component, routing, providers
    │
    └── global.css
        └── Purpose: Global styles, Tailwind imports, CSS variables

shared/
└── Purpose: Code shared between client and server
    └── types/
        └── auth.ts       → Shared TypeScript types

server/
└── Purpose: Backend API (if applicable)
    └── [Currently empty or minimal]

public/
└── Purpose: Static assets served directly
    └── [Images, fonts, icons]

Root Configuration Files:
├── vite.config.ts       → Vite bundler configuration
├── tailwind.config.ts   → Tailwind CSS theme and plugins
├── tsconfig.json        → TypeScript compiler options
├── package.json         → Dependencies and scripts
└── postcss.config.js    → PostCSS configuration for Tailwind
```

---

## Step 4: Understanding Key Components

### Component Analysis

**Ask Claude Code to analyze key components:**

```
Please analyze the following key components and explain:
1. What they do
2. Props they accept
3. State they manage
4. External dependencies
5. How they fit into the overall app

Start with:
- client/App.tsx
- client/components/Header.tsx
- client/components/Footer.tsx
- client/pages/Index.tsx
```

### Example Component Analysis

**App.tsx Analysis:**
```typescript
Purpose: Main application entry point

Responsibilities:
1. Sets up React Query client
2. Configures routing with BrowserRouter
3. Wraps app with providers:
   - QueryClientProvider (React Query)
   - TooltipProvider (Radix UI)
   - AuthProvider (Authentication)
4. Defines route structure
5. Includes Header and Footer on all pages

Route Structure:
- / → Index (Homepage)
- /login → Login
- /dashboard → Dashboard (Protected)
- /contact → Contact
- /about → About
- * → NotFound (404)

Dependencies:
- react-router: Routing
- @tanstack/react-query: Server state
- Custom contexts: AuthProvider
- Custom components: Header, Footer, pages
```

**Header.tsx Analysis:**
```typescript
Purpose: Site navigation header

Features:
1. Logo/brand link to homepage
2. Desktop navigation menu (centered)
3. Mobile hamburger menu
4. Auth-aware navigation:
   - Shows "Log In" / "Sign Up" when not authenticated
   - Shows user name + "Log Out" when authenticated
5. Responsive design (hidden menu on mobile)

State:
- mobileMenuOpen: Boolean for mobile menu toggle

Props: None (uses useAuth hook for auth state)

Navigation Links:
- How It Works (anchor: #how-it-works)
- For Attorneys (anchor: #for-attorneys)
- For Providers (anchor: #for-providers)
- About (route: /about)
- Contact (route: /contact)

Styling:
- Fixed position at top
- White background with shadow
- Navy text, teal hover colors
- Sage-green "Sign Up" button
```

---

## Step 5: Generating the README

### README Generation Prompt

**Ask Claude Code:**
```
Based on your exploration of this codebase, please generate a comprehensive README.md file that includes:

1. Project title and brief description
2. Tech stack overview
3. Features list
4. Prerequisites for development
5. Installation instructions
6. Development commands
7. Build and deployment instructions
8. Project structure explanation
9. Key dependencies explanation
10. Configuration files overview
11. Contributing guidelines
12. License information

Use the analysis you've done to make this README accurate and helpful for developers joining the project.

Format it in Markdown with proper headings, code blocks, and lists.
```

### What Claude Code Should Generate

See the [README Template](#readme-template) section below for a complete example.

---

## Example: AcciLink Project Exploration

### Actual Exploration Process

**Step 1: Initial File Discovery**
```
Claude Code used these tools:
1. Glob("**/*.json") → Found package.json, tsconfig.json, etc.
2. Read("package.json") → Analyzed dependencies
3. Glob("**/*.config.*") → Found vite.config.ts, tailwind.config.ts
4. Read("vite.config.ts") → Understood build configuration
```

**Step 2: Structure Analysis**
```
5. Glob("client/**/*.tsx") → Listed all React components
6. Read("client/App.tsx") → Understood routing structure
7. Glob("client/pages/*.tsx") → Found all page components
8. Glob("client/components/**/*.tsx") → Found all components
```

**Step 3: Design System Discovery**
```
9. Read("client/global.css") → Found CSS variables (color scheme)
10. Read("tailwind.config.ts") → Found custom theme configuration
11. Identified design tokens:
    - Navy (#172554)
    - Teal (#007380)
    - Sage-green (120 25% 65%)
    - Charcoal (#3f4751)
    - Light-gray (#f8fafc)
```

**Step 4: Feature Discovery**
```
12. Read("client/pages/Login.tsx") → Found authentication system
13. Read("client/contexts/AuthContext.tsx") → Understood auth state
14. Read("client/pages/Contact.tsx") → Found contact form with validation
15. Read("client/pages/About.tsx") → Found company information page
16. Read("client/pages/Dashboard.tsx") → Found protected user dashboard
```

**Step 5: Architecture Understanding**
```
Key Findings:
- React 18 SPA (Single Page Application)
- No backend yet (mock authentication)
- Form validation with React Hook Form + Zod
- Routing with React Router v6
- Component-based architecture
- Shared TypeScript types in shared/types/
- Design system defined via Tailwind + CSS variables
```

---

## README Template

**Below is the template Claude Code should generate based on exploration:**

```markdown
# AcciLink - Medical-Legal Coordination Platform

A modern web application connecting personal injury attorneys with medical providers for streamlined case coordination.

## 🚀 Tech Stack

### Frontend
- **React 18.3.1** - UI library with TypeScript
- **Vite 7.1.2** - Lightning-fast build tool and dev server
- **React Router 7.1.1** - Client-side routing
- **Tailwind CSS 4.0.1** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library (Radix UI)

### State Management
- **React Query** (TanStack Query) - Server state management
- **React Context API** - Global client state (authentication)

### Forms & Validation
- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation

### UI & Icons
- **Lucide React** - Modern icon library
- **Sonner** - Toast notifications
- **Radix UI** - Unstyled, accessible components

## ✨ Features

- 🔐 **Authentication System** - Mock authentication with attorney/provider roles
- 📝 **Contact Form** - Validated contact form with email/phone/message
- 📄 **About Page** - Company story, mission, and values
- 🎨 **Custom Design System** - Navy, sage-green, and teal color palette
- 📱 **Responsive Design** - Mobile-first approach with Tailwind
- 🧭 **Protected Routes** - Route guards for authenticated pages
- 🎯 **Role-Based Access** - Separate experiences for attorneys and providers

## 📋 Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **pnpm** (recommended) or npm/yarn
  ```bash
  npm install -g pnpm
  ```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/Medical-Provider-Test-Project.git
   cd Medical-Provider-Test-Project
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

## 🚀 Development

**Start the development server:**
```bash
pnpm dev
```

The app will be available at **http://localhost:8080**

**Hot Module Replacement (HMR)** is enabled for instant feedback during development.

## 🧪 Testing

**Run tests:**
```bash
pnpm test
```

**Run tests with coverage:**
```bash
pnpm test:coverage
```

## 🏗️ Build

**Create production build:**
```bash
pnpm build
```

**Preview production build:**
```bash
pnpm preview
```

Build output will be in the `dist/` directory.

## 📁 Project Structure

```
Medical-Provider-Test-Project/
├── client/                    # Frontend application
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui base components
│   │   ├── auth/             # Authentication components
│   │   ├── Header.tsx        # Site navigation
│   │   └── Footer.tsx        # Site footer
│   ├── pages/                # Route-level pages
│   │   ├── Index.tsx         # Homepage
│   │   ├── Login.tsx         # Login page
│   │   ├── Dashboard.tsx     # User dashboard (protected)
│   │   ├── Contact.tsx       # Contact form page
│   │   ├── About.tsx         # About page
│   │   └── NotFound.tsx      # 404 page
│   ├── contexts/             # React contexts
│   │   └── AuthContext.tsx   # Authentication state
│   ├── hooks/                # Custom React hooks
│   │   └── useAuth.ts        # Auth hook
│   ├── App.tsx               # Main app component
│   └── global.css            # Global styles + Tailwind
├── shared/
│   └── types/                # Shared TypeScript types
│       └── auth.ts           # Authentication types
├── public/                   # Static assets
├── server/                   # Backend (future)
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind theme config
├── tsconfig.json             # TypeScript config
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🎨 Design System

### Color Palette

| Color | CSS Variable | HSL | Usage |
|-------|--------------|-----|-------|
| Navy | `--navy` | `215 46% 24%` | Headers, primary text |
| Teal | `--teal` | `180 100% 28%` | Links, accents |
| Sage Green | `--sage-green` | `120 25% 65%` | CTA buttons, success |
| Charcoal | `--charcoal` | `215 13% 34%` | Body text |
| Light Gray | `--light-gray` | `210 40% 98%` | Backgrounds |

### Typography

- **Font Family:** Inter (Google Fonts)
- **Weights:** 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold)

## 🔑 Test Credentials

For testing authentication features:

**Attorney Account:**
- Email: `attorney@test.com`
- Password: `password123`

**Provider Account:**
- Email: `provider@test.com`
- Password: `password123`

## 📦 Key Dependencies

### Production
- `react` & `react-dom` - React library
- `react-router` - Routing
- `@tanstack/react-query` - Server state management
- `react-hook-form` - Form handling
- `zod` - Schema validation
- `lucide-react` - Icons
- `sonner` - Toast notifications

### Development
- `vite` - Build tool
- `typescript` - Type safety
- `@vitejs/plugin-react-swc` - Fast React refresh
- `tailwindcss` - CSS framework
- `postcss` - CSS processing

## ⚙️ Configuration Files

### vite.config.ts
- Dev server settings (port 8080)
- Build optimization
- Path aliases (`@/` → `client/`)
- Proxy configuration (if needed)

### tailwind.config.ts
- Custom color palette
- Typography settings
- Responsive breakpoints
- Plugin configuration

### tsconfig.json
- TypeScript compiler options
- Path mappings
- Module resolution
- Strict type checking enabled

## 🤝 Contributing

We follow a feature branch workflow. See [WORKFLOW_GUIDE.md](WORKFLOW_GUIDE.md) for details.

### Quick Start

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit
   ```bash
   git commit -m "feat: add new feature"
   ```

3. Push and create a Pull Request
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Format

We use [semantic commit messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test updates
- `chore:` Build/tooling changes

## 📄 License

[MIT License](LICENSE) - Feel free to use this project for your own purposes.

## 🙋 Support

- 📧 Email: support@accilink.com
- 📞 Phone: (555) 123-4567
- 🌐 Website: [accilink.com](https://accilink.com)

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
```

---

## Next Steps After README Creation

### 1. Review and Customize
- [ ] Read through generated README
- [ ] Update project-specific information
- [ ] Add actual contact details
- [ ] Update repository URLs
- [ ] Add screenshots or demo GIFs

### 2. Commit to Repository
```bash
git add README.md
git commit -m "docs: Add comprehensive README with project overview and setup instructions"
git push origin main
```

### 3. Create Additional Documentation
- [ ] WORKFLOW_GUIDE.md (development process)
- [ ] CONTRIBUTING.md (contribution guidelines)
- [ ] CHANGELOG.md (version history)
- [ ] API.md (if applicable)

### 4. Update Team Meeting Checklist
- [ ] Reference this exploration process in TEAM_MEETING_CHECKLIST.md
- [ ] Add "Explore codebase and generate README" as Step 0
- [ ] Link to this guide for detailed instructions

---

## Tips for Effective Codebase Exploration

### Do's ✅
- **Start with package.json** - Understand dependencies first
- **Read config files** - vite.config, tailwind.config, tsconfig
- **Explore systematically** - Top-down (structure) then bottom-up (components)
- **Document as you go** - Take notes on key findings
- **Test your understanding** - Try running the dev server
- **Ask specific questions** - "How does authentication work?" vs "Tell me everything"

### Don'ts ❌
- **Don't skip the exploration** - Diving into code without context leads to mistakes
- **Don't assume** - Verify your assumptions by reading actual code
- **Don't rush** - Take time to understand the architecture
- **Don't ignore config files** - They contain critical information
- **Don't forget tests** - Test files reveal how code is meant to be used

---

## Questions to Answer During Exploration

### Architecture
- [ ] Is this a SPA, MPA, or SSR application?
- [ ] What's the data flow? (Props, Context, Redux, etc.)
- [ ] How are routes organized?
- [ ] Is there a backend? If so, how does frontend communicate with it?

### Styling
- [ ] What CSS approach is used? (CSS Modules, Styled Components, Tailwind, etc.)
- [ ] Is there a design system or component library?
- [ ] Where are global styles defined?
- [ ] How are responsive breakpoints handled?

### State Management
- [ ] How is global state managed?
- [ ] How is server state managed?
- [ ] Are there any state management libraries? (Redux, Zustand, MobX, etc.)
- [ ] How is authentication state handled?

### Build & Development
- [ ] What build tool is used? (Vite, Webpack, Parcel, etc.)
- [ ] What's the dev server setup?
- [ ] Are there any environment variables?
- [ ] How are assets bundled and optimized?

### Testing
- [ ] Are there tests? What framework? (Jest, Vitest, etc.)
- [ ] What's the test coverage?
- [ ] Are there E2E tests? (Playwright, Cypress, etc.)

### Code Quality
- [ ] Is there a linter? (ESLint, etc.)
- [ ] Is there a formatter? (Prettier, etc.)
- [ ] Are there pre-commit hooks? (Husky, lint-staged, etc.)
- [ ] Is TypeScript used? How strict?

---

**End of Guide**

*Use this process whenever starting with a new codebase to ensure thorough understanding before making changes.*

**Last Updated:** [Date]
**Version:** 1.0.0
