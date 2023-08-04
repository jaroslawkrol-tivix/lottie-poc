import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useMemo, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import LottieView from "lottie-react-native";
import LottieSplashScreen from "react-native-lottie-splash-screen";

function Animation() {
    return (
        <LottieView style={{height: 200}} source={require("./assets/animation.json")} autoPlay loop />
    );
}

export default function App() {

    const [textColor, setTextColor] = useState("#000000");
    const animation = useMemo(() => <Animation />, []);

    useEffect(() => {
        LottieSplashScreen.hide(); // here
    }, []);

    const runShitstorm = () => {
        setInterval(() => {
            setTextColor("#" + Math.floor(Math.random()*16777215).toString(16))
        }, 200);
    }

  return (
    <View style={styles.container}>
        {animation}
      <Text style={{color: textColor}}>Home screen</Text>
      <Button  title={"Run shitstorm"} onPress={runShitstorm} />
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
