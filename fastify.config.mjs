import pluginJs from "@eslint/js";
import deprecation from "eslint-plugin-deprecation";
import importX from "eslint-plugin-import-x";
import n from "eslint-plugin-n";
import noSecrets from "eslint-plugin-no-secrets";
import prettier from "eslint-plugin-prettier";
import regexp from "eslint-plugin-regexp";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";
import { commonCodeQualityRules } from "./lib/rules/code-quality.mjs";
import { deprecationRules } from "./lib/rules/deprecation.mjs";
import { importRules, importSettings } from "./lib/rules/import.mjs";
import { nodeRules } from "./lib/rules/node.mjs";
import { regexpRules } from "./lib/rules/regexp.mjs";
import { noSecretsRules, prettierRules, simpleImportSortRules, unusedImportsRules } from "./lib/rules/tools.mjs";
import { typescriptRules } from "./lib/rules/typescript.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.node, ...globals.es2021 } } },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2021,
        projectService: true,
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
    },
  },
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    plugins: {
      deprecation,
      n,
      prettier,
      "import-x": importX,
      "no-secrets": noSecrets,
      regexp,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      ...typescriptRules,
      ...commonCodeQualityRules,
      ...deprecationRules,
      ...nodeRules,
      ...prettierRules,
      ...simpleImportSortRules,
      ...unusedImportsRules,
      ...noSecretsRules,
      ...regexpRules,
      ...importRules,
      "func-style": ["error", "declaration"],
      "@typescript-eslint/no-throw-literal": "error",
    },
    settings: {
      ...importSettings,
    },
  },
  {
    files: ["**/*.test.ts", "**/*.spec.ts", "**/test/**/*.ts", "**/tests/**/*.ts"],
    rules: {
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
  {
    ignores: [
      "*/**.js",
      "*.js",
      "*.mjs",
      "*/**.mjs",
      "vitest.config.ts",
      "dist",
      "build",
      "node_modules",
      "eslint.config.mjs",
    ],
  },
];
