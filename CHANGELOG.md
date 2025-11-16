## [0.0.5] - 2025-11-16

### Security

- **CRITICAL**: Fixed CVE-2025-64718 (js-yaml prototype pollution)
- Added pnpm overrides to force js-yaml@4.1.1+
- Updated @eslint/eslintrc to 3.3.1
- Fixed file permissions (644) for published files
- 🔒 Security audit: 0 vulnerabilities

## [0.0.4] - 2025-11-16

### Changed

- Working CI/CD publication with npm token authentication
- Removed provenance flag (OIDC issues)

## [0.0.3] - 2025-11-16

### Added

- **eslint-plugin-deprecation**: Detect usage of deprecated TypeScript APIs and methods (disabled by default due to ESLint 9 incompatibility)
- **eslint-plugin-n**: Node.js best practices (Fastify config)
- **eslint-plugin-perfectionist**: Automatic sorting rules (disabled by default)

### Changed

- Added deprecation plugin to all configs (disabled until ESLint 9 support)
- Added Node.js best practices to Fastify config
- Added perfectionist plugin (disabled) for future use

### Known Issues

- eslint-plugin-deprecation v3.0.0 is not compatible with ESLint 9 - disabled until updated

## [0.0.2] - 2025-11-16

### Changed

- **BREAKING**: Moved all ESLint plugins from `peerDependencies` to `dependencies`
  - Projects now only need to install `@kwuic/eslint-config`, `eslint`, `prettier`, and `typescript`
  - All plugin dependencies are automatically installed with the config package

## [0.0.1] - Initial release

### Added

- Initial commit: shared ESLint and Prettier config
- Support for Next.js and Fastify projects
- Shared Prettier configuration
