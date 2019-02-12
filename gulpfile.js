// var gulp = require('gulp');
// var sass = require('gulp-sass');

// gulp.task('sass', function(){
//     return gulp.src('src/scss/app.scss')
//         .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
//         .pipe(gulp.dest('app/css'));
// });

// gulp.task('default', gulp.series('sass'));


// This is the new way to write a task in Gulp@4:
const { src, dest, series } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
 
function compileSass() {
  return src('src/scss/app.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(dest('app/css'));
}
 
exports.compileSass = compileSass;
exports.default = series(compileSass);