(() => {
  // Some towel data.
  const towels = [
    {
      id: 1,
      name: "Luxuria Gigantica",
      quality: 5
    }, {
      id: 2,
      name: "Magnificus Dryicus",
      quality: 4
    }, {
      id: 3,
      name: "Horriblius Schuurpapiricus",
      quality: 0
    }, {
      id: 4,
      name: "Towlia Standardius",
      quality: 3
    }, {
      id: 5,
      name: "Skinnius Redicus",
      quality: 2
    }
  ];

  /*
    We have a modal in our application which allows us to delete items
    from a collection. The modal then returns the new collection to us
    which contains the elements that were not deleted.

    We need to inform our back-end which items were deleted, the back-end
    only needs an array of id's that need to be deleted.

    The function 'getDeletedIds' takes the full collection and the
    partial collection and returns the id's of the items that were
    deleted.

    Try to rewrite the following function using lodash:
  */
  function getDeletedIds(full, partial) {
    /*
      Solution A:

      _.difference does not work with arrays of objects so covert them
      both to arrays of id's which are numbers.
    */
    const fullIds = _.map(full, 'id');
    const partialIds = _.map(partial, 'id');

    return _.difference(fullIds, partialIds);

    /*
      Solution B:

      We could use 'differenceBy' to compare two objects based on the
      id. But then we would end up with the full array, so then we
      would have to do a .map just to get the id's.
    */
    return _(full)
      .differenceBy(partial, 'id')
      .map('id')
      .value();

    /*
    const deleted = [];

    for (let i = 0; i < full.length; i++) {
      const fullItem = full[i];
      let found = false;

      for (let j = 0; j < partial.length; j++) {
        const partialItem = partial[j];

        if (fullItem.id === partialItem.id) {
          found = true;
          break;
        }
      }

      if (found === false) {
        deleted.push(fullItem.id);
      }
    }

    return deleted;
    */
  }

  describe('Lab 09', () => {
    it('should know how to get the ids of the towels that were deleted', () => {
      const expected = [2, 4];

      const remainingTowels = [
        {
          id: 1,
          name: "Luxuria Gigantica",
          quality: 5
        }, {
          id: 3,
          name: "Horriblius Schuurpapiricus",
          quality: 0
        }, {
          id: 5,
          name: "Skinnius Redicus",
          quality: 2
        }
      ];

      expect(getDeletedIds(towels, remainingTowels)).toEqual(expected);
    });
  });
})();
