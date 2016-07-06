(() => {
  // Some handy tips for when the application starts up
  const tips = [
    'If you want to pickup something from the ground use your hands not your feet.',
    'Do not forget to bring a towel.',
    'By pressing spacebar on your keyboard you can add space between to words.',
    'Do not drink, drive and code at the same time.',
    'You can disable these tips by tipping the tip writer.',
    'Did you know startup tips are read by 0.01 of the people that use the software?',
    'How is that last one a tip? That is called a question Barry!',
    'Well you are writing statements and those are not tips as well Leon!',
    'Barry get your head out of your ass! Or I swear to god!',
    'You and me in the parking lot in five minutes, you better show up Leon!',
    'Did you know tip writing can get people seriously injured?'
  ];

  /*
    We have an application which shows three random tips on the startup
    of the application.

    The function 'getThreeRandomTips' takes an array of strings, which
    represents the tips, and randomly selects three. The selected tips
    should all be unique.

    Try to rewrite the following function using lodash:
  */
  function getThreeRandomTips(tips) {
    const selected = [];

    // Copy tips since we are going to manipulate it.
    let tipsCopy = tips.slice();

    while(selected.length !== 3) {
      // Generate a random number between 0 and the length of tipsCopy.
      const index = Math.floor(Math.random() * tipsCopy.length);

      selected.push(tipsCopy[index]);

      // Remove selected tip from tipsCopy to prevent duplicate tips.
      tipsCopy.splice(index, 1);
    }

    return selected;
  }

  describe('Lab 03', () => {
    it('should know how to select three random tips', () => {
      const selected = getThreeRandomTips(tips);
      expect(selected.length).toBe(3);

      const [tip1, tip2, tip3] = selected;

      expect(tips).toContain(tip1);
      expect(tips).toContain(tip2);
      expect(tips).toContain(tip3);

      expect(tip1 === tip2).toBe(false);
      expect(tip1 === tip3).toBe(false);
      expect(tip2 === tip3).toBe(false);
    });
  });
})();
