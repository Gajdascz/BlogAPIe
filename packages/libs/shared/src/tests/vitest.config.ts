import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['./**/*.{test,spec}.{js,ts,jsx,tsx}'],
    reporters: ['default'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/docs/**', '**/*.json'],
    watch: false,
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/docs/**',
        '**/*.test.*',
        '**/*.spec.*',
        '**/*.config.*',
        '**/types.ts',
        '**/*.{json,md,prettierignore,code-workspace,d.ts}',
      ],
    },
  },
});
