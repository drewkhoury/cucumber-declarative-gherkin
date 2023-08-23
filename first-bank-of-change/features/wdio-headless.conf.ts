// Import the module
const config = require('./wdio.conf.ts').config;

config.capabilities[0]['goog:chromeOptions'] = {
    args: [
        '--no-sandbox', // this arg *may* need to be first in the list
        '--headless',
        // Use --disable-gpu to avoid an error from a missing Mesa
        // library, as per
        // https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
        '--disable-gpu',
        '--disable-dev-shm-usage',
    ],
}

exports.config = config;
