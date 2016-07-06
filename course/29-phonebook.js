(() => {
  // Defines a list of persons in our system
  const persons = [
    {
      name: "Eric Meijer",
      phone: "06 42 42 42"
    }, {
      name: "Piet Peterse",
      phone: "06 41 41 41"
    }, {
      name: "Maxima Zorreguieta",
      phone: "06 14 14 14"
    }, {
      name: "Barry Barends",
      phone: "06 40 40 40"
    }, {
      name: "Maarten Hus",
      phone: "06 39 39 39"
    }, {
      name: "Nelis Ackerman",
      phone: "06 38 38 38"
    }, {
      name: "Jonas van Helmond",
      phone: "06 88 88 88"
    }, {
      name: "Wim Bontekoe",
      phone: "06 12 12 12"
    }, {
      name: "Nicola Tesla",
      phone: "06 55 44 13"
    }, {
      name: "Nancy Meyer",
      phone: "06 88 88 88"
    }, {
      name: "Paulus de Bozkabouter",
      phone: "06 93 93 93"
    }, {
      name: "Jos Smith",
      phone: "06 27 27 27"
    }
  ];

  /*
    We want to display a phone book view to our users. It should show
    letters and for each letter list the numbers that we have. Letters
    that we have no phone numbers for can be ignored. Of course the
    numbers should be ordered alphabetically.

    Try to rewrite the following function using lodash:
  */
  function createPhoneBook(persons) {
    const sortedPersons = persons.sort(function(personA, personB) {
      const aLastName = getLowerCasedLastName(personA.name);
      const bLastName = getLowerCasedLastName(personB.name);

      if (aLastName === bLastName) {
        return 0;
      } else if (aLastName > bLastName) {
        return 1;
      } else {
        return -1;
      }
    });

    const phoneBook = [];

    const startingLetter = getLowerCasedLastName(sortedPersons[0].name).charAt(0);
    let letterIndex = { letter: startingLetter, persons: [] };

    for (let i = 0; i < sortedPersons.length; i++) {
      const person = sortedPersons[i];

      const currentLetter = getLowerCasedLastName(person.name).charAt(0);

      if (currentLetter === letterIndex.letter) {
        letterIndex.persons.push(person);
      } else {
        phoneBook.push(letterIndex);
        letterIndex = { letter: currentLetter, persons: [person] };
      }

      if (i === sortedPersons.length - 1) {
        phoneBook.push(letterIndex);
      }
    }

    return phoneBook;
  }

  /* ===== DO NOT CHANGE THESE FUNCTIONS ===== */

  function getLowerCasedLastName(name) {
    const words = name.split(" ");
    return words[words.length - 1].toLowerCase();
  }

  describe('Lab 29', () => {
    it('should know how to create a phone book array', () => {
      const expected = [
        {
          "letter": "a",
          "persons": [{
            "name": "Nelis Ackerman",
            "phone": "06 38 38 38"
          }]
        }, {
          "letter": "b",
          "persons": [{
            "name": "Barry Barends",
            "phone": "06 40 40 40"
          }, {
            "name": "Wim Bontekoe",
            "phone": "06 12 12 12"
          }, {
            "name": "Paulus de Bozkabouter",
            "phone": "06 93 93 93"
          }]
        }, {
          "letter": "h",
          "persons": [{
            "name": "Jonas van Helmond",
            "phone": "06 88 88 88"
          }, {
            "name": "Maarten Hus",
            "phone": "06 39 39 39"
          }]
        }, {
          "letter": "m",
          "persons": [{
            "name": "Eric Meijer",
            "phone": "06 42 42 42"
          }, {
            "name": "Nancy Meyer",
            "phone": "06 88 88 88"
          }]
        }, {
          "letter": "p",
          "persons": [{
            "name": "Piet Peterse",
            "phone": "06 41 41 41"
          }]
        }, {
          "letter": "s",
          "persons": [{
            "name": "Jos Smith",
            "phone": "06 27 27 27"
          }]
        }, {
          "letter": "t",
          "persons": [{
            "name": "Nicola Tesla",
            "phone": "06 55 44 13"
          }]
        }, {
          "letter": "z",
          "persons": [{
            "name": "Maxima Zorreguieta",
            "phone": "06 14 14 14"
          }]
        }
      ];

      expect(createPhoneBook(persons)).toEqual(expected);
    });
  });
})();
