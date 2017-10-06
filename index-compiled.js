'use strict';

const noop = require('lodash/noop');console.log('asd');

global['isDev'] = process.env.NODE_ENV !== 'production'; // Typescript no likey the regular way for property assign on global obj

const path = require('path');

const { app: electronApp } = require('electron');
const dotenv = require('dotenv');

electronApp.commandLine.appendSwitch('enable-web-bluetooth');
dotenv.config({ path: path.resolve(__dirname, '..', '..', 'config', '.env') });

// { setUpDev } = require('../common/setUpDev')
// { noop } = require('../common/utils')
// { initTrayMenu } = require('../tray/tray')

electronApp.on('ready', function () {
  if (electronApp.makeSingleInstance(noop)) electronApp.quit();
} // electronApp.dock?.hide()
// setUpDev()
// initTrayMenu()
);

electronApp.on('window-all-closed', noop);
