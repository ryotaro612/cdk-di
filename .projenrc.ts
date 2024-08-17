import { TypeScriptProject } from 'projen';

const project = new TypeScriptProject({
  name: 'my-projen-project',
  defaultReleaseBranch: 'main',
  packageManager: NodePackageManager.NPM,
  srcdir: 'src',
  testdir: 'test',
});
aa;
project.synth();
