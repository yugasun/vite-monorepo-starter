# vms

Vite monorepo starter template.

## Features

-   [x] Vite
-   [x] Vue 3
-   [x] Lerna (with nx-style workspaces)
-   [x] Typescript
-   [x] ESLint
-   [x] Prettier

## Usage

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Build a single package
pnpm run build --scope="@vms/core"

# Run all tests
pnpm run test

# Run a single test
pnpm run test --scope="@vms/core"

# Run all tests in watch mode
pnpm run test:watch
```

## License

MIT
