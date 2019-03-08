"use strict";

var log = require('./log');

function generator(locals) {
  var config = this.config;

  if (config.leancloud_counter.enable_sync) {
    log.info('Generating post list for syncing...');
    var path = 'leancloud_counter_post_list.json';
    var posts = [].concat(locals.posts.toArray()).filter(function (x) {
      return x.published;
    }).map(function (x) {
      return {
        title: x.title,
        url: config.root + x.path
      };
    });
    log.info('Generated.');
    return {
      path: path,
      data: JSON.stringify(posts)
    };
  }

  return null;
}

module.exports = {
  generator: generator
};