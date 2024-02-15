# Example Cordova plugin SDK

This project is an example of how to use the cordova plugin.


More info about plugin: https://developer.meetinglawyers.com/docs/cordova/installation

More info about cordova: https://cordova.apache.org/docs/en/10.x/guide/cli/#installing-the-cordova-cli

```
#Instal:
node

#Install:
npm

#Install:
npm install -g cordova@11.0.0

#Add Plugin:
cordova plugin add https://github.com/MeetingLawyers/cordova-plugin-meetinglawyers

```

To force update las version of plugin edit `package.json` and then use `npm install` like:
```
"node_modules/com-meetinglawyers-cordova": {
    "version": "x.x.x",
```

### Add android
Now add platform:

This will generate `platforms/android` directory with `com-meetinglawyers-cordova`
```
cordova platform add android
```

The `platforms/android/com-meetinglawyers-cordova` its important because contains xxxx-plugin.gradle file we must edit as documentation:

now launch:
 ```
cordova prepare android
 ```

 
Now if you import project will launch an error:

 ```
FAILURE: Build failed with an exception.

* Where:
Script './platforms/android/CordovaLib/cordova.gradle' line: 114

* What went wrong:
A problem occurred evaluating script.
> Unable to determine Android SDK directory.
```

How to fix it?
https://stackoverflow.com/a/67398932/4693765


### Add iOS
Now add platform:

this will generate `platforms/ios` directory
```
cordova platform add ios
```