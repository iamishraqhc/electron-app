const { BrowserWindow } = require('electron')

const {app} = require('electron')

createWindow =() => {
    let win = new BrowserWindow({
        width: 900,
        height: 600
    })
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)