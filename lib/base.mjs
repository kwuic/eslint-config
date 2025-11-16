import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export const createBaseConfig = (options = {}) => {
  const { tsconfigRootDir = import.meta.dirname, globals = {}, ecmaFeatures = {} } = options;

  return [
    pluginJs.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    {
      languageOptions: {
        ecmaVersion: 2022,
        globals,
        parserOptions: {
          projectService: true,
          tsconfigRootDir,
          sourceType: "module",
          ecmaFeatures,
        },
      },
    },
  ];
};
