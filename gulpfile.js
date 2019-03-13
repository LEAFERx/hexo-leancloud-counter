const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () => {
  return gulp.src('src/**/*.js')
             .pipe(babel())
             .pipe(gulp.dest('dist'));
});

gulp.task('copy-template', () => {
  return gulp.src('src/**/*.swig')
             .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.parallel('babel', 'copy-template'));