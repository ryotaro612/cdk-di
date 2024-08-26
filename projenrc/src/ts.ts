import { Project, ProjectOptions, } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';
import {  TypeScriptProject, } from 'projen/lib/typescript';

interface TsProjectOptions extends ProjectOptions {

}

export class TsProject extends Project {

	constructor(options: TsProjectOptions) {
		super({
			gitIgnoreOptions: { ignorePatterns: ['**/*~'] },
			...options
		});

		this.defaultTask?.exec("npx ts-node --project tsconfig-projen.json .projenrc.ts");
		//  --updateSnapshot
		this.testTask.exec("npx jest", {
			receiveArgs: true,
		});
	}
}

interface TsLibraryProjectOptions {
  name: string;
}

export class TsLibraryProject extends TypeScriptProject {

  constructor(options: TsLibraryProjectOptions) {
	super({
	  defaultReleaseBranch: 'main',
	  gitIgnoreOptions: { ignorePatterns: ['**/*~'] },
	  packageManager: NodePackageManager.NPM,
	  mergify:false,
	  release: false, // remove github workflow for relase?
	  buildWorkflow: false,
	  depsUpgrade: false,
	  githubOptions: {
		pullRequestLint: false,
	  },
	  pullRequestTemplate: false,
	  ...options});

	this.defaultTask?.reset("npx ts-node --project tsconfig-projen.json .projenrc.ts");
	this.testTask.reset("npx jest", {
	  receiveArgs: true,
	});
  }
}
