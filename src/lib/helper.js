const path = require('path');
const swig = require('swig-templates');

function scriptHelper(layout) {
  const { config } = this;
  return this.fragment_cache(
    `leancloud-counter-script-${layout}`,
    () => swig.renderFile(path.join(__dirname, './helper-template/script.swig'),
      {
        layout,
        api_id: config.leancloud_counter.app_id,
        api_key: config.leancloud_counter.app_key,
        security: true,
      }),
  );
}

module.exports = {
  scriptHelper,
};
