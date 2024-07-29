export default (name:string,) => ({
  name: `@blogapie/${name}`,
  version: '0.0.0-pre-alpha.0',
  main: 'dist/index.js',
  types: 'dist/index.d.ts',
  files: ['dist/**/*'],
  type: 'module',
  engines: {
    node: '>=20.13.1',
    npm: '>=10.8.2',
  },
  scripts: {},
  keywords: [],
  author: 'Nolan Gajdascz',
  license: 'GPL-3.0-only',
  description: 'Library that provides fundamental data to blogapie apps',
  dependencies: {
    'http-status-codes': '^2.3.0',
  },
  homepage:
    'https://github.com/Gajdascz/BlogAPIe/tree/main/packages/libs/shared',
  repository: {
    type: 'github',
    url: 'git+https://github.com/Gajdascz/BlogAPIe.git',
    directory: '/packages/libs/shared',
  },
});
