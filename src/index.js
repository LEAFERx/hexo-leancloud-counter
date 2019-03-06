const {
  generator,
} = require('./lib/generator');

hexo.extend.generator.register('leancloud_counter_generator', generator);
