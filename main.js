const { BrowserWindow } = require('electron')

const {app} = require('electron')

createWindow =() => {
    let win = new BrowserWindow({
        width: 900,
        height: 600
    })
    win.loadFile('index.html')
    let wc = win.webContents
    wc.on("dom-ready", () => {
        console.log("The app is ready now")
    })
    wc.on("did-finish-load", () => {
        console.log("The app is loaded")
    })
    wc.on("new-window", () => {
        console.log("A new window is opened")
    })
    wc.on("before-input-event", () => {
        console.log("new action (Key press/release)")
    })
}

app.whenReady().then(createWindow)