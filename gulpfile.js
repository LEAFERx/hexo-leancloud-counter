const fs = require('fs');

const gulp = require('gulp');
const through = require('through2');
const swig = require('swig-templates');

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const buble = require('rollup-plugin-buble');
const { terser } = require('rollup-plugin-terser');

const { dependencies } = require('./package.json');

gulp.task('rollup', async () => {
  const bundle = await rollup.rollup({
    input: 'src/index.js',
    plugins: [
      babel({
        runtimeHelpers: true,
      }),
    ],
    external(name) {
      // no need to bundle dependencies
      return [
        'fs',
        'path',
      ].includes(name)
      || name in dependencies
      || name.startsWith('@babel/runtime');
    },
  });

  await Promise.all([
    bundle.write({
      file: 'dist/index.js',
      format: 'cjs',
    }),
    bundle.write({
      file: 'dist/index.esm.js',
      format: 'es',
    }),
  ]);
});

gulp.task('rollup-LeanCounter', async () => {
  const bundle = await rollup.rollup({
    input: 'src/static/LeanCounter.js',
    plugins: [
      buble(),
      terser(),
    ],
  });

  await bundle.write({
    file: 'dist/static/LeanCounter.js',
    format: 'iife',
    name: 'LeanCounter',
  });
});

gulp.task('copy-templates', () => {
  return gulp.src('src/template/*.swig')
             .pipe(gulp.dest('dist/template/'));
});

gulp.task('build',
  gulp.parallel(
    'rollup',
    gulp.series(
      'rollup-LeanCounter',
      'copy-templates',
    ),
  ),
);