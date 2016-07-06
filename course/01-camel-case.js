(() => {

  /*
    This is a camelCase function, its job is to camelCase a sentence.

    So 'hello world' should become 'helloWorld'.

    See if you can rewrite this function to use a lodash utility instead.
   */
  function camelCase(sentence) {
    const words = sentence.split(/\s+/);

    let camelCased = '';

    for (let i = 0; i < words.length; i++) {
      let word = words[i];

      if (i > 0) {
       const firstLetter = word.charAt(0).toUpperCase();
       word = firstLetter + word.substring(1);
      }

      camelCased += word;
    }

    return camelCased;
  }

  describe('Lab 01', () => {
    it('should know how to camel case sentences', () => {
      expect(camelCase('hello world')).toBe("helloWorld");
    });

    it('should ignore single words', () => {
      expect(camelCase('hello')).toBe("hello");
    });
  });
})();
