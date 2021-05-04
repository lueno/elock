const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on("window-all-closed", function() {
    if (process.platform != "darwin") {
        app.quit();
    }
});

app.on("ready", function() {
    mainWindow = new BrowserWindow({
        // window settings
        "width": 240,
        "height": 100,
        "x": 1050,
        "y": 18,
        "webPreference": {
            nodeIntegration: false,
        },
        "transparent": true,
        "frame": false,
        "resizable": true,
        "skipTaskbar": true,
        "fullscreen": false,
    });
    mainWindow.setAlwaysOnTop(true, 'screen-saver');

    // open index.html
    mainWindow.loadURL("file://" + __dirname + "/index.html");

    // window closed
    mainWindow.on("closed", function() {
        mainWindow = null;
    });
});
