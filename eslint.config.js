import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import globals from 'globals';
// import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';
import prettierConfig from 'eslint-config-prettier';
import tsdoc from 'eslint-plugin-tsdoc';

export default tseslint.config(
  {
    ignores: [
      '**/build/**',
      '**/dist/**',
      '**/node_modules/**',
      '**/.vscode/**',
      '**/*.code-workspace',
      '.gitignore',
      '**/*.md',
      '**/*.puml',
      '**/*LICENSE',
      '**/*.css',
      '**/docs/**',
    ],
  },
  eslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    name: 'typescript',
    files: ['waex.ts', 'packages/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'eslint-plugin-tsdoc': tsdoc,
    },
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
  },
  {
    name: 'libs',
    files: ['packages/libs/**/*.{js,ts,tsx,jsx}'],
    languageOptions: { globals: { ...globals.node } },
  },

  ...fixupConfigRules(prettierConfig),
);

// {
//   name: 'javascript',
//   files: ['**/*.{js,jsx}'],
// },
// {
//   name: 'server',
//   files: ['./packages/server/**/*.{js,ts}'],
//   languageOptions: { globals: { ...globals.node } },
// },

// {
//   name: 'client',
//   files: ['./packages/client/**/*.{js,jsx,ts,tsx}'],
//   languageOptions: {
//     parserOptions: { ecmaFeatures: { jsx: true } },
//     globals: { ...globals.browser },
//   },
//   ...fixupConfigRules(pluginReactConfig),
// },
