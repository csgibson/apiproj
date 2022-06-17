import APICache from './APICache.js';

export default class APIRequest {
  /**
   * @param {string} uri 
   * @param {string=} opt_baseUrl 
   */
  constructor(uri, opt_baseUrl) {
    this.cache = APICache.getInstance();
    this.uri = uri || '?limit=151';
    this.baseUrl = opt_baseUrl || 'https://pokeapi.co/api/v2/pokemon';
  }

  /**
   * run the request and store in the cache
   * @return {Object}
   */
  async run() {
    var url = `${this.baseUrl}${this.uri}`;
    var data = this.cache.check(url);

    if (!data) {
      var reponse = await fetch(url);
      var data = await reponse.json();
      this.cache.store(url, data);
    }

    return data;
  }
}