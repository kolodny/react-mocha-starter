React Mocha Starter
===

Test your react components on the client (`phantomjs`) and server (`node|iojs`)

[![Build Status](https://travis-ci.org/kolodny/react-mocha-starter.svg?branch=master)](https://travis-ci.org/kolodny/react-mocha-starter)

Here's a basic workflow:

```bash
git clone https://github.com/kolodny/react-mocha-starter new-react-project
cd new-react-project
rm -rf .git/
git init
echo node_modules/ >> .gitignore
npm install
subl .

#later...
npm test
```

Here's a sample test file:

```js
require('../../test-setup');
var assert = require('assert');
var React = require('react/addons');
// var ReactTestUtils = React.addons.TestUtils;

var HelloWorld = require('../../component');

describe('The HelloWorld component', function() {

  describe('when no props are given', function() {
    var component;

    beforeEach(function(done) {
      component = React.render(
        <HelloWorld />,
        document.body, function() {
          setTimeout(done);
        }
      );
    });

    afterEach(function(done) {
      React.unmountComponentAtNode(document.body);
      setTimeout(done);
    });

    it('should have a textContent of "Hello World!', function() {
      assert.equal(component.getDOMNode().textContent, 'Hello World!');
    });

  });

  describe('when a name prop is given', function() {
    var component;
    var nameProp;

    beforeEach(function(done) {
      nameProp = 'Moshe';
      component = React.render(
        <HelloWorld name={nameProp} />,
        document.body, function() {
          setTimeout(done);
        }
      );
    });

    afterEach(function(done) {
      React.unmountComponentAtNode(document.body);
      setTimeout(done);
    });

    it('should have a textContent of "Hello ${nameProp}!', function() {
      assert.equal(component.getDOMNode().textContent, `Hello ${nameProp}!`);
    });

  });

});
```