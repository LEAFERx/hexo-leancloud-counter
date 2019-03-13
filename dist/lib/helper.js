"use strict";

var path = require('path');

var swig = require('swig-templates');

function scriptHelper(layout) {
  var config = this.config;
  return this.fragment_cache("leancloud-counter-script-".concat(layout), function () {
    return swig.renderFile(path.join(__dirname, './helper-template/script.swig'), {
      layout: layout,
      api_id: config.leancloud_counter.app_id,
      api_key: config.leancloud_counter.app_key,
      security: true
    });
  });
}

module.exports = {
  scriptHelper: scriptHelper
};