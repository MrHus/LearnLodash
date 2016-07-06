(() => {

  // Defines a list of the cars in our system
  const cars = [
    {
      plate: "PH-HL-16",
      owner: "Maarten Hus"
    }, {
      plate: "A-42-Q?",
      owner: "Eric Meijer"
    }, {
      plate: "R2-D2-BB8",
      owner: "Barry Barends"
    }, {
      plate: "TR-IC-99",
      owner: "Piet Peterse"
    }
  ];

  // Defines a list of persons in our system
  const persons = [
    {
      name: "Eric Meijer",
      age: 56
    }, {
      name: "Piet Peterse",
      age: 51
    }, {
      name: "Barry Barends",
      age: 42
    }, {
      name: "Maarten Hus",
      age: 27
    }
  ];

  /*
    We have an API call which gives us a bunch of cars, and another
    API call which gives us a bunch of persons.

    The name of 'owner' of the car the name of the person.

    The joinCarsAndPersons joins the owner on the person name.

    Try to rewrite the following function using lodash:
  */
  function joinCarsAndPersons(cars, persons) {
    const joined = [];

    for(let i = 0; i < cars.length; i++) {
      const car = cars[i];

      for(let j = 0; j < persons.length; j++) {
        const person = persons[j];

        if (car.owner === person.name) {
          joined.push({ car, person });
          break;
        }
      }
    }

    return joined;
  }

  describe('Lab 14', () => {
    it('should know how to join the cars and persons', () => {
      expect(joinCarsAndPersons(cars, persons)).toEqual([
        {
          car: {
            plate: "PH-HL-16",
            owner: "Maarten Hus"
          },
          person: {
            name: "Maarten Hus",
            age: 27
          }
        }, {
          car: {
            plate: "A-42-Q?",
            owner: "Eric Meijer"
          },
          person: {
            name: "Eric Meijer",
            age: 56
          }
        }, {
          car: {
            plate: "R2-D2-BB8",
            owner: "Barry Barends"
          },
          person: {
            name: "Barry Barends",
            age: 42
          }
        }, {
          car: {
            plate: "TR-IC-99",
            owner: "Piet Peterse",
          },
          person: {
            name: "Piet Peterse",
            age: 51
          }
        }
      ]);
    });
  });
})();
