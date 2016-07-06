(() => {

  // Defines a server response containing coordinates
  const coordinates = {
    xs: [4, 1, 5, 9],
    ys: [9, 3, 4, 42]
  };

  /*
    We have an API call which returns coordinates for a map widget.
    To save precious bytes the x and y coordinates are sent back
    in two separate arrays. This is not very useful for our front-end
    needs.

    The zipCoordinates function's job is to take the two arrays and
    zip them together.

    Try to rewrite the following function using lodash:
  */
  function zipCoordinates(coordinates) {
    const { xs, ys } = coordinates;

    const zipped = [];

    for(let i = 0; i < xs.length; i++) {
      const x = xs[i];
      const y = ys[i];

      zipped.push({ x, y });
    }

    return zipped;
  }

  describe('Lab 17', () => {
    it('should know how to zip the x and y coordinates', () => {
      expect(zipCoordinates(coordinates)).toEqual([
        {
          x: 4,
          y: 9
        }, {
          x: 1,
          y: 3
        }, {
          x: 5,
          y: 4
        }, {
          x: 9,
          y: 42
        },
      ]);
    });
  });
})();
