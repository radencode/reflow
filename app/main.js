const {app, BrowserWindow} = require('electron');
require('electron-debug')({showDevTools: false});
let mainWindow;

//Check if platform is Windows
const isWin = /^win/.test(process.platform);

//Constants for window
const WINDOW_WIDTH = 1280;
const WINDOW_HEIGHT = 720;
const WINDOW_FRAME = !isWin;
const WINDOW_SHOW = true;
const WINDOW_FOCUS = true;
const WINDOW_THICK_FRAME = true;
const WINDOW_BACKGROUND_COLOR = '#141b23'; //'#0C1015';

//Set window params
function setWindowParams(){
  mainWindow = new BrowserWindow({
    width:            WINDOW_WIDTH,
    height:           WINDOW_HEIGHT,
    frame:            WINDOW_FRAME,
    backgroundColor:  WINDOW_BACKGROUND_COLOR,
    thickFrame:       WINDOW_THICK_FRAME,
    focusable:        WINDOW_FOCUS,
    show:             WINDOW_SHOW
  });
}

app.on('ready', () => {
  setWindowParams();
  //mainWindow.openDevTools();
  mainWindow.setResizable(true);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

app.on('window-all-closed', () => {
  app.quit();
});


