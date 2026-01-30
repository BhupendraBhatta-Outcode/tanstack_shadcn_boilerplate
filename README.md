# Tanstack starter boiler plate

A modern React application built with **Vite**, **TypeScript**, **TailwindCSS**, and **Shadcn UI / Radix UI** components. This project uses **TanStack Router** for routing, **Recharts** for charts, and is designed for scalable, modular development.

---

## Features

- **React 19** with **TypeScript**
- **Vite** for fast development and build
- **TailwindCSS 4** for styling
- **Shadcn UI + Radix UI** components
- **TanStack Router** for type-safe routing
- **Recharts** for data visualization
- **React Hook Form + Zod** for form handling and validation
- **Keyboard shortcuts** support using custom `Kbd` components
- **Responsive design** with mobile-first support
- **Animations** via `tw-animate-css` and Tailwind transitions

---

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS, Shadcn UI, Radix UI
- **Routing**: TanStack Router & TanStack Router DevTools
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Date Handling**: date-fns, react-day-picker
- **State & Utils**: clsx, tailwind-merge, class-variance-authority
- **Carousel / Layouts**: embla-carousel-react, react-resizable-panels
- **Notifications / Toasts**: sonner
- **Theme Management**: next-themes

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/my-app.git
cd my-app
```

2. **Install dependencies**

```bash
yarn install
# or
npm install
```

## Development

Start the development server:

```bash
yarn dev
# or
npm run dev
```

Open your browser at `http://localhost:3000` (default Vite port `5173` but changed to `3000`).

## Scripts

| Command        | Description                      |
| -------------- | -------------------------------- |
| `yarn dev`     | Start development server         |
| `yarn build`   | Build the project for production |
| `yarn preview` | Preview the production build     |
| `yarn test`    | Run tests with Vitest            |
| `yarn lint`    | Lint project using ESLint        |
| `yarn format`  | Format code using Prettier       |
| `yarn check`   | Format + lint + fix errors       |

## Routing

- Built using TanStack Router v1.
- Supports nested routes and layout-based routing.
- Mobile-first responsive navigation with dropdown/hamburger menu.
- Keyboard shortcuts (`Ctrl+N`, `Ctrl+P`, `Ctrl+S`) integrated for faster navigation.

## Components

- Dashboard Layout: Fully responsive header, sidebar, and content area.
- Shadcn UI Cards, Buttons, Separator for clean UI.
- Kbd / KbdGroup components for displaying keyboard shortcuts.
- Dropdown Menu for mobile navigation.
- Charts: Reusable `Recharts` components.

## Folder Structure (Example)

```
src/
├─ components/ # Reusable UI components
├─ hooks/ # Custom React hooks
├─ pages/ # Route pages
├─ routes/ # TanStack Router configuration
├─ styles/ # TailwindCSS & global styles
├─ utils/ # Helper functions
├─ App.tsx
├─ main.tsx
```

## Dev Tools

- TanStack Devtools: `@tanstack/react-devtools` & `@tanstack/react-router-devtools`
- Browser DevTools: for inspecting React components & state
- Vitest: for unit and integration testing

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
