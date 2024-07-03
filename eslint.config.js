import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';
import standardJsConfig from 'eslint-config-standard';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    name: 'eslint.config/server',
    files: ['./server/**/*.{js}'],
    languageOptions: { globals: { ...globals.node } },
  },
  {
    name: 'eslint.config/frontend',
    files: ['./frontend/**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
    ...fixupConfigRules(pluginReactConfig),
  },
  {
    name: 'eslint.config/shared',
    files: ['**/*.{js,jsx}'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    ...standardJsConfig,
    ...prettierConfig,
  },
];
