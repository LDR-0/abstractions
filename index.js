import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';

const metaNodeJsPackage = { hidden: true };
const metaTests = { type: 'directory' };
const metaTestFile = { type: 'text/javascript' };
const metaBabelConfig = { type: 'text/javascript' };
const metaNodeModules = { owner: 'root', hidden: false };

const tree = mkdir('nodejs-package', metaNodeJsPackage, [
  mkfile('Makefile'),
  mkfile('README.md'),
  mkdir('dist'),
  mkdir('_tests_', metaTests, [
    mkfile('half.test.js', metaTestFile),
  ]),
  mkfile('babel.config.js', metaBabelConfig),
  mkdir('node_modules', metaNodeModules, [
    mkdir('@babel', [
      mkdir('cli', [
        mkfile('LICENSE'),
      ]),
    ]),
  ]),
]);

console.log(tree);
