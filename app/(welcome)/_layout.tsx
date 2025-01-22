import {Stack} from "expo-router";

export default function WelcomeLayout(){
    return(
        <Stack screenOptions={{
        
            headerTransparent:true,
            headerStyle:{
                backgroundColor: "#0B2950",
              },
              headerTintColor: "#fff",
        }}>
            <Stack.Screen name="WelcomeScreen" options={{ headerTitle: ""}}/>
          
        </Stack>
    );
}