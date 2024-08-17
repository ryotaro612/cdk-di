import { TsProject } from './projen-templates/ts';


class CdkDiProject extends TsProject {
  constructor() {
	super({
	  name: 'cdk-di',
	});
	aaa
	//this.addGitIgnore('node_modules');
  }
}

const project = new CdkDiProject();

project.synth();

