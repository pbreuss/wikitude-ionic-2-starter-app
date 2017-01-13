# wikitude-ionic-2-starter-app
This starter app is the fastest way to get you started with your own <strong>Augmented Reality</strong> projects and benefit from the powerful framework <strong>Ionic 2</strong>. It uses the latest version of the <strong>Phonegap/Cordova Wikitude Plugin (5.3)</strong> and is based on the latest version of <strong>Ionic 2 (2.0.0-rc.4)</strong>. It contains one sample AR World from the Wikitude sample projects (a 3D model of the Earth floating on a relative location). <p>You can easily replace this sample with other samples from the Wikitude SDK Examples directory, by replacing the content of the directory <strong>src/assets</strong> with another sample app.<p><br>
Additionally this Starter app shows you how to communicate between the ionic 2 pages and the Wikitude SDK: There is a "Snapshot" link on the AR view. When you click it, a message is sent to a callback defined in <strong>app.components.ts</strong>, this function then creates a snapshot of the screen and saves it on the phone. Look for "<strong>captureScreen</strong>" within the sources. After the image has been saved locally, a Javascript function within the Wikitude SDK is called from Ionic using <strong>WikitudePlugin.callJavaScript(...)</strong>, as an example of how you can send massages the other way round, from Ionic to the Wikitude SDK.<p>  

## How to use this template

1) To get started with ionic, see http://ionicframework.com/docs/v2/getting-started/installation/<br>

2) Create an empty tab app by typing in the terminal

```bash
$ ionic start WikitudeIonic2StarterApp --v2
```

3) Download this starter app (it's a <strong>src</strong> directory), and replace the <strong>src</strong> directory of the empty tab app with it<br>

4) Using the terminal, go to the directory WikitudeIonic2StarterApp and add the platform ios to your app: <br>

```bash
$ cd WikitudeIonic2StarterApp
$ ionic platform add ios
```

5) Then add the android platform as well <br>

```bash
$ ionic platform add android
```

6) Install the Wikitude Cordova Plugin:

```bash
$ ionic plugin add https://github.com/Wikitude/wikitude-cordova-plugin.git
```

7) Obtain a (free) license key from Wikitude: Go to http://www.wikitude.com/developer/licenses, register, and download a key for the Wikitude SDK. Then copy the key to the file `src/app/app.component.ts`

8) Please remember that you can't test this plugin on a browser or emulator. You need an Android or iOS device. To test on Android, type:

```bash
$ ionic build android
```
and install the apk (see filename when the compilation finished), type: 

```bash
$ adb install -r your-path-to-your-apk-file
```

To test on iOS, compile your project with 

```bash
$ ionic build ios
```

Then you can open `WikitudeIonic2StarterApp/platforms/ios/WikitudeIonic2StarterApp.xcodeproj` with XCode, then you plug in you IOS device, then in XCode, on the top left, click `WikitudeIonic2StarterApp`, popup opens, choose your device, and then click the Build button (the triangle on the top left). When you are installing the app using XCode for the first time, you need to set a <strong>Team</strong>, under <strong>Project Settings --> General --> Signing --> Team</strong>, choose your Apple ID.

<strong>Logging</strong>: to view the logs of your AR world, click on the orange triangle on the bottom right of the AR View. Logs are printed bottom to top. To remove the orange triangle, remove the following from src/assets/3_3dModels_6_3dModelAtGeoLocation/index.html: Take this out of your body statement: <strong>onLoad="javascript:AR.logger.activateDebugMode();"</strong>

To learn more about how to develop your own AR worlds, please look at http://www.wikitude.com/developer/documentation/phonegap.


<strong>Disclaimer: This Starter App is not officially supported and maintained by Wikitude GmbH.</strong>
