import {  Project, ProjectOptions, } from 'projen';

interface TsProjectOptions extends ProjectOptions {

}

export class TsProject extends Project {

	constructor(options: TsProjectOptions) {
		super({
		  gitIgnoreOptions: { ignorePatterns: ['**/*~'] },
			...options
		});
	  //new Task('test', {});
		// npx jest
		// TsProjectOptions
	  // npx ts-node --project tsconfig-projen.json .projenrc.ts

	  this.defaultTask?.exec("npx ts-node --project tsconfig-projen.json .projenrc.ts");
	  //  --updateSnapshot
	  this.testTask.exec("npx jest", {
		receiveArgs: true,
	  });
	  //this.testTask.exec('echo hoge');
	  //this.testTask.updateStep(0, { exec: 'npx jest' });

	}

}
