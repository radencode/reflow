const { app, BrowserWindow } = require('electron');

//Window settings
const WINDOW_WIDTH = 1280;
const WINDOW_HEIGHT = 720;
const WINDOW_FRAME = false;
const WINDOW_SHOW = true;
const WINDOW_FOCUS = true;
const WINDOW_THICK_FRAME = true;
const WINDOW_BACKGROUND_COLOR = '#141b23';

//Set window params
const setWindowParams = () => {
	return new BrowserWindow({
		width: WINDOW_WIDTH,
		height: WINDOW_HEIGHT,
		minWidth: WINDOW_WIDTH,
		minHeight: WINDOW_HEIGHT,
		frame: WINDOW_FRAME,
		backgroundColor: WINDOW_BACKGROUND_COLOR,
		thickFrame: WINDOW_THICK_FRAME,
		focusable: WINDOW_FOCUS,
		show: WINDOW_SHOW,
	});
};

//Start app
app.on('ready', () => {
	let mainWindow = setWindowParams();
	/************* REMOVE AFTER PRODUCTION *****************/
	mainWindow.openDevTools({ detached: true });
	/*****************************************************/
	mainWindow.setResizable(true);
	mainWindow.loadURL(`file://${__dirname}/index.html`);
});

//Close app
app.on('window-all-closed', () => {
	app.quit();
});
