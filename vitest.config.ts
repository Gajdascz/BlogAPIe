import {defineConfig} from 'vitest/config';
import { aF } from 'vitest/dist/reporters-B7ebVMkT.js';
import { JsonReporter } from 'vitest/reporters';

class BadgeReporter extends JsonReporter {
   constructor(options: aF) {
    super(options);
   };
   async writeReport(report: string) {
    const total = JSON.parse(report).total;
    console.log(total);
   }

}

const t = new BadgeReporter({outputFile: undefined});
t.writeReport(``)



export default defineConfig({
  test: {
    coverage:{
      exclude: ["**/node_modules/**", "**/dist/**", "**/.{git,cache,tmp,temp,md,json,.code*,config*, nx, yaml}",]
    }
  }
})