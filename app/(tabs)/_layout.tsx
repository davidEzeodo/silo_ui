import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#25292e",
            headerStyle: {
                backgroundColor: "#25292e",
            },

            headerShadowVisible: false,
            headerTintColor: "#fff",
            tabBarStyle: {
                backgroundColor: "#FAF9F9",
                borderRadius: 50,
                marginHorizontal:10,
                marginVertical:10,
                height: 70
            },
            
        }}
    >
    
      <Tabs.Screen name="home" options={{
        headerTitle: "Home",
        tabBarItemStyle:{
            marginVertical: 7
        },
        tabBarIcon: ({focused, color}) => 
            <Ionicons 
            name={focused ? "home-sharp" : "home-outline"} 
            color={color}
            size={20}
            />
      }}/>

      <Tabs.Screen name="index" options={{
        headerTitle: "Silo",
      }}/>

      <Tabs.Screen name="chat" options={{
        headerTitle: "chat",
      }}/>

      <Tabs.Screen name="not-found" options={{headerShown: false}}/>

    </Tabs>
   
  );
}

