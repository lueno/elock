const builder = require('electron-builder');

builder.build({
    config: {
        'appId': 'com.electron.elock',
        'win':{
            'target': 'nsis'
        },
        'nsis':{
            'oneClick': false,
            'allowToChangeInstallationDirectory': true,
            'createDesktopShortcut': false,
            'createStartMenuShortcut': false
        },
        'artifactName': "clock-${os}-${arch}-Setup-${version}.${ext}"
    }
});
