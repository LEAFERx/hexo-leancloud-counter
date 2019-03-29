import generator from './lib/generator';
import sync from './lib/sync';
import { commandOptions, commandFunc } from './lib/cli';
import { scriptHelper, legacyScriptHelper, counterHelper } from './lib/helper';
import counterTag from './lib/tag';

hexo.extend.generator.register('leancloud_counter_generator', generator);

hexo.extend.deployer.register('leancloud_counter_sync', sync);

hexo.extend.console.register('lc-counter', 'hexo-leancloud-counter', commandOptions, commandFunc);

hexo.extend.helper.register('leancloud_counter_script', scriptHelper);
hexo.extend.helper.register('leancloud_counter_legacy_script', legacyScriptHelper);
hexo.extend.helper.register('leancloud_counter', counterHelper);

hexo.extend.tag.register('leanCounter', counterTag);
