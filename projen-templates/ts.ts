import { Project, ProjectOptions } from 'projen';

interface TsProjectOptions extends ProjectOptions {
  
}

export class TsProject extends Project {
  constructor(options: TsProjectOptions) {
		super(options);

		this.addGitIgnore('node_modules');

		// new SampleFile(this, 'doge.json', {
		// 	contents: JSON.stringify({ foo: 'bar' }),
		// });
  }
}
