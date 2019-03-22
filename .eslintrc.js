module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    hexo: 'readonly',
  },
  parser: 'babel-eslint',
  rules: {
  },
};
