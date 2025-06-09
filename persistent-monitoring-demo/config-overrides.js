const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'node_modules', 'cesium', 'Build', 'Cesium', 'Workers'),
          to: 'static/Cesium/Workers',
        },
        {
          from: path.join(__dirname, 'node_modules', 'cesium', 'Build', 'Cesium', 'ThirdParty'),
          to: 'static/Cesium/ThirdParty',
        },
        {
          from: path.join(__dirname, 'node_modules', 'cesium', 'Build', 'Cesium', 'Assets'),
          to: 'static/Cesium/Assets',
        },
        {
          from: path.join(__dirname, 'node_modules', 'cesium', 'Build', 'Cesium', 'Widgets'),
          to: 'static/Cesium/Widgets',
        },
      ],
    })
  );

  return config;
};