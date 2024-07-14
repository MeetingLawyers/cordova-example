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

You need to go Android Sdk manager and download SDK Tools version 30 (mark this check on Settings of android studio)
Now find `MIN_BUILD_TOOLS_VERSION` and change to `30.0.0` sync gradle and all must be fixed.


### Add iOS
Now add platform:

this will generate `platforms/ios` directory
```
cordova platform add ios
```

If you launch previous command an error appear!
Now go to platforms/ios and edit Podfile:

Add at end of this file:
```
post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      if target.name == 'MessageKit'
        config.build_settings['SWIFT_VERSION'] = '4.2'
      end
      config.build_settings['DEBUG_INFORMATION_FORMAT'] = 'dwarf' # avoid too many symbols
      config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
      config.build_settings['CODE_SIGNING_ALLOWED'] = 'NO'
      config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '13.0'
      config.build_settings['BUILD_LIBRARY_FOR_DISTRIBUTION'] = "YES"
    end
  end
end

```

Now launch pod install
```
pod install
```

This command will launch an error:

```
[!] Unable to determine Swift version for the following pods:

- `MessageInputBar` does not specify a Swift version and none of the targets (`TestApp`) integrating it have the `SWIFT_VERSION` attribute set. Please contact the author or set the `SWIFT_VERSION` attribute in at least one of the targets that integrate this pod.
- `MessageKit` does not specify a Swift version and none of the targets (`TestApp`) integrating it have the `SWIFT_VERSION` attribute set. Please contact the author or set the `SWIFT_VERSION` attribute in at least one of the targets that integrate this pod.
- `RealmSwift` does not specify a Swift version and none of the targets (`TestApp`) integrating it have the `SWIFT_VERSION` attribute set. Please contact the author or set the `SWIFT_VERSION` attribute in at least one of the targets that integrate this pod.
- `Swinject` does not specify a Swift version and none of the targets (`TestApp`) integrating it have the `SWIFT_VERSION` attribute set. Please contact the author or set the `SWIFT_VERSION` attribute in at least one of the targets that integrate this pod.
- `SwinjectStoryboard` does not specify a Swift version and none of the targets (`TestApp`) integrating it have the `SWIFT_VERSION` attribute set. Please contact the author or set the `SWIFT_VERSION` attribute in at least one of the targets that integrate this pod.
```
To solve this problems:
* open .xcworkspace.
* Go to Project settings (info tab) and edit iOS deployment Target to iOS 13.0
* Go to Target settings (general tab) and edit Minimum Deployments to iOS 13.0
* Go to Project settings (build settings), choose all filter and find swift language version update it to Swift5
* Go to CordovaLib sub project, select cordovaLib on target, (build settings tab) and edit Excluded Architectures to 'Any iOS Simulator SDK' -> arm64 on debug and release
* Close project and XCode.

Now open terminal and launch pod install again:
```
pod install
```
