const {
    app,
    BrowserWindow,
    ipcMain,
    nativeTheme
} = require('electron')
const path = require('path')

  // "scripts": {
  //   "start": "electron-forge start",
  //   "test": "electron .",
  //   "package": "electron-forge package",
  //   "make": "electron-forge make"
  // },
  
function createWindow() {
    const win = new BrowserWindow({
        width: 700,
        height: 1000,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('./web/index.html')

    ipcMain.on('audiostart', (event, arg) => {

            win.minimize();
    });

}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})