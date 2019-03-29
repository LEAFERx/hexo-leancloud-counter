import path from 'path';
import swig from 'swig-templates';

export function legacyScriptHelper(layout) {
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

export function scriptHelper() {
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

export function counterHelper(url, inc, element = 'span') {
  if (!url) {
    /* eslint-disable no-param-reassign */
    url = `/${this.path.replace('index.html', '')}`;
    inc = true;
    /* eslint-enable no-param-reassign */
  }
  return `<${element} class="leancloud-counter" data-leancloud-counter-url="${url}" ${inc ? 'data-leancloud-counter-inc' : ''}></${element}>`;
}
