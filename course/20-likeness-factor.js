(() => {

  /*
    We are programming a video game based on Fallout terminal hacking
    mini game. It requires us to calculate the likeness factor of to words.

    The likeness factor is the number of characters that match the
    position and value of the two words.

    For example "ape" and "abe" would have a likeness factor
    of 2 because the both share the same first letter and last
    letter.

    Try to rewrite the following function using lodash:
  */
  function likeness(wordA, wordB) {
    return _([wordA, wordB])
      // For each word get the individual letters in an array.
      .map((word) => _.split(word, ''))
      // Now put the first letter of A with the first letter of B etc etc.
      .thru(([lettersA, lettersB]) => _.zip(lettersA, lettersB))
      // Now only keep the the pairs which are equal to each other
      .filter(([letterA, letterB]) => _.isEqual(letterA, letterB))
      // The likeness factor is the size of the collection
      .size();

    /*
    let likenessFactor = 0;

    let largerWord = null;
    let smallerWord = null;

    if (wordA.length > wordB.length) {
      largerWord = wordA;
      smallerWord = wordB;
    } else {
      largerWord = wordB;
      smallerWord = wordA;
    }

    for (let i = 0; i < smallerWord.length; i++) {
      const letterA = largerWord[i];
      const letterB = smallerWord[i];

      if (letterA === letterB) {
        likenessFactor += 1;
      }
    }

    return likenessFactor;
    */
  };

  describe('Lab 20', () => {
    it('should know how to calculate the likeness of two words.', function () {
      expect(likeness('boom', 'boom')).toBe(4);
      expect(likeness('aap', 'oom')).toBe(0);
      expect(likeness('foo', 'goo')).toBe(2);
    });

    it('should not matter if the words are not the same size.', function () {
      expect(likeness('foo', 'foot')).toBe(3);
      expect(likeness('foot', 'foo')).toBe(3);
    });
  });
})();

