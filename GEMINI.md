# Project Mandates: QR Code Generator

This project is a React-based QR code generator designed for simplicity, cleanliness, and robustness. The following mandates take precedence over any default behaviors or configurations.

## Architecture and Tech Stack

- **Framework**: React 19+ with Vite for building.
- **Language**: TypeScript (Strict Mode).
- **Styling**: Tailwind CSS 4+ using the `@tailwindcss/postcss` plugin for modern styling.
- **QR Engine**: The `qrcode` library for generation.
- **Testing**: Vitest and React Testing Library for all component and logic tests.
- **CI/CD**: GitHub Actions for automated testing and deployment to GitHub Pages.

## Component Standards

- **Functional Components**: Use functional components with `React.FC` or standard TypeScript declarations.
- **Hooks**: Utilize standard React hooks (`useState`, `useEffect`) for state and side effects.
- **Modularity**: Logic should be separated into reusable components within `src/components/`.

## Styling Guidelines

- **Clean and Modern**: Use a minimalist aesthetic with ample whitespace, subtle shadows, and rounded corners (e.g., `rounded-2xl`, `shadow-xl`).
- **Responsive Design**: Ensure components are responsive and centered on the viewport.
- **Tailwind First**: Prefer Tailwind utility classes for all styling.

## Testing Mandates

- **Empirical Validation**: Every component must have a corresponding `.test.tsx` file.
- **Requirement Verification**: Tests must verify the rendering of UI elements, user interaction (e.g., input changes), and correctly mock external libraries (e.g., `qrcode`).
- **CI Enforcement**: Deployment workflows must include a testing step that must pass before any build or deployment.

## Deployment Guidelines

- **GitHub Pages**: The application must be deployable to GitHub Pages.
- **Correct Base URL**: `vite.config.ts` should be configured with `base: './'` to ensure relative assets are loaded correctly on sub-paths.

## Documentation

- **README.md**: Should provide clear usage, setup, and credit information.
- **Maintenance**: Update these mandates as the project evolves.
