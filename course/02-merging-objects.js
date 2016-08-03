(() => {

  /*
    Sometimes you have an update modal, in which the user of your
    application can change some fields but not all. When you close
    the modal window you want to take all changes and apply it to
    the old model and only overwrite the new keys.

    This is what the mergeCar function does.

    Try to rewrite the following function using lodash:
  */
  function mergeCar(modalCar, car) {
    return _.merge(car, modalCar);

    /*
    function mergeObject(destination, target) {
      for (let key in target) {
        if (target.hasOwnProperty(key)) {
          const targetValue = target[key];

          if (typeof targetValue === 'object') {
            const destinationValue = destination[key];

            if (typeof destinationValue === 'object') {
              destination[key] = mergeObject(destinationValue, targetValue);
            } else {
              destination[key] = mergeObject({}, targetValue);
            }
          } else {
            destination[key] = targetValue;
          }
        }
      }

      return destination;
    }

    let newCar = {};
    newCar = mergeObject(newCar, car);
    newCar = mergeObject(newCar, modalCar);
    return newCar;
    */
  }

  describe('Lab 02', () => {
    it('should know how to merge two car models', () => {
      const modalCar = {
        owner: {
          name: "Sander Benschop",
          address: {
            street: "Banaangeel",
            number: 66,
            city: "Zoetermeer",
            zipcode: "8181 OL"
          }
        }
      };

      const car = {
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
      };

      const expected = {
        plate: "PH-HL-16",
        brand: "Peugeot",
        make: "106",
        owner: {
          name: "Sander Benschop",
          worksAt: "42 BV",
          address: {
            street: "Banaangeel",
            number: 66,
            city: "Zoetermeer",
            zipcode: "8181 OL"
          }
        }
      };

      expect(mergeCar(modalCar, car)).toEqual(expected);
    });
  });
})();
