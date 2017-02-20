const {app, BrowserWindow} = require('electron');
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 1200, height: 800, frame: false, backgroundColor: '#0b1015', thickFrame: false, focusable: true});
  mainWindow.setResizable(true);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.openDevTools();
});

app.on('window-all-closed', () => {
  app.quit();
});
