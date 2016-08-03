(() => {

  // Defines a list of employees in our system
  const employees = [
    {
      name: "Eric Meijer",
      wage: 5000
    }, {
      name: "Piet Peterse",
      wage: 4000
    }, {
      name: "Barry Barends",
      wage: 3000
    },
  ];

  /*
    At the end of the year it is time to process each employee by giving
    them raises, cars, hrTalks, Christmas dinners and bonuses.

    Try to rewrite the following function using lodash:
  */
  function processEmployees(employees) {
    const processEmployee = _.flow([giveRaise, giveCar, haveHrTalk, christmasDinner, giveBonus]);

    return _.map(employees, processEmployee);

    /*
    for (let i = 0; i < employees.length; i++) {
      let employee = employees[i];

      employee = giveRaise(employee);
      employee = giveCar(employee);
      employee = haveHrTalk(employee);
      employee = christmasDinner(employee);
      employee = giveBonus(employee);
    }

    return employees;
    */
  }

  /* ===== DO NOT CHANGE THESE FUNCTIONS ===== */

  function giveRaise(employee) {
    employee.wage = employee.wage += 500;

    return employee;
  }

  function giveCar(employee) {
    employee.car = {
      brand: "Tesla",
      model: "S"
    };

    return employee;
  }

  function haveHrTalk(employee) {
    employee.happy = true;

    return employee;
  }

  function christmasDinner(employee) {
    employee.stomach = 'full';

    return employee;
  }

  function giveBonus(employee) {
    employee.bonus = 1042;
    return employee;
  }

  describe('Lab 25', () => {
    it('should know how to process the employees', () => {
      const expected = [
        {
          name: "Eric Meijer",
          car: {
            brand: "Tesla",
            model: "S"
          },
          happy: true,
          stomach: "full",
          bonus: 1042,
          wage: 5500
        }, {
          name: "Piet Peterse",
          car: {
            brand: "Tesla",
            model: "S"
          },
          happy: true,
          stomach: "full",
          bonus: 1042,
          wage: 4500
        }, {
          name: "Barry Barends",
          car: {
            brand: "Tesla",
            model: "S"
          },
          happy: true,
          stomach: "full",
          bonus: 1042,
          wage: 3500
        },
      ];

      expect(processEmployees(employees)).toEqual(expected);
    });
  });
})();
