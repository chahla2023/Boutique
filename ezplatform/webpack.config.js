const Encore = require('@symfony/webpack-encore');
const path = require('path');
const getEzConfig = require('./ez.webpack.config.js');
const eZConfigManager = require('./ez.webpack.config.manager.js');
const eZConfig = getEzConfig(Encore);
const customConfigs = require('./ez.webpack.custom.configs.js');

Encore.reset();
Encore.setOutputPath('public/assets/build')
    .setPublicPath('/assets/build')
    .enableSassLoader()
    .enableReactPreset()
    .enableSingleRuntimeChunk()
    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[ext]',
        pattern: /\.(png|svg|jpg)$/
    });


// Put your config here.
Encore.addEntry('app_js', [
    path.resolve(__dirname, './assets/js/main.js'),
    path.resolve(__dirname, './assets/lib/easing/easing.min.js'),
    path.resolve(__dirname, './assets/mail/jqBootstrapValidation.min.js'),
    path.resolve(__dirname, './assets/mail/contact.js'),
]);

Encore.addEntry('app_styles', [
    path.resolve(__dirname, './assets/styles/app.css'),
    path.resolve(__dirname, './assets/css/main.css'),
]);

const projectConfig = Encore.getWebpackConfig();
module.exports = [ eZConfig, ...customConfigs, projectConfig ];

// uncomment this line if you've commented-out the above lines
// module.exports = [ eZConfig, ...customConfigs ];
