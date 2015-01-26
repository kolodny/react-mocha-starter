require('node-jsx').install();
var assert = require('assert');
var React = require('react');
// var ReactAddons = require('react/addons');
// var ReactTestUtils = React.addons.TestUtils;

var HelloWorld = require('./component');

describe('The HelloWorld component', function() {
  var component;

  beforeEach(function(done) {
    component = React.render(
      React.createElement(HelloWorld, {}),
      document.body, function() {
        setTimeout(done);
      }
    );
  });

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body);
    setTimeout(done);
  });

  it('should render a HelloWorld component', function() {
    assert.equal(component.getDOMNode().textContent, 'Hello World!');
  });

  it('should change when a prop changes', function() {
    component.setProps({name: 'Moshe'});
    assert.equal(component.getDOMNode().textContent, 'Hello Moshe!');
  });

});
