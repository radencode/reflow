const { app, BrowserWindow } = require('electron');
const path = require('path');
const log = require('electron-log');
const { autoUpdater } = require('electron-updater');
process.env.ELECTRON_EDGE_JS_ROOT = path.join(__dirname, '../', 'lib');
process.env.REFLOW_VERSION = app.getVersion();

//Setup logger
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

let mainWindow = null;
let updateWindow = null;

const createMainWindow = () => {
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		minWidth: 1280,
		minHeight: 720,
		frame: false,
		backgroundColor: '#141b23',
		thickFrame: true,
		focusable: true,
		show: false,
	});
	/************* REMOVE AFTER PRODUCTION *****************/
	mainWindow.openDevTools({ detached: true });
	/*****************************************************/
	mainWindow.setResizable(true);
	mainWindow.loadURL(`file://${__dirname}/index.html`);
};

const createUpdateWindow = () => {
	updateWindow = new BrowserWindow({
		width: 700,
		height: 450,
		frame: false,
		backgroundColor: '#0E141A',
		thickFrame: true,
		focusable: true,
		show: true,
	});
	updateWindow.setResizable(false);
	updateWindow.loadURL(`file://${__dirname}/update/update.html`);
	setTimeout(() => {
		autoUpdater.checkForUpdates();
	}, 2000);
};

//Start app
app.on('ready', () => {
	createUpdateWindow();
	createMainWindow();
});

//Close app
app.on('window-all-closed', () => {
	app.quit();
	mainWindow = null;
	updateWindow = null;
});

app.on('activate', function() {
	if (mainWindow === null) {
		createMainWindow();
	}
});

/************* AUTO UPDATER *****************/
const sendStatusToWindow = text => {
	log.info(text);
	if (updateWindow) {
		updateWindow.webContents.send('message', text);
	}
};

autoUpdater.on('checking-for-update', () => {
	sendStatusToWindow('Checking for updates...');
});

autoUpdater.on('update-available', info => {
	sendStatusToWindow('Update available...');
});

autoUpdater.on('update-not-available', info => {
	sendStatusToWindow('Reflow is up to date, launching...');
	setTimeout(() => {
		updateWindow.close();
		mainWindow.show();
	}, 1500);
});

autoUpdater.on('error', err => {
	sendStatusToWindow(`Error in auto-updater: ${err.toString()}`);
});

autoUpdater.on('download-progress', progressObj => {
	sendStatusToWindow(`Update available, downloading... ${Math.floor(progressObj.percent)}%`);
});

autoUpdater.on('update-downloaded', info => {
	sendStatusToWindow('Reflow will now close and install update...');
	setTimeout(() => {
		autoUpdater.quitAndInstall();
	}, 1500);
});
