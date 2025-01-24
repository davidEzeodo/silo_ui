import {Stack} from "expo-router";

export default function CommunityLayout(){
    return(
        <Stack screenOptions={{
                headerStyle:{
                    backgroundColor: "#0B2950",
                  },
                headerTintColor: "#fff",
                headerTitle: "",
            }}
        >
            <Stack.Screen name="CommunityScreen" options={{
                headerShown: true,
                headerTitle: ""}}
            />
            {/* <Stack.Screen name="CreateCommunity" options={{
                headerShown: true,
                headerTitle: ""}}
            /> */}
            
        </Stack>
    )
}