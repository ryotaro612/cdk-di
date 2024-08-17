import { TsProject } from './projenrc/src/ts';

const project = new TsProject({
  name: 'cdk-di',

  //packageManager: NodePackageManager.NPM,

});

project.synth();

