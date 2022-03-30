/* eslint-disable max-len */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable arrow-body-style */

import { series, parallel } from 'gulp';
import cleanDist from './gulp/tasks/cleanDist';
import buildDistFolder from './gulp/tasks/buildDist';
import mainTemplateTask from './gulp/tasks/templateTask';
import mainLayoutTask from './gulp/tasks/layout-html';
import styleTask from './gulp/tasks/styles';
import JSmainTask from './gulp/tasks/jsTask';
import watchFiles from './gulp/tasks/watch-files';
import { config } from './gulp/config';

//  dev = !argv.includes('--prod')  -------------------------------------------
config.setEnv();

exports.cleanDist = cleanDist;

// #build   #rebuild
// --------------------------------------------------------------------------
const build = series(
  buildDistFolder,
  parallel(
    mainTemplateTask,
    mainLayoutTask,
    styleTask,
    JSmainTask,
  ),
);

const rebuild = series(
  cleanDist,
  buildDistFolder,
  parallel(
    mainTemplateTask,
    mainLayoutTask,
    styleTask,
    JSmainTask,
  ),
);

const deploy = series(
  watchFiles,
);

exports.build = build;
exports.rebuild = rebuild;
exports.deploy = series(build, deploy);
exports.redeploy = series(rebuild, deploy);
