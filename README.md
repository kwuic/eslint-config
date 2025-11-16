# @kwuic/eslint-config

[![npm version](https://img.shields.io/npm/v/@kwuic/eslint-config.svg)](https://www.npmjs.com/package/@kwuic/eslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Comprehensive ESLint and Prettier configuration for Next.js and Fastify projects with TypeScript. Features modular rules for code quality, security, accessibility, and modern best practices.

## Features

- ✨ **All-in-One** - Install 1 package instead of 20+ plugins
- 🎯 **Strict TypeScript** - Comprehensive type checking and best practices
- ⚛️ **React 19 & Next.js 15** - React Compiler, hooks rules, accessibility
- 🎨 **TailwindCSS** - Canonical class enforcement (v3 → v4 ready)
- 🔒 **Security** - Detect vulnerabilities and unsafe patterns
- 📦 **Code Quality** - Unicorn, SonarJS, complexity analysis
- 🚀 **Modern Standards** - ESLint 9 flat config, latest plugins

## Installation

### Quick Install (All-in-One)

```bash
pnpm add -D @kwuic/eslint-config eslint prettier typescript
```

**That's it!** All ESLint plugins are automatically installed as dependencies.

### Optional: Prettier Plugins (if using local .prettierrc)

If your project has a custom `.prettierrc.yaml`, install:

```bash
pnpm add -D @trivago/prettier-plugin-sort-imports prettier-plugin-tailwindcss
```

## Usage

### For a Next.js project (with TailwindCSS)

Create `eslint.config.mjs` at the project root:

```javascript
import nextjsConfig from "@kwuic/eslint-config/nextjs";

export default nextjsConfig;
```

### For a Next.js project (without TailwindCSS)

Create `eslint.config.mjs` at the project root:

```javascript
import nextjsConfig from "@kwuic/eslint-config/nextjs-no-tailwind";

export default nextjsConfig;
```

### For a Fastify project (API)

Create `eslint.config.mjs` at the project root:

```javascript
import fastifyConfig from "@kwuic/eslint-config/fastify";

export default fastifyConfig;
```

### For a mixed project (generic base)

Create `eslint.config.mjs` at the project root:

```javascript
import baseConfig from "@kwuic/eslint-config";

export default baseConfig;
```

### 4. Prettier

Create `.prettierrc.yaml` at the project root:

```yaml
printWidth: 120
tabWidth: 2
semi: true
singleQuote: false
arrowParens: always
plugins:
  - prettier-plugin-tailwindcss
```

Or import directly:

```bash
cp ../eslint-config-global/.prettierrc.yaml .
```

### 5. Add scripts to package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write ."
  }
}
```

## Quick Start

After installing this configuration in your project, run:

```bash
# Check for linting errors
pnpm lint

# Auto-fix linting errors (including non-canonical TailwindCSS classes)
pnpm lint:fix
```

**Note**: With the TailwindCSS canonical class rules enabled, your build will fail if you use deprecated class names like `flex-shrink-0` instead of `shrink-0`. This is intentional to ensure code quality and consistency.

## Main rules

### Strict TypeScript

- `@typescript-eslint/no-explicit-any`: forbids `any` types
- `@typescript-eslint/no-unnecessary-condition`: detects unnecessary conditions
- `@typescript-eslint/strict-boolean-expressions`: enforces explicit boolean expressions
- `@typescript-eslint/consistent-type-imports`: enforces `import type` for types
- `@typescript-eslint/consistent-type-definitions`: enforces `type` instead of `interface`

### Code quality

- `no-console`: warning (use a logger instead)
- `prefer-template`: enforces template string usage
- `no-useless-catch`: forbids useless catch blocks

### Advanced code quality (Unicorn)

- `unicorn/prefer-node-protocol`: enforce `node:` protocol for Node.js imports
- `unicorn/no-array-for-each`: prefer `for...of` over `.forEach()`
- `unicorn/prefer-array-find`: prefer `.find()` over `.filter()[0]`
- `unicorn/prefer-modern-dom-apis`: use modern DOM APIs
- `unicorn/filename-case`: enforce kebab-case for filenames
- And 40+ other modern JavaScript/TypeScript best practices

### Code complexity and bug detection (SonarJS)

- `sonarjs/cognitive-complexity`: warn if cognitive complexity > 15
- `sonarjs/no-duplicate-string`: detect duplicated strings (threshold: 3)
- `sonarjs/no-identical-functions`: find duplicated functions
- `sonarjs/no-redundant-boolean`: simplify boolean expressions
- And 20+ rules to detect bugs and code smells

### Security

- `security/detect-unsafe-regex`: detect unsafe regular expressions (ReDoS)
- `security/detect-eval-with-expression`: forbid eval usage
- `security/detect-pseudoRandomBytes`: enforce secure random generation
- `security/detect-child-process`: warn about child_process usage
- And 10+ security-focused rules

### Deprecation Detection

- `deprecation/deprecation`: detect usage of deprecated TypeScript APIs and methods
- **Currently disabled** due to ESLint 9 incompatibility (will be enabled when plugin updates)
- Helps maintain codebases during major version upgrades

### Node.js Best Practices (Fastify config)

- `n/prefer-node-protocol`: enforce `node:` protocol for Node.js imports
- `n/no-deprecated-api`: prevent usage of deprecated Node.js APIs
- `n/no-process-exit`: discourage direct use of `process.exit()`

### Secrets Detection

- `no-secrets/no-secrets`: detect potential secrets/credentials in code using entropy-based analysis
- Prevents accidental commits of API keys, tokens, and passwords

### Regular Expressions Quality

- `regexp/no-super-linear-backtracking`: prevent ReDoS vulnerabilities
- `regexp/optimal-quantifier-concatenation`: optimize regex patterns
- `regexp/strict`: enforce stricter regex patterns
- And 30+ regex quality and safety rules

### Import Management (import-x)

- `import-x/no-cycle`: detect circular dependencies
- `import-x/no-self-import`: prevent self-imports
- `import-x/no-useless-path-segments`: remove unnecessary path segments
- `import-x/newline-after-import`: enforce newline after imports
- And 10+ import organization rules

### TanStack Query (Next.js only)

- `@tanstack/query/exhaustive-deps`: ensure query dependencies are complete
- `@tanstack/query/stable-query-client`: enforce stable query client usage
- `@tanstack/query/no-rest-destructuring`: prevent rest destructuring in queries

### Promise handling

- `promise/always-return`: enforce return in promise chains
- `promise/catch-or-return`: enforce error handling
- `promise/no-nesting`: avoid nested promises
- `promise/param-names`: enforce consistent promise parameter naming

### TailwindCSS

- `tailwindcss/enforces-shorthand`: enforces shorthand class usage (e.g., `m-5` instead of `mx-5 my-5`)
- `tailwindcss/migration-from-tailwind-2`: handles migration from Tailwind v2 to v3

#### Tailwind CSS Canonical Classes

The following Tailwind CSS canonical class transformations are enforced at **build time as errors**:

**✅ Supported (auto-fixable by ESLint):**

- `flex-shrink-0` → `shrink-0` (migration-from-tailwind-2)
- `flex-shrink` → `shrink` (migration-from-tailwind-2)
- `flex-grow-0` → `grow-0` (migration-from-tailwind-2)
- `flex-grow` → `grow` (migration-from-tailwind-2)
- `overflow-ellipsis` → `text-ellipsis` (migration-from-tailwind-2)
- `overflow-clip` → `text-clip` (migration-from-tailwind-2)
- And other v2→v3 migrations

**❌ Not yet supported (manual migration required):**

- `bg-gradient-to-br` → `bg-linear-to-br` (Tailwind v4)
- `bg-gradient-to-*` → `bg-linear-to-*` (Tailwind v4)

For Tailwind v4 migrations, use the [official Tailwind upgrade tool](https://tailwindcss.com/docs/upgrade-guide) as eslint-plugin-tailwindcss doesn't yet support v3→v4 migrations. See [issue #325](https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/325) for updates.

### Next.js specific

- React Hooks rules
- Plugin `react-you-might-not-need-an-effect`
- Next.js core-web-vitals support
- Accessibility rules (jsx-a11y)
- TanStack Query best practices (optional)

### React 19 & Next.js 15

- `react-compiler/react-compiler`: Enforces React Compiler rules for automatic optimization
  - Detects violations that prevent the React Compiler from optimizing components
  - Essential for React 19 which introduces automatic memoization
  - Ensures code follows Rules of React for optimal performance

### Fastify specific

- `func-style`: enforces function declarations

## Update

```bash
pnpm update @kwuic/eslint-config
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests and documentation as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
