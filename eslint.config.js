import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';
import prettierConfig from 'eslint-config-prettier';
import jsdoc from 'eslint-plugin-jsdoc';
const shared = [
  {
    name: 'eslint.config/allShared',
    files: ['**/*.{js,jsx,ts,tsx}'],
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
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    name: 'eslint.config/jsShared',
    files: ['**/*.{js,jsx}'],
    extends: [
      ...eslint.configs.recommended,
      jsdoc.configs['flat/recommended-typescript-flavor']
    ]
  },
  {
    name: 'eslint.config/tsShared',
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: { project: true, tsconfigRootDir: import.meta.dirname },
    },
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      jsdoc.configs['flat/recommended-typescript']
    ]
  },
];


export default tseslint.config(
  ...shared,
  {
    name: 'eslint.config/server',
    files: ['./packages/server/**/*.{js,ts}'],
    languageOptions: { globals: { ...globals.node } },
  },
  {
    name: 'eslint.config/libs',
    files: ['./packages/libs/**/*.{js,ts}'],
    languageOptions: { globals: { ...globals.node } },
  },
  {
    name: 'eslint.config/client',
    files: ['./packages/client/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
    ...fixupConfigRules(pluginReactConfig),
  },
  ...fixupConfigRules(prettierConfig),
);
