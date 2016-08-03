(() => {

  // Defines a list of the cars in our system
  const cars = [
    {
      plate: "PH-HL-16",
      brand: "Peugeot",
      make: "106",
      owner: {
        name: "Maarten Hus",
        worksAt: "42 BV",
        address: {
          street: "Langestraat",
          number: 42,
          city: "Berkel en Rodenrijs",
          zipcode: "2555 CL"
        }
      }
    }, {
      plate: "A-42-Q?",
      brand: "Tesla",
      make: "Roadster",
      owner: {
        name: "Eric Meijer",
        worksAt: "42 BV",
        address: {
          street: "Koraalrood",
          number: 33,
          city: "Zoetermeer",
          zipcode: "4242 AA"
        }
      }
    }, {
      plate: "R2-D2-BB8",
      brand: "Mercedes",
      make: "CLA",
      owner: {
        name: "Barry Barends",
        worksAt: "KPN",
        address: {
          street: "Gansstraat",
          number: 11,
          city: "Leiden",
          zipcode: "9931 VE"
        }
      }
    }, {
      plate: "TR-IC-99",
      brand: "Porsche",
      make: "911",
      owner: {
        name: "Piet Peterse",
        worksAt: "Essent",
        address: {
          street: "Veldkant",
          number: 7,
          city: "Kontich",
          zipcode: "B-2550"
        }
      }
    }
  ];

  /*
    The platesForEmployeesAt function takes a string which represents
    the company and returns all license plates for employees of that company.

    Try to rewrite the following function using lodash:
  */
  function platesForEmployeesAt(cars, company) {
    return _(cars)
      .filter((car) => car.owner.worksAt === company)
      // Shorthand to only get one property from an object.
      .map('plate')
      .value();

    /*
    let plates = [];

    for (let i = 0; i < cars.length; i++) {
      const car = cars[i];

      if (car.owner.worksAt === company) {
        plates.push(car.plate);
      }
    }

    return plates;
    */
  }

  describe('Lab 13', () => {
    it('should know how to get all license plates for "42 BV" employees', () => {
      expect(platesForEmployeesAt(cars, '42 BV')).toEqual(['PH-HL-16', 'A-42-Q?']);
    });

    it('should know how to get all license plates for "Essent" employees', () => {
      expect(platesForEmployeesAt(cars, 'Essent')).toEqual(['TR-IC-99']);
    });

    it('should return an empty array if the company does not exist', () => {
      expect(platesForEmployeesAt(cars, 'ANWB')).toEqual([]);
    });
  });
})();
