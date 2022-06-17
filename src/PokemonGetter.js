import APIRequest from './APIRequest.js'

export default class PokemonGetter {
  constructor() { }

  /**
   * @param {string} opt_key
   */
  async getPokeman(opt_key) {
    var key = opt_key || Math.ceil(Math.random() * 151);
    var request = new APIRequest(`/${key}/`);

    return request.run();
  }

  /**
   * @param {string} opt_query
   */
  async queryPokemon(opt_query) {
    var key = opt_query || '?limit=151';
    var request = new APIRequest(`?${query}/`);

    return request.run();
  }
}