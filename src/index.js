const {
  generator,
} = require('./lib/generator');

hexo.extend.generator.register('leancloud_counter_generator', generator);

const {
  sync,
} = require('./lib/deployer');

hexo.extend.deployer.register('leancloud_counter_security_sync', sync);

const {
  commandOptions,
  commandFunc,
} = require('./lib/cli');

hexo.extend.console.register('lc-counter', 'hexo-leancloud-counter-security', commandOptions, commandFunc);
