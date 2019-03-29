/* global document, fetch */
/* eslint-disable no-underscore-dangle,func-names */

export default function LeanCounter({
  appId,
  appKey,
  elementClass = '.leancloud-counter',
  addCountInterval = 100,
  base = '/1.1/classes/Counter',
  initOnLoaded = true,
} = {}) {
  if (!appId || !appKey) throw new Error('Missing appId or appKey.');
  this._appId = appId;
  this._appKey = appKey;
  this._idCache = {};
  this._addCountUrlQueue = [];
  this.addCountInterval = addCountInterval;
  this.base = base;
  this.elements = document.querySelectorAll(elementClass);

  if (initOnLoaded) {
    if (document.readyState !== 'loading') {
      this.init();
    } else {
      document.addEventListener('DOMContentLoaded', this.init.bind(this));
    }
  }
}

LeanCounter.prototype._request = function (method, route, data) {
  if (!this.apiServer) return Promise.reject(new Error('This LeanCounter instance is not initialized.'));
  if (method === 'get') {
    let url = `https://${this.apiServer}${this.base}${route}`;
    if (data) {
      const paramsArray = [];
      Object.keys(data).forEach((key) => {
        paramsArray.push(`${key}=${encodeURI(data[key])}`);
      });
      url += `?${paramsArray.join('&')}`;
    }
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-LC-Id': this._appId,
        'X-LC-Key': this._appKey,
      },
    }).then(res => res.json());
  }
  return fetch(`https://${this.apiServer}${this.base}${route}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-LC-Id': this._appId,
      'X-LC-Key': this._appKey,
    },
    body: JSON.stringify(data),
  }).then(res => res.json());
};

LeanCounter.prototype.getCount = function (urls) {
  const _removeRepeat = (arr) => {
    const result = [];
    const tmpObj = {};
    arr.forEach((i) => {
      if (!tmpObj[i]) {
        result.push(i);
        tmpObj[i] = true;
      }
    });
    return result;
  };

  let urlArray = urls;
  if (!Array.isArray(urlArray)) urlArray = Array(urlArray);
  urlArray = _removeRepeat(urlArray);

  return this._request('get', '', {
    where: JSON.stringify({
      url: {
        $in: urlArray,
      },
    }),
  }).then(({ results }) => {
    const countResults = {};
    results.forEach(({ url, objectId, time }) => {
      if (!this._idCache[url]) this._idCache[url] = objectId;
      countResults[url] = time;
    });
    return countResults;
  });
};

LeanCounter.prototype.addCount = function (url) {
  this._addCountUrlQueue.push(url);
  if (!this._addCountIntervalId) {
    this._addCountIntervalId = setInterval(() => {
      if (this._addCountUrlQueue.length === 0) return;
      const current = this._addCountUrlQueue.pop();
      if (!this._idCache[current]) this.getCount(current);
      this._request('put', `/${this._idCache[current]}`, {
        time: {
          __op: 'Increment',
          amount: 1,
        },
      });
    }, this.addCountInterval);
  }
};

LeanCounter.prototype.init = function () {
  fetch(`https://app-router.leancloud.cn/2/route?appId=${this._appId}`)
    .then(res => res.json())
    // eslint-disable-next-line camelcase
    .then(({ api_server }) => {
      // eslint-disable-next-line camelcase
      this.apiServer = api_server;
      const urls = [];
      this.elements.forEach((element) => {
        urls.push(element.dataset.leancloudCounterUrl);
      });
      return this.getCount(urls);
    })
    .then((countResults) => {
      this.elements.forEach((element) => {
        if ('leancloudCounterInc' in element.dataset) {
          // eslint-disable-next-line no-param-reassign
          element.textContent = String(countResults[element.dataset.leancloudCounterUrl] + 1);
          this.addCount(element.dataset.leancloudCounterUrl);
        } else {
          // eslint-disable-next-line no-param-reassign
          element.textContent = String(countResults[element.dataset.leancloudCounterUrl]);
        }
      });
    });
};
