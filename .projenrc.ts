import { TsProject } from './projenrc/src/ts';

const project = new TsProject({
  name: 'my-projen-project',

  //packageManager: NodePackageManager.NPM,

});

project.synth();

