(() => {

  /*
    Range creates an array of numbers within a range.

    For example:

      range(0, 3) -> [0, 1, 2];

    It can also take a step:

      range(0, 10, 2) -> [0, 2, 4, 6, 8];

    It can also go in reverse:

      range(10, 0, -2) -> [10, 8, 6, 4, 2]

    See if you can rewrite this function to use a lodash utility instead.
  */
  function range(start, end, step=1) {
    let values = [];

    if (end > start) {
      for(let i = start; i < end; i += step) {
        values.push(i);
      }
    } else {
      for(let i = start; i > end; i += step) {
        values.push(i);
      }
    }

    return values;
  }

  describe('Lab 04', () => {
    it('should know how to create ranges', () => {
      expect(range(0, 3)).toEqual([0, 1, 2]);
    });

    it('should know how to create ranges, with a step', () => {
      expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
    });

    it('should know how to create ranges that count backwards.', () => {
      expect(range(10, 0, -2)).toEqual([10, 8, 6, 4, 2]);
    });
  });
})();
