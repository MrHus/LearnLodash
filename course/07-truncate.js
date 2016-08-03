(() => {

  /*
    The truncate function makes sure a sentence is never longer than
    a particular 'maxlength'. If the sentence is longer it shortens
    the sentence and appends the 'omission' string, the resulting
    string is always the size of 'maxlength';

    For example:

    truncate('This is a way longer string', ',,,', 5) -> "Th,,,"

    See if you can rewrite this function to use a lodash utility instead.
  */
  function truncate(sentence, omission='...', maxlength=12) {
    return _.truncate(sentence, { omission, length: maxlength });

    /*
    if (sentence.length > maxlength) {
      return sentence.substring(0, maxlength - omission.length) + omission;
    } else {
      return sentence;
    }
    */
  }

  describe('Lab 07', () => {
    it('should not truncate sentences which are short enough', () => {
      expect(truncate('String')).toBe("String");
      expect(truncate('Short string')).toBe("Short string");
    });

    it('should truncate sentences which are to long', () => {
      expect(truncate('Just to longg')).toBe("Just to l...");
    });

    it('should truncate with an omission if it is given', () => {
      expect(truncate('This is a way longer string', ',,,')).toBe("This is a,,,");
    });

    it('should truncate with an omission and maxlength if they are given', () => {
      expect(truncate('This is a way longer string', ',,,', 5)).toBe("Th,,,");
    });
  });
})();
