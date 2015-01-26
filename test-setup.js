// for phantomjs, taken from https://github.com/facebook/react/blob/e6672a3a03b10528c5dd492b5c88183637910502/src/test/phantomjs-shims.js
if (!Function.prototype.bind) {
  // PhantomJS doesn't support Function.prototype.bind natively, so
  // polyfill it whenever this module is required.
  Function.prototype.bind = function(context) {
    var func = this;
    var args = Array.prototype.slice.call(arguments, 1);

    function bound() {
      var invokedAsConstructor = func.prototype && (this instanceof func);
      return func.apply(
        // Ignore the context parameter when invoking the bound function
        // as a constructor. Note that this includes not only constructor
        // invocations using the new keyword but also calls to base class
        // constructors such as BaseClass.call(this, ...) or super(...).
        !invokedAsConstructor && context || this,
        args.concat(Array.prototype.slice.call(arguments))
      );
    }

    // The bound function must share the .prototype of the unbound
    // function so that any object created by one constructor will count
    // as an instance of both constructors.
    bound.prototype = func.prototype;

    return bound;
  };

}

if (typeof document === 'undefined' ) {
  var jsdom = require("jsdom").jsdom;
  global.document = jsdom('<!doctype html><html><body></body></html>');
  global.window = document.parentWindow;
  global.navigator = {userAgent: ''};

  // we want to be able to include jsx files from node
  require('node-jsx').install();

  // ... add whatever browser globals your tests might need ...   
}
