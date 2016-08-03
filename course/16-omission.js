(() => {
  // The portfolio of a publishing company containing sensitive data.
  const portfolio = {
    thrillers: [
      {
        author: "Dick Tracy",
        title: "Through a Shadow Swiftly",
        isbn: "555-1337",
        profit: 6000,
        advance: 5000,
      }, {
        author: "Luthor van Ross",
        title: "Night terror on main street",
        isbn: "555-1666",
        profit: 5000,
        advance: 10000
      }
    ],
    romance: [
      {
        author: "Nigella Mckenzie",
        title: "The Passion of the Heart",
        isbn: "555-9826",
        profit: 9000,
        advance: 5000
      }, {
        author: "George Hamilton",
        title: "Bonjour Amour",
        isbn: "555-4525",
        profit: 9000,
        advance: 7500
      }, {
        author: "Carlos Santiago",
        title: "Latin Lovers of Jamaica",
        isbn: "555-8575",
        profit: 1000000,
        advance: 400
      }
    ],
    war: [
      {
        author: "Chet Bingham",
        title: "War of the Horseraiders of Zankur",
        isbn: "555-1515",
        profit: 7000,
        advance: 5000
      }
    ]
  };

  /*
    Sometimes we don't need all the data from a certain data structure.

    In this case we have a portfolio from a publishing company which has
    some sensitive sales information included in the structure. The
    'removeSensitiveData' cleanses the data structure by removing
    profit and advance.

    Try to rewrite the following function using lodash:
  */
  function removeSensitiveData(portfolio) {
    // We only want to change the 'books' so we can do a _.mapValues instead of a _.map
    return _.mapValues(portfolio, (books) => {
      /*
        _.omit takes an array of properties it needs to ignore.
        There is also _.pick which is its polar opposite, it takes
        an array of properties to keep.

        How do you decide between _.pick and _.omit: use whatever
        produces the smallest array of properties.
      */
      return _.map(books, (book) => _.omit(book, ['profit', 'advance']));
    });

    /*
    for (const genre in portfolio) {
      if (portfolio.hasOwnProperty(genre)) {
        const books = portfolio[genre];

        for (let i = 0; i < books.length; i++) {
          const book = books[i];
          delete book.profit;
          delete book.advance;
        }
      }
    }

    return portfolio;
    */
  }

  describe('Lab 16', () => {
    it('should know how remove the sensitive sales data from the portfolio', () => {
      const expected = {
        thrillers: [
          {
            author: "Dick Tracy",
            title: "Through a Shadow Swiftly",
            isbn: "555-1337"
          }, {
            author: "Luthor van Ross",
            title: "Night terror on main street",
            isbn: "555-1666"
          }
        ],
        romance: [
          {
            author: "Nigella Mckenzie",
            title: "The Passion of the Heart",
            isbn: "555-9826"
          }, {
            author: "George Hamilton",
            title: "Bonjour Amour",
            isbn: "555-4525"
          }, {
            author: "Carlos Santiago",
            title: "Latin Lovers of Jamaica",
            isbn: "555-8575"
          }
        ],
        war: [
          {
            author: "Chet Bingham",
            title: "War of the Horseraiders of Zankur",
            isbn: "555-1515"
          }
        ]
      };

      expect(removeSensitiveData(portfolio)).toEqual(expected);
    });
  });
})();
