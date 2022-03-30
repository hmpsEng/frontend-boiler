import { src, dest } from 'gulp';
import fileinclude from 'gulp-file-include';
import browserSync from 'browser-sync';
import { config } from '../config';

const mainTemplateTask = () => {
  return src(config.source.homepage)
    .pipe(fileinclude({
      prefix: '@',
    }))
    .pipe(dest(config.build.root))
    .pipe(browserSync.stream());
};

export default mainTemplateTask;
