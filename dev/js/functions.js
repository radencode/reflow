const Remote = require('electron').remote;
var body = document.body;

Remote.getCurrentWindow().on('focus', () => {
  body.className = 'windowFocused';
});

Remote.getCurrentWindow().on('blur', () => {
  body.className = 'windowBlur';
});
