const {app, BrowserWindow} = require('electron');
let mainWindow;

//Check if platform is Windows
const isWin = /^win/.test(process.platform);

//Constants for window
const WINDOW_WIDTH = 1200;
const WINDOW_HEIGHT = 800;
const WINDOW_FRAME = !isWin;
const WINDOW_SHOW = true;
const WINDOW_FOCUS = true;
const WINDOW_THICK_FRAME = true;
const WINDOW_BACKGROUND_COLOR = '#0B1015';

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
  mainWindow.setResizable(true);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.openDevTools();
});

app.on('window-all-closed', () => {
  app.quit();
});
