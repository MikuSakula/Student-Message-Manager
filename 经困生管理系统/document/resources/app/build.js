const packager = require('electron-packager')
const {
    serialHooks
} = require('electron-packager/src/hooks')


const appPaths = packager({
    dir: '.',
    
    electronVersion:'6.0.6',
    appCopyright: '沈阳航空航天大学',
})
console.log(`Electron app bundles created:\n${appPaths.join("\n")}`)