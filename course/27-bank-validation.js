(() => {

  /*
    When banks give out a loan to a person they want to do a full
    checkup on a person. This is what the isEligibleForLoan function
    does.

    There is one caveat however, the bank cannot always get all the
    information. This means that a lot of fields have to be 'null'
    checked, and 'null' checks can be so tedious!

    Try to rewrite the following function using lodash:
  */
  function isEligibleForLoan(person) {
    if (person.age < 18) {
      return false;
    }

    if (person.company === undefined || person.company.wage === undefined || person.company.wage < 1500) {
      return false
    }

    if (person.company.owner && person.company.owner.criminalPast) {
      if (person.company.owner.criminalPast === true) {
        return false;
      }
    }

    if (person.home && person.home.mortgage) {
      if (person.home.mortgage.hasMissedPayment && person.home.mortgage.hasMissedPayment === true) {
        return false;
      }

      if (person.home.mortgage.remaining === undefined || person.home.mortgage.remaining > 1000000) {
        return false;
      }
    }

    return true;
  }

  describe('Lab 12', () => {
    it('should accept a valid person', () => {
      const person = {
        name: "Bobby Droptables",
        age: 18,
        company: {
          name: "42 BV",
          wage: 1500,
          title: "developer",
          owner: {
            name: "Eric Meijer",
            criminalPast: false
          }
        },
        home: {
          mortgage: {
            remaining: 1000000,
            original: 2000000,
            hasMissedPayment: false
          },
          size: "modest"
        }
      };

      expect(isEligibleForLoan(person)).toBe(true);
    });

    it('should deny a person if he is a minor', () => {
      const person = {
        name: "Jimmy Cricket",
        age: 17,
        company: {
          name: "42 BV",
          wage: 1500,
          title: "developer",
          owner: {
            name: "Eric Meijer",
            criminalPast: false
          }
        },
        home: {
          mortgage: {
            remaining: 1000000,
            original: 2000000,
            hasMissedPayment: false
          },
          size: "modest"
        }
      };

      expect(isEligibleForLoan(person)).toBe(false);
    });

    it('should deny a person if he has no job', () => {
      const person = {
        name: "Bobby Droptables",
        age: 18,
        home: {
          mortgage: {
            remaining: 1000000,
            original: 2000000,
            hasMissedPayment: false
          },
          size: "modest"
        }
      };

      expect(isEligibleForLoan(person)).toBe(false);
    });

    it('should deny a person if his wage is unknown', () => {
      const person = {
        name: "Bobby Droptables",
        age: 18,
        company: {
          name: "42 BV",
          title: "developer",
          owner: {
            name: "Eric Meijer",
            criminalPast: false,
          }
        },
        home: {
          mortgage: {
            remaining: 1000000,
            original: 2000000,
            hasMissedPayment: false
          },
          size: "modest"
        }
      };

      expect(isEligibleForLoan(person)).toBe(false);
    });

    it('should deny a person if his wage is to low', () => {
      const person = {
        name: "Bobby Droptables",
        age: 18,
         company: {
          name: "42 BV",
          wage: 1499,
          title: "developer",
          owner: {
            name: "Eric Meijer",
            criminalPast: false
          }
        },
        home: {
          mortgage: {
            remaining: 1000000,
            original: 2000000,
            hasMissedPayment: false
          },
          size: "modest"
        }
      };

      expect(isEligibleForLoan(person)).toBe(false);
    });

    it('should accept a person if he has a job but no information about the owner is available', () => {
      const person = {
        name: "Bobby Droptables",
        age: 18,
         company: {
          name: "42 BV",
          wage: 1500,
          title: "developer"
        },
        home: {
          mortgage: {
            remaining: 1000000,
            original: 2000000,
            hasMissedPayment: false
          },
          size: "modest"
        }
      };

      expect(isEligibleForLoan(person)).toBe(true);
    });

    it('should accept a person if he has a job but we do not know if the owner has a criminalPast', () => {
      const person = {
        name: "Bobby Droptables",
        age: 18,
         company: {
          name: "42 BV",
          wage: 1500,
          title: "developer",
          owner: {
            name: "Eric Meijer"
          }
        },
        home: {
          mortgage: {
            remaining: 1000000,
            original: 2000000,
            hasMissedPayment: false
          },
          size: "modest"
        }
      };

      expect(isEligibleForLoan(person)).toBe(true);
    });

    it('should deny a person if his boss has a criminal past', () => {
      const person = {
        name: "Bobby Droptables",
        age: 18,
         company: {
          name: "42 BV",
          wage: 1500,
          title: "developer",
          owner: {
            name: "Eric Meijer",
            criminalPast: true
          }
        },
        home: {
          mortgage: {
            remaining: 1000000,
            original: 2000000,
            hasMissedPayment: false
          },
          size: "modest"
        }
      };

      expect(isEligibleForLoan(person)).toBe(false);
    });

    it('should accept a person if he has no home yet but does have a job', () => {
      const person = {
        name: "Bobby Droptables",
        age: 18,
        company: {
          name: "42 BV",
          wage: 1500,
          title: "developer",
          owner: {
            name: "Eric Meijer",
            criminalPast: false
          }
        }
      };

      expect(isEligibleForLoan(person)).toBe(true);
    });

    it('should accept a person if he has a home but no mortgage', () => {
      const person = {
        name: "Bobby Droptables",
        age: 18,
        company: {
          name: "42 BV",
          wage: 1500,
          title: "developer",
          owner: {
            name: "Eric Meijer",
            criminalPast: false
          }
        },
        home: {
          size: "modest"
        }
      };

      expect(isEligibleForLoan(person)).toBe(true);
    });

    it('should deny a person if he has a home a mortgage but has missed a payment', () => {
      const person = {
        name: "Bobby Droptables",
        age: 18,
        company: {
          name: "42 BV",
          wage: 1500,
          title: "developer",
          owner: {
            name: "Eric Meijer",
            criminalPast: false
          }
        },
        home: {
          mortgage: {
            remaining: 1000000,
            original: 2000000,
            hasMissedPayment: true
          },
          size: "modest"
        }
      };

      expect(isEligibleForLoan(person)).toBe(false);
    });

    it('should accept a person if he has a home a mortgage but is unknown if he has missed a payment', () => {
      const person = {
        name: "Bobby Droptables",
        age: 18,
        company: {
          name: "42 BV",
          wage: 1500,
          title: "developer",
          owner: {
            name: "Eric Meijer",
            criminalPast: false
          }
        },
        home: {
          mortgage: {
            remaining: 1000000,
            original: 2000000
          },
          size: "modest"
        }
      };

      expect(isEligibleForLoan(person)).toBe(true);
    });

    it('should deny a person if he has a home a mortgage but a very high remaining mortgage', () => {
      const person = {
        name: "Bobby Droptables",
        age: 18,
        company: {
          name: "42 BV",
          wage: 1500,
          title: "developer",
          owner: {
            name: "Eric Meijer",
            criminalPast: false
          }
        },
        home: {
          mortgage: {
            remaining: 1000001,
            original: 2000000,
            hasMissedPayment: false
          },
          size: "modest"
        }
      };

      expect(isEligibleForLoan(person)).toBe(false);
    });

    it('should deny a person if he has a home and a mortgage but no information is known about the remaining amount', () => {
      const person = {
        name: "Bobby Droptables",
        age: 18,
        company: {
          name: "42 BV",
          wage: 1500,
          title: "developer",
          owner: {
            name: "Eric Meijer",
            criminalPast: false
          }
        },
        home: {
          mortgage: {
            original: 2000000,
            hasMissedPayment: false
          },
          size: "modest"
        }
      };

      expect(isEligibleForLoan(person)).toBe(false);
    });
  });
})();
