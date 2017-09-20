const {app, BrowserWindow} = require('electron')
// const electron = require('electron')
// const app = electron.app
// const BrowserWindow = electron.BrowserWindow
function createWindow () {
  var win = new BrowserWindow({width: 1200, height: 1000})//開出一個寬800、高600的窗口
  win.loadURL('file://' + __dirname + '/index.html')
}

app.on('ready', createWindow)
