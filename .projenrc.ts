import { TsProject } from './projen-templates/ts';


class CdkDiProject extends TsProject {
  constructor() {
	super({
	  name: 'cdk-di',
	});

		// new SampleFile(this, 'doge.json', {
		// 	contents: JSON.stringify({ foo: 'bar' }),
	// });
	//this.addGitIgnore('node_modules');
  }
}
const project = new CdkDiProject();

project.synth();
