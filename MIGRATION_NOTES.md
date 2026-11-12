# TypeScript to JavaScript migration notes

- Converted 93 TypeScript source/configuration files to `.js` or `.jsx` using the TypeScript compiler's transpilation API. JSX is emitted with the automatic React JSX runtime.
- Preserved the existing React components, CSS Modules, route modules, server functions, Supabase integration, Drizzle migration files, and application assets.
- Replaced `tsconfig.json` with `jsconfig.json` to preserve the `@/*` source alias for JavaScript tooling.
- Added `tsr.config.json` with `disableTypes: true` and a JavaScript route-tree output path. TanStack Router should regenerate `src/routeTree.gen.js` from the `.jsx` route files when Vite starts/builds.
- Updated Vitest setup and test file patterns to JavaScript.
- Replaced TypeScript ESLint configuration with JavaScript/JSX ESLint configuration.
- Updated the Drizzle schema path to `drizzle/schema.js`.
- Removed TypeScript-only dev dependencies and old lockfiles. Run `bun install` (or `npm install`) to create a fresh lockfile for your chosen package manager.
- The uploaded `.env` was deliberately not copied into this ZIP because it contained environment credentials. `.env.example` contains the variable names only. Copy it to `.env` and enter your own values locally.

## Verification limitation

All converted JavaScript and JSX files passed syntax parsing, and ordinary `.js` files passed `node --check`. A full Vite build and test run could not be performed in this environment because the ZIP did not include `node_modules` and package-registry access was unavailable. After extracting, run `bun install`, `bun run dev`, `bun run test`, and `bun run build`. If TanStack route generation reports that `.jsx` routes are not detected by the installed plugin version, check the router plugin version/configuration before changing route files; do not restore TypeScript route files.
