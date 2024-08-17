import { Project, ProjectOptions, IgnoreFile } from 'projen';

interface TsProjectOptions extends ProjectOptions {
  
}

export class TsProject extends Project {
  constructor(options: TsProjectOptions) {
		super(options);
	new IgnoreFile(this, './gitignore')
		// new SampleFile(this, 'doge.json', {
		// 	contents: JSON.stringify({ foo: 'bar' }),
		// });
  }
}




