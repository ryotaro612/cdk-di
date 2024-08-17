import {  Project, ProjectOptions,  } from 'projen';


interface TsProjectOptions extends ProjectOptions {
  
}

export class TsProject extends Project {

  constructor(options: TsProjectOptions) {
	super({
	  gitIgnoreOptions: {ignorePatterns: ['fooaaa']},
	  ... options
	});

	// npx jest
	// TsProjectOptions
	// npx ts-node --project tsconfig-projen.json .projenrc.ts

	this.defaultTask!.exec("ts-node --project tsconfig-projen.json .projenrc.ts");


  }
}
