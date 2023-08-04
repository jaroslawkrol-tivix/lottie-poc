import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from "lottie-react-native";
import LottieSplashScreen from "react-native-lottie-splash-screen";

function Animation() {
    return (
        <LottieView style={{height: 200}} source={require("./assets/animation.json")} autoPlay loop />
    );
}

export default function App() {

    useEffect(() => {
        LottieSplashScreen.hide(); // here
    }, []);


  return (
    <View style={styles.container}>
      <Animation />
      <Text>Home screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
