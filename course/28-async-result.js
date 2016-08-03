(() => {

  /*
    This value will be tested against, it represents the result of
    three asynchronous request.
  */
  let averageTemperature = null;

  /*
    We have a website and we want to display the temperature somewhere.
    We could simply use a single temperature from a single news website
    but that is not as fun as calculating the average from three
    websites.

    That is what the 'getAverageTemperature' does, it takes the temperature
    from three news sites asynchronously and then calculates the average
    temperature.

    There are a couple of extra rules for this lab:

      1. You must call getTemperatureFrom once with 'nos', once with 'rtl'
         and once with 'cnn'.

      2. You must not call getTemperatureFrom in 'sequence' they must be
         called all at once.

    Hint: the key is manipulating (not rewriting!) calculateAverage.

    Note: if the 'getTemperatureFrom' returned a promise we could
          implement getAverageTemperature this with Promise.all. But
          this course is called LearnLodash, so no Promises for you!

    Try to rewrite the following function using lodash:
  */
  function getAverageTemperature() {
    // Create a curried version of calculateAverage;
    let curriedCalculateAverage = _.curry(calculateAverage);

    getTemperatureFrom('rtl', handleResponse);
    getTemperatureFrom('cnn', handleResponse);
    getTemperatureFrom('nos', handleResponse);

    function handleResponse(value) {
      curriedCalculateAverage = curriedCalculateAverage(value);

      /*
        After three times the 'curriedCalculateAverage' will no longer
        be a Function but a number, because '_.curry' has done its job.
      */
      if (_.isNumber(curriedCalculateAverage)) {
        averageTemperature = curriedCalculateAverage;
      }
    }

    /*
    let rtl = null;
    let cnn = null;
    let nos = null;

    getTemperatureFrom('rtl', function(value) {
      rtl = value;

      setAverageIfComplete();
    });

    getTemperatureFrom('cnn', function(value) {
      cnn = value;

      setAverageIfComplete();
    });

    getTemperatureFrom('nos', function(value) {
      nos = value;

      setAverageIfComplete();
    });

    function setAverageIfComplete() {
      if (rtl !== null && cnn !== null && nos !== null) {
        averageTemperature = calculateAverage(rtl, cnn, nos);
      }
    }
    */
  };

  /* ===== DO NOT CHANGE THESE FUNCTIONS ===== */

  // Silly fake function to calculate the average temperature
  function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
  }

  // Silly fake function to mock an async request
  function getTemperatureFrom(source, callback) {
    const config = {
      'rtl': {
        value: 30,
        after: 1
      },
      'cnn': {
        value: 29,
        after: 5
      },
      'nos': {
        value: 31,
        after: 3
      }
    };

    const { value, after } = config[source];

    setTimeout(() => callback(value), after);
  }

  describe('Lab 28', () => {
    it('should set the "averageTemperature" value correctly.', (done) => {
      expect(averageTemperature).toBe(null);

      getAverageTemperature();

      setTimeout(() => {
        expect(averageTemperature).toBe(30);
        done();
      }, 10);
    });
  });
})();
