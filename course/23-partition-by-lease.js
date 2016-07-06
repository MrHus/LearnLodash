(() => {

  // Defines a list of persons in our system
  const persons = [
    {
      name: "Eric Meijer",
      lease: true,
    }, {
      name: "Piet Peterse",
      lease: false,
    }, {
      name: "Barry Barends",
      lease: true,
    }, {
      name: "Maarten Hus",
      lease: false
    }
  ];

  /*
    The partitionByLease function takes a person array of person objects
    and partitions them by if they have a lease car or not.

    Try to rewrite the following function using lodash:
  */
  function partitionByLease(persons) {
    const hasLease = [];
    const noLease = [];

    for (let i = 0; i < persons.length; i++) {
      const person = persons[i];

      if (person.lease) {
        hasLease.push(person);
      } else {
        noLease.push(person);
      }
    }

    return { hasLease, noLease };
  }

  describe('Lab 23', () => {
    it('should know how to partition by if the user has a lease car', () => {
      expect(partitionByLease(persons)).toEqual({
        hasLease: [
          {
            name: "Eric Meijer",
            lease: true,
          },  {
            name: "Barry Barends",
            lease: true,
          }
        ],
        noLease: [
          {
            name: "Piet Peterse",
            lease: false,
          }, {
            name: "Maarten Hus",
            lease: false
          }
        ]
      });
    });
  });
})();
