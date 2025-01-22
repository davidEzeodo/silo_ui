import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox, View, StyleSheet, Text } from "react-native";
import React, {useEffect, useState} from "react";
import * as SplashScreen from "expo-splash-screen";
import * as SecureStore from "expo-secure-store";
import Splash from "@/components/Splash";


LogBox.ignoreAllLogs(true);
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);

  const handleSplashFinish = async() => {
    setSplashVisible(false);
  };

  useEffect(() => {
    const checkUserStatus = async () => {
      try{
        const userSession = await SecureStore.getItemAsync("userSession");
        console.log("DEBUG: userSession value:", userSession);
        setIsNewUser(!userSession);
      }catch(error){
        console.error("Error reading user session: ", error);
        setIsNewUser(true);
      }
    };
    checkUserStatus();
  }, [])
  useEffect(() => {
    console.log("DEBUG: isSplashVisible:", isSplashVisible);
    if (!isSplashVisible) {
      SplashScreen.hideAsync();
    }
    
  }, [isSplashVisible]);
  if (isSplashVisible) {
    return <Splash onFinish={handleSplashFinish}/>;
  }

  if (isNewUser === null) {
    console.log("DEBUG: Waiting for isNewUser resolution...");
    return null; // Show a loading spinner if needed
  }

  console.log("DEBUG: Initial Route Name:", isNewUser ? "(welcome)" : "(auth)");
  
  return (
    <>
    <StatusBar style="light"/>
      <Stack initialRouteName={isNewUser ? "(welcome)" : "(auth)"}>
        <Stack.Screen name="(welcome)" options={{ headerTitle: ""}}/>
        <Stack.Screen name="(auth)" options={{ headerTitle: "Login", headerShown: false }}/>
        <Stack.Screen name="(tabs)" options={{headerTitle: "Home", headerShown: false}}/>
        <Stack.Screen name="+not-found" options={{headerShown: false}}/>
      </Stack>
    </>
  );
}

