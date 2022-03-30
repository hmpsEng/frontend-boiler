import { src, dest } from 'gulp';
import fileinclude from 'gulp-file-include';
import browserSync from 'browser-sync';
import { config } from '../config';

const mainLayoutTask = () => {
  return src(config.source.html_layout)
    .pipe(fileinclude({
      prefix: '@',
    }))
    .pipe(dest(config.build.html))
    .pipe(browserSync.stream());
};

export default mainLayoutTask;
