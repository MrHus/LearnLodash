(() => {
  /*
    Sometimes you send a request on the server based on user input. For
    example a search box which sends queries to the back-end whenever
    a keyboard press is made.

    If you send a request for every keystroke to the server you will
    spam your servers.

    That is why you sometimes want to debounce a request. This means
    if a group of events happen really close to each other use only
    the last event.

    Try to rewrite the following function using lodash:
  */
  function debouncedRequest(requestFn) {
    let lastTimeout;

    return function(number) {
      clearTimeout(lastTimeout);

      lastTimeout = setTimeout(() => {
        requestFn(number);
      }, 200);
    }
  }

  describe('Lab 05', () => {
    it('should ignore request which are very close to each other, and only send the last one', (done) => {
      const spy = jasmine.createSpy();

      const request = debouncedRequest(spy);

      request(1);

      setTimeout(() => {
        request(2);
        request(3);
      }, 50);

      setTimeout(() => {
        request(4);
        request(5);
      }, 100);

      setTimeout(() => {
        expect(spy.calls.count()).toBe(1);
        expect(spy).toHaveBeenCalledWith(5);
        done();
      }, 310);
    });
  });
})();
