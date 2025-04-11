const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webviewTag: true
    }
  });

  // Load the multiviewer grid
  win.loadFile('index.html');

  // Prevent webview content from taking over fullscreen
  win.webContents.on('will-enter-html-full-screen', (event) => {
    event.preventDefault(); // Block fullscreen takeover
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
