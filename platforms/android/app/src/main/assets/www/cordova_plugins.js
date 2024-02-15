cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com-meetinglawyers-cordova.CDVMeetingLawyers",
      "file": "plugins/com-meetinglawyers-cordova/www/CDVMeetingLawyers.js",
      "pluginId": "com-meetinglawyers-cordova",
      "clobbers": [
        "meetinglawyers"
      ]
    }
  ];
  module.exports.metadata = {
    "com-meetinglawyers-cordova": "1.0.2",
    "cordova-plugin-add-swift-support": "2.0.2"
  };
});