(() => {
  /*
    Sometimes we get data in a form which is not useful for our UI
    purposes.

    In this case the back-end sends back an array of objects representing
    weeks in a students roster. It often happens that a roster is the
    same for consecutive weeks, in this case we want to compress multiple
    weeks into one.

    That is what this function does, if the week has the same courses
    as the next week it compresses the weeks. It also builds up a title
    to display for the UI.

    Try to rewrite the following function using lodash:
  */
  function compressRoster(roster) {
    const compressedRoster = [];

    // The first weekGroup always starts at the first week in the roster
    let weekGroup = roster[0];

    for (let i = 1; i < roster.length; i++) {
      const week = roster[i];

      // If not equal a new group should start
      if (arrayIsEqual(weekGroup.courses, week.courses) === false) {
        const lastWeek = roster[i - 1].week;

        if (lastWeek !== weekGroup.week) {
          weekGroup.week = weekGroup.week + " / " + roster[i - 1].week;
        }

        compressedRoster.push(weekGroup);

        weekGroup = week;
      }

      // If last iteration always add the weekGroup
      if (i === roster.length - 1) {
        /*
          Only alter the week if it is part of a weekGroup, otherwise
          it is just a single week.
        */
        if (week.week !== weekGroup.week) {
          weekGroup.week = weekGroup.week + " / " + week.week;
        }

        compressedRoster.push(weekGroup);
      }
    }

    return compressedRoster;

     // Tip: you don't need this function in lodash!
    function arrayIsEqual(a, b) {
      if (a.length !== b.length) {
        return false;
      } else {
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
      }

      return true;
    }
  }

  describe('Lab 19', () => {
    it('should know how to compress a roster were all weeks are the same', () => {
      // Defines a roster for a university divided in periods.
      const roster = [
        {
          week: "1",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "2",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "3",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "4",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "5",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "6",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "7",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "8",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "9",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "10",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }
      ];

      const expected = [
        {
          week: "1 / 10",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }
      ];

      expect(compressRoster(roster)).toEqual(expected);
    });

    it('should know how to compress a roster were the last week is part of a group', () => {
      // Defines a roster for a university divided in periods.
      const roster = [
        {
          week: "1",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "2",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "3",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "4",
          courses: ["English", "Astronomy"]
        }, {
          week: "5",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "6",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "7",
          courses: ["English", "Astronomy"]
        }, {
          week: "8",
          courses: ["German", "Mathematics", "Robotics"]
        }, {
          week: "9",
          courses: ["German", "Mathematics", "Robotics"]
        }, {
          week: "10",
          courses: ["German", "Mathematics", "Robotics"]
        }
      ];

      const expected = [
        {
          week: "1 / 3",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "4",
          courses: ["English", "Astronomy"]
        }, {
          week: "5 / 6",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "7",
          courses: ["English", "Astronomy"]
        }, {
          week: "8 / 10",
          courses: ["German", "Mathematics", "Robotics"]
        }
      ];

      expect(compressRoster(roster)).toEqual(expected);
    });

    it('should know how to compress a roster were the last week is unique', () => {
      // Defines a roster for a university divided in periods.
      const roster = [
        {
          week: "1",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "2",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "3",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "4",
          courses: ["English", "Astronomy"]
        }, {
          week: "5",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "6",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "7",
          courses: ["English", "Astronomy"]
        }, {
          week: "8",
          courses: ["German", "Mathematics", "Robotics"]
        }, {
          week: "9",
          courses: ["German", "Mathematics", "Robotics"]
        }, {
          week: "10",
          courses: ["Robotics", "French"]
        }
      ];

      const expected = [
        {
          week: "1 / 3",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "4",
          courses: ["English", "Astronomy"]
        }, {
          week: "5 / 6",
          courses: ["French", "Mathematics", "Psychology", "Economy"]
        }, {
          week: "7",
          courses: ["English", "Astronomy"]
        }, {
          week: "8 / 9",
          courses: ["German", "Mathematics", "Robotics"]
        }, {
          week: "10",
          courses: ["Robotics", "French"]
        }
      ];

      expect(compressRoster(roster)).toEqual(expected);
    });
  });
})();
