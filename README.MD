# Using Lottie Animations in Expo Bare Workflow project.<br />Results of POC 

## Implementation

### react-native-lottie-splash-screen

<img src="https://github.com/jaroslawkrol-tivix/lottie-poc/blob/master/results/splashscreen.gif?raw=true" height="350">

The implementation of the **react-native-lottie-splash-screen** library was carried out without any trouble. The documentation is complete. However, it is worth noting that the library creates a confict with the regular expo-splash-screen library, so it should be removed beforehand

### lottie-react-native

<img src="https://github.com/jaroslawkrol-tivix/lottie-poc/blob/master/results/in_app_animation.gif?raw=true" height="350">


A bit worse is the lottie-react-native implementation for using animations inside the application. In the latest version 6.0.1, only the first frame is displayed. I spent about half an hour to solve the problem - to no avail. After downgrading the library to version 5.1.6, everything works correctly.

## Performance tests 

### 1. Startup time:

There is no tool for counting the app start time (from tap on the app icon to the disappearance of the splash screen), so I used a stopwatch and calculated the average time.

| Type of Splashscreen | 1  | 2 | 3 | 4 | 5 | 6 |  | Average startup time (s) |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| Regular with PNG (expo-splash-screen) | 4.27 s | 4.42 s | 4.22 s | 4.37 s | 4.45 s | 4.27 s |  | 4.33 s |
| With Lottie animation  |  5.58 s | 5.35 s | 5.43 s | 5.23 s | 5.2 s | 5.21 s |  | 5.33 s |

**Summary:**

Application opening time with lottie animation was found to be 1 second longer (23%). However, it should be remembered that in both cases the application had a different set of libraries and assets, so the size of the application's bundle may also matter here.

### 2. Performance Using Lottie Animation in app 

To measure the performance of the application, I used the RN Perf Monitor plug-in for the Flipper tool.

The results came out better than good, and the FPS number remained unchanged. Therefore, in addition to displaying the animation in a loop, I added a shitstorm function that changes the text color every 200 ms (thus clogging up the JS thread).

**Summary:**

| Lottie Animation Results | Lottie Animation Results With Shitstorm | Shitstorm without animation |
| ------ | ------ | ------ |
| <img src="https://github.com/jaroslawkrol-tivix/lottie-poc/blob/master/results/lottie-animation.png?raw=true" height="350"> | <img src="https://github.com/jaroslawkrol-tivix/lottie-poc/blob/master/results/lottie-animation-with-shitstorm.png?raw=true" height="350"> | <img src="https://github.com/jaroslawkrol-tivix/lottie-poc/blob/master/results/only-shitstorm.png?raw=true" height="350"> |

The statistics showed that displaying lottie animations at the same time does not affect the application's performance.


