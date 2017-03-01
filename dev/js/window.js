const Remote = require('electron').remote;

function border(){
  const body = document.body;
  const win = Remote.getCurrentWindow();
  console.log("called");
  win.on('focus', () => {
    if(!win.isMaximized())
      body.className = 'window-focus';
  });
  win.on('blur', () => {
    body.className = 'window-blur';
  });
}

border();
