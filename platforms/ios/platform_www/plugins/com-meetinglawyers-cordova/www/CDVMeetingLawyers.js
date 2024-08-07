cordova.define("com-meetinglawyers-cordova.CDVMeetingLawyers", function(require, exports, module) {
var exec = require("cordova/exec");

exports.initialize = function (apikey, env, success, error) {
  exec(success, error, "CDVMeetingLawyers", "initialize", [apikey, env]);
};

exports.authenticate = function (userid, success, error) {
  exec(success, error, "CDVMeetingLawyers", "authenticate", [userid]);
};

exports.logout = function (success, error) {
  exec(success, error, "CDVMeetingLawyers", "logout", []);
};

exports.setFcmToken = function (userid, success, error) {
  exec(success, error, "CDVMeetingLawyers", "setFcmToken", [userid]);
};

exports.onFcmMessage = function (data, success, error) {
  exec(success, error, "CDVMeetingLawyers", "onFcmMessage", [data]);
};

exports.onFcmBackgroundMessage = function (data, success, error) {
  exec(success, error, "CDVMeetingLawyers", "onFcmBackgroundMessage", [data]);
};

exports.openList = function (success, error) {
  exec(success, error, "CDVMeetingLawyers", "openList", []);
};

exports.setStyle = function(style) {
  exec(function() {}, function(error) {}, "CDVMeetingLawyers", "setStyle", [style]);
}

exports.setNavigationImage = function(imageName) {
  exec(function() {}, function(error) {}, "CDVMeetingLawyers", "setNavigationImage", [imageName]);
}


});
