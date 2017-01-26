# wikitude-ionic-2-starter-app
This starter app is the fastest way to get you started with your own <strong>Augmented Reality</strong> projects and benefit from the powerful framework <strong>Ionic 2</strong>. It uses the latest and greatest version of the <strong>Phonegap/Cordova Wikitude Plugin (6.0)</strong> and is based on the latest version of <strong>Ionic 2 (2.0.1-final)</strong>. It contains two sample AR Worlds (1 Geo World - default, and one Image Recognition World) from the Wikitude sample projects (a 3D model of the Earth floating on a relative location). <p>You can easily replace this sample with other samples from the Wikitude SDK Examples directory, by replacing the content of the directory <strong>src/assets</strong> with another sample. (See Wikitude SDK --> WikitudeSDK_Android_6-0-0_2017-01-24_20-27-20/Examples/SDKExamples/wikitude-sdk-samples/src/main/assets/samples)<p>
You can switch between the sample geo world and the sample IR world in the file <strong>src/pages/ar-view/ar-view.ts</strong> and comment in the lines marked with (1) for the IR sample world, or (2) for the sample GEO world - don't forget to comment out the other sample world (IR or GEO), as you can't have a GEO world and a IR world at the same time.<p>
For the IR world, please use target 3 of <a href="http://www.wikitude.com/external/doc/documentation/5.0/android/images/target_images_examples.pdf">Wikitude Target Examples</a>.<p>
Additionally this Starter app shows you how to communicate between the ionic 2 pages and the Wikitude SDK: There is a "Snapshot" link on the AR view. When you click it, a message is sent to a callback defined in <strong>app.components.ts</strong>, this function then creates a snapshot of the screen and saves it on the phone. Look for "<strong>captureScreen</strong>" within the sources. After the image has been saved locally, a Javascript function within the Wikitude SDK is called from Ionic using <strong>WikitudePlugin.callJavaScript(...)</strong>, as an example of how you can send massages the other way round, from Ionic to the Wikitude SDK.<p>  

## Version Information
1.0 Initial creation for Ionic 2 RC.0 - Oct 6, 2016<br>
1.1 Upgrade to Ionic 2 RC.4; added an IR sample world - Jan 12, 2017<br> 
1.2 Upgrade to Ionic 2 RC.5 - Jan 16, 2017<br> 
1.3 Upgrade to Ionic 2 (2.0.1-final) and Wikitude 6.0 - Jan 26, 2017<br> 

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

<strong>This project is maintained by <a href="http://schneeweis.technology">Schneeweis.Technology</a>. If you have questions or suggestions, please send an email to <a href="mailto:info@schneeweis.technology">info[at]schneeweis.technology</a></strong>.

<strong>Disclaimer: This Starter App is not officially supported and maintained by <a href="http://www.wikitude.com">Wikitude GmbH</a>.</strong>
