import TabLayout from "@/app-example/app/(tabs)/_layout";
import BlurTabBarBackground from "@/app-example/components/ui/TabBarBackground.ios";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true)


export default function RootLayout() {
  return (
    <>
    <StatusBar style="light"/>
      <Stack>
        <Stack.Screen name="(tabs)" options={{
          headerTitle: "Home",
          headerShown: false
        }}/>
        <Stack.Screen name="not-found"
        options={{
          headerShown: false
        }}/>
        
      </Stack>
    </>
    

    
  );
}
