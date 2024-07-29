interface Repository {
  type: string;
  url: string;
  directory: string;
}

interface Options {
  scope: string;
  version: string;
  main: string;
  types: string;
  files: string[];
  moduleType: string;
  author: string;
  license: string;
  description: string;
  homepage: string;
  repository: Repository;
}

const defaults: Options = {
  scope: '',
  version: '0.0.0-pre-alpha.0',
  main: 'dist/index.js',
  types: 'dist/index.d.ts',
  files: ['dist/**/*'],
  moduleType: 'module',
  author: '',
  license: 'GPL-3.0-only',
  description: '',
  homepage: '',
  repository: {
    type: 'github',
    url: '',
    directory: '',
  },
};

export { type Options, defaults };
