const {app, BrowserWindow} = require('electron')
// const electron = require('electron')
// const app = electron.app
// const BrowserWindow = electron.BrowserWindow
function createWindow () {
  var win = new BrowserWindow({width: 800, height: 600})//開出一個寬800、高600的窗口
  win.loadURL('file://' + __dirname + '/index.html')
} // __dirname 路徑的資料夾

app.on('ready', createWindow)
// 等app載入後開啟createWindow
// app ready 後開啟
