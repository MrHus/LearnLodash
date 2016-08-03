(() => {

  // Defines a list of persons in our system
  const persons = [
    {
      name: "Eric Meijer",
      wage: 5000
    }, {
      name: "Piet Peterse",
      wage: 4600
    }, {
      name: "Barry Barends",
      wage: 3700
    }, {
      name: "Maarten Hus",
      wage: 3500
    }
  ];

  /*
    The averageWage function takes a person array of person objects
    and calculates the average wage of the persons.

    Try to rewrite the following function using lodash:
  */
  function averageWage(persons) {
    return _.meanBy(persons, 'wage');

    /*
    let total = 0;

    for(let i = 0; i < persons.length; i++) {
      const person = persons[i];

      total += person.wage;
    }

    return total / persons.length;
    */
  }

  describe('Lab 11', () => {
    it('should know how to calculate the average wage', () => {
      expect(averageWage(persons)).toBe(4200);
    });
  });
})();
