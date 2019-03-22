import path from 'path';
import swig from 'swig-templates';

function legacyScriptHelper(layout) {
  const { config } = this;
  return this.fragment_cache(
    `leancloud-counter-legacy-script-${layout}`,
    () => swig.renderFile(path.join(__dirname, './template/legacyScript.swig'),
      {
        layout,
        appId: config.leancloud_counter.app_id,
        appKey: config.leancloud_counter.app_key,
      }),
  );
}

function scriptHelper() {
  const { config } = this;
  return this.fragment_cache(
    'leancloud-counter-script',
    () => swig.renderFile(path.join(__dirname, './template/mainScript.swig'),
      {
        appId: config.leancloud_counter.app_id,
        appKey: config.leancloud_counter.app_key,
      }),
  );
}

export {
  scriptHelper,
  legacyScriptHelper,
};
