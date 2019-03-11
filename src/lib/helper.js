const swig = require('swig-templates');

function scriptHelper(layout) {
  const { config } = this;
  this.fragment_cache(`leancloud-counter-script-${layout}`, () => swig.renderFile('./tag-template/script.swig', {
    layout,
    api_id: config.leancloud_counter.app_id,
    api_key: config.leancloud_counter.app_key,
  }));
}

module.exports = {
  scriptHelper,
};
