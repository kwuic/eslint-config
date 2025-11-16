export const importRules = {
  "import-x/no-unresolved": "off",
  "import-x/named": "error",
  "import-x/namespace": "error",
  "import-x/default": "error",
  "import-x/export": "error",
  "import-x/no-named-as-default": "warn",
  "import-x/no-named-as-default-member": "warn",
  "import-x/no-duplicates": "error",
  "import-x/no-namespace": "warn",
  "import-x/extensions": ["error", "ignorePackages", { ts: "never", js: "never" }],
  "import-x/order": "off",
  "import-x/newline-after-import": "error",
  "import-x/no-cycle": "error",
  "import-x/no-self-import": "error",
  "import-x/no-useless-path-segments": "error",
  "import-x/no-relative-packages": "warn",
  "import-x/no-relative-parent-imports": "off",
  "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
};

export const importSettings = {
  "import-x/resolver": {
    typescript: true,
    node: true,
  },
};
