const fs = require('fs');

const gulp = require('gulp');
const through = require('through2');
const swig = require('swig-templates');

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const cjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
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
      babel({
        runtimeHelpers: true
      }),
      cjs(),
      resolve(),
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
  const LeanCounter = fs.readFileSync('dist/static/LeanCounter.js').toString();
  return gulp.src('src/template/*.swig')
             .pipe(through.obj((file, _, cb) => {
               if (file.isBuffer() && file.path.endsWith('.swig')) {
                 const contents = file.contents.toString()
                                    .replace('__inject_LeanCounter__', LeanCounter);
                 file.contents = Buffer.from(contents);
               }
               cb(null, file);
             }))
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