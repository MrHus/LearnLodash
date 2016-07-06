(() => {

  /*
    The function 'wordCount' takes a sentence and gives you back a
    wordCount object, where each key is the word and the value is
    the number of times the word was in the sentence.

    Try to rewrite the following function using lodash:
  */
  function wordCount(sentence) {
    const frequency = {};

    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      if (frequency[word] === undefined) {
        frequency[word] = 1;
      } else {
        frequency[word] = frequency[word] + 1;
      }
    }

    return frequency;
  }

  describe('Lab 21', () => {
    it('should know how to count words', () => {
      const expected = {
        'Buffalo': 3,
        'buffalo': 5
      };

      expect(wordCount('Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo')).toEqual(expected);
    });

    it('should know how to count words where everything is unique', () => {
      const expected = {
        'The': 1,
        'quick': 1,
        'brown': 1,
        'fox': 1,
        'jumped': 1,
        'over': 1,
        'the': 1,
        'lazy': 1,
        'dog': 1
      };

      expect(wordCount('The quick brown fox jumped over the lazy dog')).toEqual(expected);
    });
  });
})();
