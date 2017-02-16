const {app, BrowserWindow} = require('electron');
let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 1200, height: 900, frame: false, backgroundColor: '#292929', thickFrame: false})
  mainWindow.setResizable(true)
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.openDevTools();
})

app.on('window-all-closed', () => {
  app.quit()
})
