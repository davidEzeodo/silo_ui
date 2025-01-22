import {Stack} from "expo-router";

export default function AuthLayout(){
    return(
    <Stack screenOptions={{
        headerTransparent:true,
        headerStyle:{
            backgroundColor: "#0B2950",
          },
          headerTintColor: "#fff",
    }}>
        <Stack.Screen name="EmailAuthentication" options={{ headerTitle: "", 
        headerLeft: () => null, 
        gestureEnabled: false 
        }} />
        <Stack.Screen name="Otp" options={{ headerTitle: "", 
        headerLeft: () => null, 
        gestureEnabled: false 
        }} />
        <Stack.Screen name="SignupScreen" options={{ headerTitle: "", 
        headerLeft: () => null, 
        gestureEnabled: false 
        }} />
        <Stack.Screen name="LoginScreen" options={{ headerTitle: "", 
        headerLeft: () => null, 
        gestureEnabled: false 
        }} />
        <Stack.Screen name="Demo" options={{ headerTitle: ""}} />
        <Stack.Screen name="CreateCommunityProfile"options={{ headerTitle: "", 
        headerLeft: () => null, 
        gestureEnabled: false 
        }} />
    </Stack> 
    );
}