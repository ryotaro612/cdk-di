import { TsLibraryProject,  } from './projenrc/src/ts';

const project = new TsLibraryProject({
  name: 'cdk-di',

  //packageManager: NodePackageManager.NPM,

});

project.synth();

