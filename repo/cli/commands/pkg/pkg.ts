import { Command } from 'commander';

const pkg = new Command('pkg');

pkg
  .command('add <type> <packageName>')
  .description('Builds a new package with the specified type');
