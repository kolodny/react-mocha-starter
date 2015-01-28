if (typeof document === 'undefined') {
  var jsdom = require("jsdom").jsdom;
  global.document = jsdom('<!doctype html><html><body></body></html>');
  global.window = document.parentWindow;
  global.navigator = {userAgent: ''};

  // ... add whatever browser globals your tests might need ...
}
