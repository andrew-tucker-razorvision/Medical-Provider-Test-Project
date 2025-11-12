# AcciLink

> A full-stack platform connecting attorneys with medical providers for personal injury cases

AcciLink is a comprehensive medical-legal networking platform that streamlines case management and improves client outcomes by connecting law firms with vetted medical professionals specializing in personal injury cases.

---

## Features

- **Vetted Provider Network** - Access to 2,000+ pre-screened medical providers across 50+ states
- **24-Hour Response Guarantee** - Fast connection and scheduling for urgent cases
- **Seamless Case Coordination** - Integrated tools for managing appointments, sharing records, and tracking case progress
- **Advanced Search & Filtering** - Find providers by specialty, location, experience, and availability
- **Dual User Types** - Separate workflows for attorneys and medical providers
- **Responsive Design** - Mobile-first UI that works on all devices
- **Modern UI Components** - Built with Radix UI and Tailwind CSS for a polished user experience

---

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **React Router v6** - Client-side routing
- **TanStack Query** - Server state management
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library

### Backend
- **Express** - Node.js web framework
- **TypeScript** - Type-safe server code
- **CORS** - Cross-origin resource sharing
- **Zod** - Schema validation

### Development Tools
- **Vite SWC Plugin** - Fast React refresh
- **Prettier** - Code formatting
- **Vitest** - Unit testing framework
- **pnpm** - Fast, disk-efficient package manager
- **Playwright** - Automated browser testing and screenshots
- **GitHub CLI** - Automated issue and project management

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** (v10.14.0 or higher)
- **GitHub CLI** (for automated workflows)

### Install pnpm globally:
```bash
npm install -g pnpm
```

### Install GitHub CLI:
```bash
winget install --id GitHub.cli
```

---

## Installation

### 1. Clone the repository:
```bash
git clone <repository-url>
cd Medical-Provider-Test-Project
```

### 2. Install dependencies:
```bash
pnpm install
```

### 3. Create environment file:
```bash
cp .env .env.local
```

### 4. Configure environment variables
See [Environment Variables](#environment-variables) section below.

---

## Usage

### Development Mode

Start the development server with hot reload:

```bash
pnpm dev
```

**This will start:**
- Frontend dev server at `http://localhost:8080`
- Express API server integrated with Vite

### Production Build

Build the application for production:

```bash
pnpm build
```

**Creates two builds:**
- `dist/spa/` - Client-side React application
- `dist/server/` - Server-side Express application

### Start Production Server

```bash
pnpm start
```

### Type Checking

```bash
pnpm typecheck
```

### Testing

```bash
pnpm test
```

### Code Formatting

```bash
pnpm format.fix
```

---

## Automated Workflow with Claude Code

This project uses an automated development workflow powered by Claude Code for efficient issue management, testing, and deployment.

### Complete Workflow Process

#### 1. Issue Creation
- Create issues manually in GitHub, OR
- Claude Code creates issues automatically via `gh issue create`

#### 2. Issue Retrieval
```bash
# User provides issue number
"Execute issue #4"
```
- Claude Code fetches issue details with `gh issue view`
- Analyzes requirements and acceptance criteria

#### 3. Implementation
- Reads and understands requirements
- Makes code changes across all affected files
- Ensures proper refactoring (variable renames, etc.)
- Maintains code quality and consistency

#### 4. Testing
- Verifies changes via HMR (Hot Module Replacement)
- Checks for console errors
- Confirms all acceptance criteria met

#### 5. Visual Documentation (for UI changes)
- Automated screenshot capture using Playwright
- Upload to Imgur image hosting
- Add screenshot to issue with detailed description

#### 6. Project Management
- Add issue to GitHub Project (if not already added)
- Update status to "In Review"
- Add completion summary comment

#### 7. Ready for Review
- All work documented
- Visual proof provided (if applicable)
- Status set for team review

### Tools & Integration

#### GitHub CLI Commands
```bash
gh issue create        # Create new issues
gh issue view         # Fetch issue details
gh issue comment      # Add comments with updates
gh issue edit         # Modify issue properties
gh project list       # Find projects
gh project item-add   # Add issues to projects
gh project item-edit  # Update project status
```

#### Playwright Screenshots
```javascript
// Automated full-page screenshots
- Navigate to localhost:8080
- Wait for content to load
- Capture full-page screenshot
- Upload to Imgur
- Post to GitHub issue
```

#### Project Board Integration
- **Project:** "@andrew-tucker-razorvision's Medical Example"
- **Status Flow:**
  - Backlog
  - Ready
  - In Progress
  - In Review (Automated after testing)
  - Done

### Benefits

#### Efficiency
- Automated screenshot capture and upload
- Automatic project board updates
- Consistent documentation on every issue
- Full audit trail of changes

#### Quality
- Visual proof of changes
- Comprehensive testing before review
- Proper code refactoring (not just find/replace)
- Clear status tracking

#### Collaboration
- "In Review" status signals reviewers
- Screenshot provides context
- All work documented in issue comments
- Integrated with existing project workflow

---

## Project Structure

```
Medical-Provider-Test-Project/
├── client/                    # Frontend React application
│   ├── components/           # Reusable UI components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   └── ui/              # Radix UI components (50+)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Page components
│   │   ├── Index.tsx        # Landing page
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Main application entry
│   ├── global.css           # Global styles & Tailwind
│   └── vite-env.d.ts        # Vite type definitions
├── server/                   # Backend Express application
│   ├── routes/              # API route handlers
│   │   └── demo.ts          # Example route
│   ├── index.ts             # Express server setup
│   └── node-build.ts        # Production build entry
├── shared/                   # Shared types between client/server
│   └── api.ts               # API type definitions
├── dist/                     # Build output (generated)
│   ├── spa/                 # Client build
│   └── server/              # Server build
├── .env                      # Environment variables
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── vite.config.ts           # Vite client configuration
├── vite.config.server.ts    # Vite server configuration
└── postcss.config.js        # PostCSS configuration
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PING_MESSAGE=ping

# Add additional environment variables as needed:
# DATABASE_URL=
# JWT_SECRET=
# API_KEY=
```

---

## API Endpoints

### `GET /api/ping`
Health check endpoint

**Response:**
```json
{
  "message": "ping"
}
```

### `GET /api/demo`
Demo endpoint showing server response

**Response:**
```json
{
  "message": "Hello from Express server"
}
```

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with HMR |
| `pnpm build` | Build for production (client + server) |
| `pnpm build:client` | Build client only |
| `pnpm build:server` | Build server only |
| `pnpm start` | Start production server |
| `pnpm test` | Run test suite |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm format.fix` | Format code with Prettier |

---

## Key Features Detail

### For Attorneys
- **Provider Discovery** - Search and filter through 2,000+ vetted medical providers
- **Quick Connections** - Send connection requests instantly
- **Case Management** - Track appointments, records, and case progress
- **Quality Assurance** - All providers are pre-vetted and reviewed

### For Medical Providers
- **Practice Growth** - Receive qualified referrals from personal injury attorneys
- **Network Access** - Join an exclusive network of trusted professionals
- **Flexible Management** - Control your availability, specialties, and service areas
- **Seamless Coordination** - Integrated tools for attorney communication

---

## Design System

The project uses a custom design system built on Tailwind CSS with the following color palette:

- **Navy** (`--navy: 215 46% 24%`) - Primary brand color
- **Teal** (`--teal: 180 100% 28%`) - Secondary accent
- **Sage Green** (`--sage-green: 120 25% 65%`) - Call-to-action color
- **Charcoal** (`--charcoal: 215 13% 34%`) - Text color
- **Light Gray** (`--light-gray: 210 40% 98%`) - Background color
- **Success** (`--success: 160 84% 39%`) - Success states

### Color Usage
- **Buttons:** Sage green with hover states
- **Icons:** Sage green accents throughout
- **Dividers:** Sage green section separators
- **Interactive Elements:** Sage green highlights

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Contributing

### 1. Fork the repository
```bash
git clone <your-fork-url>
```

### 2. Create a feature branch
```bash
git checkout -b feature/amazing-feature
```

### 3. Make your changes
Follow the automated workflow:
- Create or pick an issue
- Implement changes
- Test thoroughly
- Add screenshots (if UI changes)

### 4. Commit your changes
```bash
git commit -m 'Add some amazing feature'
```

### 5. Push to the branch
```bash
git push origin feature/amazing-feature
```

### 6. Open a Pull Request
- Link to the related issue
- Include screenshots
- Describe changes made

---

## License

This project is proprietary and confidential.

---

## Support

For questions or issues:
- **Email:** support@accilink.com
- **Phone:** (555) 123-4567

---

## Built With

**React** • **TypeScript** • **Express** • **Vite** • **Tailwind CSS**

---

<div align="center">

### Powered by Claude Code

*Automated workflows for efficient development*

**[View Workflow Documentation](https://github.com/andrew-tucker-razorvision/Medical-Provider-Test-Project/issues/5)**

</div>
