import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json';

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  external: [
    'leancloud-storage',
    'inquirer',
    'cross-spawn',
    'path',
    'swig-templates',
    'chalk',
    'lodash',
    'fs',
  ],
  plugins: [
    babel({
      runtimeHelpers: true,
    }),
    json(),
  ],
}, ];