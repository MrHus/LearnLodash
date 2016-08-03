(() => {
  // Some energy companies quote data
  const quotes = [
    {
      id: 1,
      high: 18800,
      low: 17000,
      price: 1.55,

    }, {
      id: 2,
      high: 4500,
      low: 1230,
      price: 3.14

    }, {
      id: 3,
      high: 800,
      low: 500,
      price: 5.17

    }, {
      id: 4,
      high: 3483,
      low: 2691,
      price: 7.45
    }
  ];

  /*
    Normally we render data in tables on a row basis like so:

    | id |   high   |   low   |   price   |
    =======================================
    | 1  | 18800    | 17000   | 1.55      |
    | 2  | 4500     | 1230    | 3.14      |
    | 3  | 800      | 500     | 5.17      |
    | 4  | 3483     | 2691    | 7.45      |

    But what if we wanted to render the on a column basis like this:

    | id    | 1      |   2     |  3      | 4      |
    ================================================
    | high  | 18800  | 4500    | 800     | 3483   |
    | low   | 17000  | 1230    | 500     | 2691   |
    | price | 1.55   | 3.14    | 5.17    | 7.45   |

    Since we get the data in an array of objects we need to transform
    this data into a two dimensional array so we can iterate over it
    easily in the view template.

    That is what the function 'flipCollection' does.

    Try to rewrite the following function using lodash:
  */
  function flipCollection(collection) {
    // First collect all 'keys' from the first object from the collection.
    const keys = _.keys(_.first(collection));

    // Now collect only the values from each object in the collection.
    const values = _.map(collection, _.values);

    // Now zip all arrays together to form the desired output.
    return _.zip(keys, ...values);

    /*
    const array = [];

    let keyIndex = 0;
    for (let i = 0; i < collection.length; i++) {
      const item = collection[i];

      let valueIndex = 0;
      for (let key in item) {
        if (item.hasOwnProperty(key)) {
          if (valueIndex === keyIndex) {
            array[valueIndex] = [key];
            keyIndex += 1;
          }

          array[valueIndex].push(item[key]);
          valueIndex += 1;
        }
      }
    }

    return array;
    */
  }

  describe('Lab 21', () => {
    it('should know how to flip a collection to a two dimensional array.', () => {
      const expected = [
        ["id", 1, 2, 3, 4],
        ["high", 18800, 4500, 800, 3483],
        ["low", 17000, 1230, 500, 2691],
        ["price", 1.55, 3.14, 5.17, 7.45],
      ];

      expect(flipCollection(quotes)).toEqual(expected);
    });
  });
})();
