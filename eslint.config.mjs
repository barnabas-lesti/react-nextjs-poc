import eslint from "@eslint/js";
import eslintPluginNext from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config(
  { ignores: [".next/**", "next-env.d.ts"] },
  eslint.configs.recommended,
  ...typescriptEslint.configs.strict,
  ...typescriptEslint.configs.stylistic,
  eslintPluginJsxA11y.flatConfigs.recommended,
  {
    files: ["**/*.{ts,tsx,js,cjs,mjs}"],
    languageOptions: {
      parserOptions: {
        parser: typescriptEslint.parser,
        project: true,
        ecmaFeatures: {
          jsx: true,
        },
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [],
    plugins: {
      "simple-import-sort": eslintPluginSimpleImportSort,
      "unused-imports": eslintPluginUnusedImports,
      "react": eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": eslintPluginReactRefresh,
      "@next/next": eslintPluginNext,
    },
    rules: {
      // Eslint
      "eol-last": ["error", "always"],
      "default-param-last": ["error"],
      "no-trailing-spaces": ["error"],
      "arrow-spacing": ["error"],
      "prefer-const": ["error"],
      "no-console": ["error", { allow: ["debug", "warn", "error"] }],

      // Typescript
      "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-extraneous-class": "off",

      // Simple import sort
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^@?\\w"], ["^#?\\w"], ["^\\./", "^\\.\\./"], ["^/"], ["^.+\\.(css|scss)([?].*)?$"]],
        },
      ],

      // Unused imports
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "error",

      // React
      ...eslintPluginReact.configs.flat.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react-refresh/only-export-components": "error",

      // Next
      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginNext.configs["core-web-vitals"].rules,
    },
  },
  {
    files: ["**/{layout,page}.tsx"],
    rules: {
      "react/display-name": "off",
      "react-refresh/only-export-components": "off",
    },
  },
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      parserOptions: {
        project: false,
      },
    },
  },
  eslintConfigPrettier,
);
