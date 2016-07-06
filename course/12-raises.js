(() => {

  const TITLE = {
    SENIOR: "SENIOR",
    MEDIOR: "MEDIOR",
    JUNIOR: "JUNIOR"
  };

  const RAISE = {
    SENIOR: 1.1,
    MEDIOR: 1.2,
    JUNIOR: 1.5
  };

  const MAX_WAGE = {
    SENIOR: 5000,
    MEDIOR: 4000,
    JUNIOR: 3000
  };

  const MIN_WAGE = {
    SENIOR: 4000,
    MEDIOR: 3000,
    JUNIOR: 2000
  };

  // Defines a list of employees in our system
  const employees = [
    {
      name: "Eric Meijer",
      wage: 5000,
      title: TITLE.JUNIOR
    }, {
      name: "Piet Peterse",
      wage: 4900,
      title: TITLE.SENIOR
    }, {
      name: "Barry Barends",
      wage: 3000,
      title: TITLE.MEDIOR
    },
  ];

  /*
    At the end of the year it is time to give all the employees raises.
    The raise is based on the employees' title, an employee cannot earn
    more than the maximum wage, and less than the minimum wage for his
    title.

    Try to rewrite the following function using lodash:
  */
  function giveRaises(employees) {
    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];

      employee.wage = employee.wage * RAISE[employee.title];

      const minWage = MIN_WAGE[employee.title];
      const maxWage = MAX_WAGE[employee.title];

      if (employee.wage > maxWage) {
        employee.wage = maxWage;
      } else if (employee.wage < minWage) {
        employee.wage = minWage;
      }
    }

    return employees;
  }

  describe('Lab 14', () => {
    it('should know how to give raises', () => {
      const expected = [
        {
          name: "Eric Meijer",
          wage: 3000,
          title: TITLE.JUNIOR
        }, {
          name: "Piet Peterse",
          wage: 5000,
          title: TITLE.SENIOR
        }, {
          name: "Barry Barends",
          wage: 3600,
          title: TITLE.MEDIOR
        },
      ];

      expect(giveRaises(employees)).toEqual(expected);
    });
  });
})();
