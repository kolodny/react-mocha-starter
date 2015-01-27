if (typeof document === 'undefined') {
  var jsdom = require("jsdom").jsdom;
  global.document = jsdom('<!doctype html><html><body></body></html>');
  global.window = document.parentWindow;
  global.navigator = {userAgent: ''};

  // we want to be able to include jsx files from node
  require('node-jsx').install();

  // ... add whatever browser globals your tests might need ...   
}
