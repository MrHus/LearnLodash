# Learn Lodash!

This course teaches you lodash by rewriting imperative code to functional
code using lodash.

Under the 'course' folder you will find many labs, each lab has some
imperative code which needs to be rewritten, each lab also has unit
tests which currently succeed. Your job is to make sure the tests
keep passing whilst rewriting the code to use lodash. 

Note that you NEVER have to change a unit test! You must solve the lab
by not touching the test at all!

# Prerequisites

Make sure you have [Node.js](http://nodejs.org/) installed. This will include NPM (node package manager).

This course was tested on Node: 4.2.6, 5.3.0, 6.2.2, and 6.3.1.

Install [bower](http://bower.io/) via npm:
```
npm install -g bower
```

# Installation

First install the Node dependencies: 

```
npm install
```

Then install the Bower dependencies:

```
bower install
```

# Getting started

Run the following command in your terminal to get started:

```
npm start
```

This should start up 'karma' and run all the unit tests. You should
see that all tests are currently passing. 

`npm start` will watch the 'lab' files for changes and rerun the tests 
if they change. You can now start working on the labs.

Alternatively you can run the test only once via `npm test`. This will
quit back to the command line after the test have ran.

Note: only the failing tests are reported for both `npm start` and `npm test`.
This way you don't need to do that much scrolling when working on a lab.

# Debugging in the browser

If you run the tests via `npm start` you can debug your tests in your
browser. Chrome's devtools are especially useful.

When you run `npm start` you will see something like this appearing
on your terminal:

```
Karma v0.13.22 server started at http://localhost:9002/
```

This means that karma can be found on `http://localhost:9002/`, open
it in your browser.

This will show you a page with a header containing the text: 'Karma v0.13.22'.
On the right you will find a big 'debug' button, press this.

This will open a new tab, each time you reload this page it will re-run
all the tests. Open your developer tools, in Chrome, find the `sources` tab 
and open it. In this tab you should find an file explorer, find the file
for the lab you want to debug. 

For lab 1 this would be `01-camel-case.js[sm]`. Now you can set breakpoints 
in the lab file, refesh the page to run the tests again, and it should
break on the code.

Once you are on the breakpoint you can start digging around in the
`console` by entering expressions there. You should have access to
all variables which are on the scope of the current breakpoint.
