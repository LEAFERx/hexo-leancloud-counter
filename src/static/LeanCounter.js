/* global document, fetch */
/* eslint-disable no-underscore-dangle */

export default class LeanCounter {
  constructor({
    appId,
    appKey,
    elementClass = '.leancould-counter',
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
        document.addEventListener('DOMContentLoaded', this.init);
      }
    }
  }

  async _request(method, route, data) {
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
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'X-LC-Id': this._appId,
          'X-LC-Key': this._appKey,
        },
      });
      return response.json();
    }
    const response = fetch(`https://${this.apiServer}${this.base}${route}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-LC-Id': this._appId,
        'X-LC-Key': this._appKey,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async getCount(urls) {
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
    const { results } = await this._request('get', '', {
      where: JSON.stringify({
        url: {
          $in: urlArray,
        },
      }),
    });
    const countResults = {};
    results.forEach(({ url, objectId, time }) => {
      if (!this._idCache[url]) this._idCache[url] = objectId;
      countResults[url] = time;
    });
    return countResults;
  }

  async _addCount() {
    if (this._addCountUrlQueue.length === 0) return;
    const url = this._addCountUrlQueue.pop();
    if (!this._idCache[url]) this.getCount(url);
    this._request('put', `/${this._idCache[url]}`, {
      time: {
        __op: 'Increment',
        amount: 1,
      },
    });
  }

  async addCount(url) {
    this._addCountUrlQueue.push(url);
    if (!this._addCountIntervalId) {
      this._addCountIntervalId = setInterval(this._addCount, this.addCountInterval);
    }
  }

  async init() {
    const response = await fetch(`https://app-router.leancloud.cn/2/route?appId=${this._appId}`);
    // eslint-disable-next-line camelcase
    const { api_server } = await response.json();
    // eslint-disable-next-line camelcase
    this.apiServer = api_server;
    const urls = [];
    this.elements.forEach((element) => {
      urls.push(element.dataset.leancloudCounterUrl);
    });
    const countResults = await this.getCount(urls);
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
  }
}
