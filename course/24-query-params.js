(() => {

  /*
    The urlBuilder function takes a base url and a number of query
    params as an object. It then returns the full url.

    For example:

    urlBuilder('42.nl', { page: 1, limit: 15, query: 'test' })

    Returns the following value:

    '42.nl?page=1&limit=15&query=test'

    Try to rewrite the following functions using lodash:
  */
  function urlBuilder(url, params) {
    let first = true;

    for (const name in params) {
      if (params.hasOwnProperty(name)) {
        const separator = first ? '?' : '&';

        const value = params[name];

        url += `${separator}${name}=${value}`;

        first = false;
      }
    }

    return url;
  };

  describe('Lab 24', () => {
    it('should know how to build urls with query parameters', () => {
      const expected = '42.nl?page=1&limit=15&query=test';

      expect(urlBuilder('42.nl', { page: 1, limit: 15, query: 'test' })).toBe(expected);
    });
  });
})();
