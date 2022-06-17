
export default class APICache {
  constructor() {
    /**
     * @type {Object<string, Object>}
     */
    this.cacheInternal = {};
  }

  /**
   * @param {string} key
   * @return {Object}
   */
  check(key) {
    return this.cacheInternal[key];
  }

  /**
   * @param {string} key
   * @param {Object} value
   * @return {boolean} if this thing was already in the cache
   */
  store(key, value) {
    var isRecord = this.cacheInternal[key] ? true : false;
    this.cacheInternal[key] = value;
    return isRecord;
  }

  
  /**
   * @param {number} expirationDate
   */
  load(expirationDate) {
    /// todo - load from storage and expire if invalid
  }

  /**
   * @param {number} expirationDate
   */
  save(expirationDate) {
    /// todo - save to local storage with an expiration time
  }

  /**
   */
  flush() {
    this.cacheInternal = {};
  }

  /**
   * Get the global instance.
   * @return {!APICache}
   */
   static getInstance() {
    if (!instance) {
      instance = new APICache();
    }

    return instance;
  }

  /**
   * Set the global instance.
   * @param {APICache} value The instance.
   */
  static setInstance(value) {
    instance = value;
  }
}

/**
 * Global instance.
 * @type {APICache|undefined}
 */
let instance;