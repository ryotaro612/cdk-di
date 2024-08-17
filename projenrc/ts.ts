import {  Project, ProjectOptions,  } from 'projen';


interface TsProjectOptions extends ProjectOptions {
  
}

export class TsProject extends Project {

  constructor(options: TsProjectOptions) {
	super({
	  gitIgnoreOptions: {ignorePatterns: ['fooaaa']},
	  ... options
	});
	// TsProjectOptions
	// npx ts-node --project tsconfig-projen.json .projenrc.ts

	this.defaultTask!.exec("npx ts-node --project tsconfig-projen.json .projenrc.ts");


  }
}
