(() => {

  /*
    Sometimes you get an input and you want to perform multiple functions
    on them and get a return value for each of those functions.

    The 'analyze' function takes an array of numbers and returns
    and object containing:

      1) The highest number
      2) The lowest number
      3) The average number
      4) The first number
      5) The last number

    For these numbers: [42, 1337, 3.14, 2.71, 2000] is the the expected
    return value:

    {
      first: 42,
      last: 2000,
      high: 2000,
      low: 2.71,
      average: 676.97
    }

    Try to rewrite the following function using lodash:
  */
  function analyze(numbers) {
    // The analysis is performing some standard lodash functions on the numbers
    const analysis = _.over([_.first, _.last, _.mean, _.max, _.min])(numbers);

    // The return value is an object so zip the expected keys with the values.
    return _.zipObject(['first', 'last', 'average', 'high', 'low'], analysis);

    /*
    const analysis = {};

    analysis.first = numbers[0];
    analysis.last = numbers[numbers.length - 1];

    let high = analysis.first;
    let low = analysis.first;

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];

      high = Math.max(number, high);
      low = Math.min(number, low);

      total += number;
    }

    analysis.high = high;
    analysis.low = low;
    analysis.average = total / numbers.length;

    return analysis;
    */
  }

  describe('Lab 26', () => {
    it('should know how to analyze the numbers', () => {
      const expected = {
        first: 42,
        last: 2000,
        high: 2000,
        low: 2.71,
        average: 676.97
      };

      expect(analyze([42, 1337, 3.14, 2.71, 2000])).toEqual(expected);
    });
  });
})();
