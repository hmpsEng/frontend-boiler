var gulp = require('gulp');
const { src, dest } = require("gulp");
// var changed = require("gulp-changed");
// var imagemin = require("gulp-imagemin");
// import del from 'del';
var cleanCSS = require("gulp-clean-css");
let uglify = require('gulp-uglify-es').default;
var rename = require("gulp-rename");

// Generate css files
gulp.task("build:css", () => {
  return src("website/src/css/**/!(*.min).css")
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("website/dist/css/"))
    .pipe(dest("website/src/css/"));
});

// Generate JS files
gulp.task("build:javascript", () => {
	return src("website/src/js/**/!(*.min).js")
		.pipe(rename("scripts.min.js"))
		.pipe(uglify(/* options */))
		.pipe(gulp.dest("website/dist/js/"))
    .pipe(gulp.dest("website/src/js/"));
});

// copy files to website/dist
gulp.task("build:dist", () => {
  return src([
    'website/src/css/**/*.min.css',
    'website/src/js/**/*.min.js',
    'website/src/img/dest/**/*',
    'website/src/**/*.html',
  ], { base: 'website/src' })
    .pipe(dest('website/dist'));
});

// gulp.task("build:images", function () {
//   return src(['website/src/img/src/**/*'])
//     .pipe(changed('website/dist/img/dist'))
//     .pipe(imagemin())
//     .pipe(dest('website/dist/img/dist'));
// });

//function clean() {
//  // You can use multiple globbing patterns as you would with `gulp.src`,
//  // for example if you are using del 2.0 or above, return its promise
//  return del([ 'assets' ]);
// }
