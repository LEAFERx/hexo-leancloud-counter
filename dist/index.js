"use strict";

var _require = require('./lib/generator'),
    generator = _require.generator;

hexo.extend.generator.register('leancloud_counter_generator', generator);

var _require2 = require('./lib/deployer'),
    sync = _require2.sync;

hexo.extend.deployer.register('leancloud_counter_sync', sync);

var _require3 = require('./lib/cli'),
    commandOptions = _require3.commandOptions,
    commandFunc = _require3.commandFunc;

hexo.extend.console.register('lc-counter', 'hexo-leancloud-counter', commandOptions, commandFunc);

var _require4 = require('./lib/helper'),
    scriptHelper = _require4.scriptHelper;

hexo.extend.helper.register('leancloud_counter_script', scriptHelper);