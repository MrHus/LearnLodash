(() => {
  /*
    Sometimes functions will get called multiple times for the same parameters.

    When your function is pure know that with the same parameter you
    always get back the same results. So we could improve slow functions
    by caching them.

    Try to rewrite the following function using lodash:
  */
  function cacheFunction(fn) {
    return _.memoize(fn, (...args) => args.join('-'));

    /*
    const cache = {};

    return function(...args) {
      const key = args.join('-');

      const value = cache[key];

      if (value === undefined) {
        const result = fn(...args);
        cache[key] = result;
        return result;
      } else {
        return value;
      }
    }
    */
  }

  /* ===== DO NOT CHANGE THE CODE BELOW ===== */

  // The id we give for each 'calculateWageAfterRaise' which we use to test if the cache is used.
  let id = 0;

  function calculateWageAfterRaise(wage, raise) {
    /*
      A rather artificial way to create a fake slow function.
      The id is always increased so we get a cheap way to test if the cache is used.
    */
    return { wage: wage * raise, id: id++ };
  }

  describe('Lab 08', () => {
    it('should use cache when it has already been calculated.', () => {
      const cachedCalculateWageAfterRaise = cacheFunction(calculateWageAfterRaise);

      const a = cachedCalculateWageAfterRaise(500, 2);
      const b = cachedCalculateWageAfterRaise(500, 2);

      const c = cachedCalculateWageAfterRaise(500, 1.5);

      expect(a.wage).toBe(1000);
      expect(b.wage).toBe(1000);
      expect(b.id).toBe(a.id);

      expect(c.wage).toBe(750);
      expect(c.id).not.toBe(a.id);
    });
  });
})();
