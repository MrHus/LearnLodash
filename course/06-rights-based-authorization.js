(() => {

  // Defines all the rights in the system
  const RIGHT = {
    ADD: "ADD",
    EDIT: "EDIT",
    VIEW: "VIEW",
    DELETE: "DELETE"
  };

  /*
    The isAuthorized function takes two parameters an array of
    userRights, and a requiredRight, and returns whether or not
    the user has clearance.

    The user is only allowed to perform an action if he has explicitly
    been given the right to do so.

    The tricky part is that the user can have multiple RIGHT's, which is
    why the userRights is an array.

    Try to rewrite the following function using lodash:
  */
  function isAuthorized(userRights, requiredRight) {
    for (let i = 0; i < userRights.length; i++) {
      const userRight = userRights[i];

      if (userRight === requiredRight) {
        return true;
      }
    }

    return false;
  }

  describe('Lab 5', () => {
    it('should allow the action if the user has the right', () => {
      expect(isAuthorized([RIGHT.ADD], RIGHT.ADD)).toBe(true);
    });

    it('should not allow the action if the user does not have the right', () => {
      expect(isAuthorized([RIGHT.VIEW], RIGHT.DELETE)).toBe(false);
    });

    it('should allow the action if the user has at least one right that matches', () => {
      expect(isAuthorized([RIGHT.DELETE, RIGHT.VIEW], RIGHT.VIEW)).toBe(true);
    });

    it('should not allow the action if the user does not have any right that matches', () => {
      expect(isAuthorized([RIGHT.DELETE, RIGHT.VIEW], RIGHT.EDIT)).toBe(false);
    });
  });
})();
