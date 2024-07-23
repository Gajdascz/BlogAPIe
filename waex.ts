import { WatchExec } from 'waex';

const waex = new WatchExec({
  debounceRate: 300,
  limitProcessing: true,
  logger: {
    defaults: {
      label: '[WAEX]',
      level: 'log',
      colors: {
        log: '#ff804a',
        info: '#54bbff',
        warning: '#ffe554',
        error: '#ff6060',
      },
    },
    indicators: [],
  },
  watcher: {
    paths: ['./packages/**/*.{ts,js}'],
  },
  commands: [
    {
      key: 'format',
      runner: 'npx',
      args: ['prettier', '--write'],
      label: '[PRETTIER]',
      color: '#56B3FF',
      reqPath: true,
    },
    {
      key: 'lint',
      runner: 'npx',
      args: ['eslint', '--fix'],
      label: '[ESLINT]',
      color: '#74ffcc',
      reqPath: true,
    },
    {
      key: 'run',
      runner: 'npx',
      args: ['tsx'],
      label: '[TSX]',
      color: '#694bff',
      reqPath: true,
    },
  ],
});
