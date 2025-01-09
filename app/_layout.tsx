import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox, View, StyleSheet, Text } from "react-native";
import React, {useEffect, useState} from "react";
import * as SplashScreen from "expo-splash-screen";
import Splash from "@/components/Splash";


LogBox.ignoreAllLogs(true);

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [isSplashVisible, setSplashVisible] = useState(true);
  
  const handleSplashFinish = async() => {
    setSplashVisible(false);
  };
  useEffect(() => {
    if (!isSplashVisible) {
      SplashScreen.hideAsync();
    }
    
  }, [isSplashVisible]);
  if (isSplashVisible) {
    return <Splash onFinish={handleSplashFinish}/>;
  }
  
  return (
    <>
    <StatusBar style="light"/>
      <Stack>
        <Stack.Screen name="(tabs)" options={{
          headerTitle: "Home",
          headerShown: false
        }}/>
        <Stack.Screen name="+not-found"
        options={{
          headerShown: false
        }}/>
        
      </Stack>
    </>
  );
}

