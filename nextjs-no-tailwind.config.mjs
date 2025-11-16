import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import query from "@tanstack/eslint-plugin-query";
import deprecation from "eslint-plugin-deprecation";
import importX from "eslint-plugin-import-x";
import jsxA11y from "eslint-plugin-jsx-a11y";
import noSecrets from "eslint-plugin-no-secrets";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier";
import promise from "eslint-plugin-promise";
import pluginReact from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";
import regexp from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";
import { commonCodeQualityRules, sonarjsRules, unicornRules } from "./lib/rules/code-quality.mjs";
import { deprecationRules } from "./lib/rules/deprecation.mjs";
import { importRules, importSettings } from "./lib/rules/import.mjs";
import { nextjsRules, tanstackQueryRules } from "./lib/rules/nextjs.mjs";
import { perfectionistRules } from "./lib/rules/perfectionist.mjs";
import { promiseRules } from "./lib/rules/promise.mjs";
import {
  jsxA11yRules,
  reactCompilerRules,
  reactHooksRules,
  reactRules,
  reactSettings,
  reactYouMightNotNeedAnEffectRules,
} from "./lib/rules/react.mjs";
import { regexpRules } from "./lib/rules/regexp.mjs";
import { securityRules } from "./lib/rules/security.mjs";
import { noSecretsRules, prettierRules, simpleImportSortRules, unusedImportsRules } from "./lib/rules/tools.mjs";
import { typescriptRules } from "./lib/rules/typescript.mjs";

export default tseslint.config(
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      ".turbo/**",
      "dist/**",
      "build/**",
      "next-env.d.ts",
      "eslint.config.mjs",
      "next.config.js",
      "next.config.ts",
      "examples/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat["jsx-runtime"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      deprecation,
      perfectionist,
      prettier,
      "@tanstack/query": query,
      "import-x": importX,
      "jsx-a11y": jsxA11y,
      "no-secrets": noSecrets,
      promise,
      react: pluginReact,
      "react-compiler": reactCompiler,
      "react-hooks": pluginReactHooks,
      "react-you-might-not-need-an-effect": pluginReactYouMightNotNeedAnEffect,
      regexp,
      security,
      "simple-import-sort": simpleImportSort,
      sonarjs,
      unicorn,
      "unused-imports": unusedImports,
    },
    rules: {
      ...typescriptRules,
      ...commonCodeQualityRules,
      ...deprecationRules,
      ...perfectionistRules,
      ...unicornRules,
      ...sonarjsRules,
      ...securityRules,
      ...promiseRules,
      ...prettierRules,
      ...simpleImportSortRules,
      ...unusedImportsRules,
      ...reactRules,
      ...reactHooksRules,
      ...reactYouMightNotNeedAnEffectRules,
      ...reactCompilerRules,
      ...jsxA11yRules,
      ...nextjsRules,
      ...tanstackQueryRules,
      ...noSecretsRules,
      ...regexpRules,
      ...importRules,
      "func-style": ["error", "declaration", { "allowArrowFunctions": false }],
      "prefer-arrow-callback": "error",
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "import-x/extensions": ["error", "ignorePackages", { ts: "never", tsx: "never", js: "never", jsx: "never" }],
    },
    settings: {
      ...reactSettings,
      ...importSettings,
    },
  },
);
