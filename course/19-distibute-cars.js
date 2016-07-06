(() => {

  // Defines a list of the cars in our system
  const cars = [
    {
      plate: "PH-HL-16",
      brand: "Peugeot",
      make: "106"
    }, {
      plate: "A-42-Q?",
      brand: "Tesla",
      make: "Roadster"
    }, {
      plate: "R2-D2-BB8",
      brand: "Mercedes",
      make: "CLA"
    }, {
      plate: "TR-IC-99",
      brand: "Porsche",
      make: "911"
    }, {
      plate: "ZO-141-A",
      brand: "Renault",
      make: "Megane"
    }
  ];

  /*
    We have a view which has two columns, on on the left of the screen
    and one column on the right of the screen. Want our cars to be
    distributed amongst the two columns.

    This is what the 'distributeCars' function does. It returns an object
    with the keys 'left' and 'right' which point to arrays of cars.

    Try to rewrite the following function using lodash:
  */
  function distributeCars(cars) {
    const splitted = { left: [], right: []};

    const middle = cars.length / 2;

    for(let i = 0; i < cars.length; i++) {
      const car = cars[i];

      if (i < middle) {
        splitted.left.push(car);
      } else {
        splitted.right.push(car);
      }
    }

    return splitted;
  }

  describe('Lab 19', () => {
    it('should know how to distribute the cars', () => {
      expect(distributeCars(cars)).toEqual({
        left: [
          {
            plate: "PH-HL-16",
            brand: "Peugeot",
            make: "106"
          }, {
            plate: "A-42-Q?",
            brand: "Tesla",
            make: "Roadster"
          }, {
            plate: "R2-D2-BB8",
            brand: "Mercedes",
            make: "CLA"
          }
        ],
        right: [
          {
            plate: "TR-IC-99",
            brand: "Porsche",
            make: "911"
          }, {
            plate: "ZO-141-A",
            brand: "Renault",
            make: "Megane"
          }
        ]
      });
    });
  });
})();
