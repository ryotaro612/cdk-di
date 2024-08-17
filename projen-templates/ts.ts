import { SampleFile, Project, ProjectOptions, IgnoreFile } from 'projen';

interface TsProjectOptions extends ProjectOptions {
  
}

export class TsProject extends Project {
  constructor(options: TsProjectOptions) {
		super(options);
	//const ignore = new IgnoreFile(this, './gitignore')
	//ignore.addPatterns('fo')
		// new SampleFile(this, 'doge.json', {
		// 	contents: JSON.stringify({ foo: 'bar' }),
	// });
	new SampleFile(this, 'doge', {contents: 'foo'});
  }
  
}




