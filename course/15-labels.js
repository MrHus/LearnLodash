(() => {
  // Some jira issues with labels
  const issues = [
    {
      id: "MAD-1",
      name: "Fix login",
      labels: ['bug', 'front-end', 'critical']
    }, {
      id: "MAD-2",
      name: "Add history",
      labels: ['feature', 'back-end', 'database']
    }, {
      id: "MAD-3",
      name: "Add pagination to list",
      labels: ['improvement', 'front-end', 'back-end', 'UX']
    }, {
      id: "MAD-4",
      name: "Cannot send emails",
      labels: ['bug', 'back-end', 'critical', 'imap', 'operations']
    }, {
      id: "MAD-5",
      name: "Sonar reports not working",
      labels: ['operations', 'sonar']
    }, {
      id: "MAD-6",
      name: "Style delete buttons",
      labels: ['front-end', 'UI']
    }
  ];

  /*
    We want to get all unique labels that are in the all issues in Jira.
    The problem is that the labels are stored in each issue separately
    so we need to combine them somehow.

    Try to rewrite the following function using lodash:
  */
  function getLabels(issues) {
    // The keys will be the labels and the values to.
    const labelStore = {};

    // Loop through all issues and add each label to the label store.
    for (let i = 0; i < issues.length; i++) {
      const issue = issues[i];

      for (let j = 0; j < issue.labels.length; j++) {
        const label = issue.labels[j];

        labelStore[label] = label;
      }
    }

    const labels = [];

    for (let key in labelStore) {
      if (labelStore.hasOwnProperty(key)) {
        labels.push(labelStore[key]);
      }
    }

    return labels;
  }

  describe('Lab 28', () => {
    it('should know how to get all unique labels from the issues.', () => {
      const expected = [
        'bug',
        'front-end',
        'critical',
        'feature',
        'back-end',
        'database',
        'improvement',
        'UX',
        'imap',
        'operations',
        'sonar',
        'UI'
      ];

      expect(getLabels(issues)).toEqual(expected);
    });
  });
})();
