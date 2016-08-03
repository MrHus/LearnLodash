(() => {

  /*
    Sometimes you use a third party library which has a function which
    you call a lot, but always with almost the exact same parameters.

    Below there are several functions which wrap the apiCall function
    in one way or the other.

    Try to rewrite the following functions using lodash, note you have
    to change the thing that the function is assigned to, not the body
    of the function itself.

    For example:

      apiCallWithUrlAndQuery = function() { return 'hahahah'; };
  */
  const apiCallWithUrlAndQuery = _.partial(apiCall, _, _, 0, false);

  const apiCallWithUrlAndDelay = _.partial(apiCall, _, '', _, false);

  const apiCallWithUrlAndQueue = _.partial(apiCall, _, '', 1000, _);

  /*
  const apiCallWithUrlAndQuery = function(url, params) {
    return apiCall(url, params, 0, false);
  };

  const apiCallWithUrlAndDelay = function(url, delay) {
    return apiCall(url, '', delay, false);
  };

  const apiCallWithUrlAndQueue = function(url, useQueue) {
    return apiCall(url, '', 1000, useQueue);
  };
  */

  /* ===== DO NOT CHANGE THIS FUNCTION ===== */
  function apiCall(url, query, delayBy, useQueue) {
    if (_.isEmpty(query) === false) {
      url += `?query=${query}`;
    }

    return {
      delayBy,
      useQueue,
      url
    }
  };

  describe('Lab 22', () => {
    it('should know how to create "apiCallWithUrlAndQuery"', () => {
      const expected = {
        delayBy: 0,
        useQueue: false,
        url: '42.nl?query=lodash'
      };

      const result = apiCallWithUrlAndQuery('42.nl', 'lodash');
      expect(result).toEqual(expected);
    });

    it('should know how to create "apiCallWithUrlAndDelay"', () => {
      const expected = {
        delayBy: 50,
        useQueue: false,
        url: '42.nl'
      };

      const result = apiCallWithUrlAndDelay('42.nl', 50);
      expect(result).toEqual(expected);
    });

    it('should know how to create "apiCallWithUrlAndQueue"', () => {
      const expected = {
        delayBy: 1000,
        useQueue: true,
        url: '42.nl'
      };

      const result = apiCallWithUrlAndQueue('42.nl', true);
      expect(result).toEqual(expected);
    });
  });
})();
