(() => {

  // Defines all the roles in the system
  const ROLE = {
    ADMIN: 3,
    COORDINATOR: 2,
    USER: 1
  };

  /*
    The isAuthorized function takes two parameters an array of
    userRoles, and a requiredRole, and returns whether or not
    the user has clearance.

    The roles work like this, the ADMIN role can do anything.
    The COORDINATOR role can do all COORDINATOR and USER tasks.
    The USER role can only do USER actions.

    The tricky part is that the user can have multiple ROLE's, which is
    why the userRoles is an array.

    Try to rewrite the following function using lodash:
  */
  function isAuthorized(userRoles, requiredRole) {
    let maxUserRole = 0;

    // determine the highest role level the user has
    for (let i = 0; i < userRoles.length; i++) {
      const userRole = userRoles[i];
      if (userRole > maxUserRole) {
        maxUserRole = userRole;
      }
    }

    return maxUserRole >= requiredRole;
  }

  describe('Lab 4', () => {
    it('should give the user access if the user has a role', () => {
      expect(isAuthorized([ROLE.ADMIN], ROLE.ADMIN)).toBe(true);
    });

    it('should not give the user access if the user does not have the role', () => {
      expect(isAuthorized([ROLE.USER], ROLE.ADMIN)).toBe(false);
    });

    it('should give the user access if he has one or more roles that have the clearance', () => {
      expect(isAuthorized([ROLE.USER, ROLE.ADMIN], ROLE.COORDINATOR)).toBe(true);
    });

    it('should not give the user access if he has one or more roles that do not have the clearance', () => {
      expect(isAuthorized([ROLE.COORDINATOR, ROLE.USER], ROLE.ADMIN)).toBe(false);
    });
  });
})();
