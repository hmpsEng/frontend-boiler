import { src, dest } from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
// import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
// import gulpIf from 'gulp-if';
import { config } from '../config';

const sass = gulpSass(dartSass);

const styleTask = () => {
  return src(config.source.styles)
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(cleanCSS({level:1, format: 'beautify'}))
  .pipe(dest(config.source.css))
  .pipe(rename({extname: '.min.css'}))
  .pipe(cleanCSS({level:2}))
  .pipe(dest(config.build.css))
  .pipe(browserSync.stream());
};


export default styleTask;
