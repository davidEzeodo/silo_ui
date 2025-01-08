import { Tabs } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"; 
import { faComment, faCommentAlt, faHome, faHomeAlt, faBullhorn, faPager} from "@fortawesome/free-solid-svg-icons";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#25292e",
            headerStyle:{
              backgroundColor: "#25292e"
            },
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 17,
            },
            headerTintColor: "#fff",
            tabBarStyle: {
                backgroundColor: "#FAF9F9",
                height: 70,
            },
            tabBarShowLabel: false,
            tabBarIconStyle:{
              marginTop: 15
            }
        }}
    >
    

      <Tabs.Screen name="index" options={{
        headerTitle: "Silo",
        tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={focused ? faHome : faHomeAlt}
        color={color}
        size={20}/>
      }}/>

      <Tabs.Screen name="Post" options={{
        headerTitle: "Posts",
        tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={focused ? faBullhorn : faBullhorn}
        color={color}
        size={20}/>
      }}/>
      <Tabs.Screen name="Chat" options={{
        headerTitle: "Messaging",
        tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={focused ? faComment : faCommentAlt}
        color={color}
        size={20}/>
      }}/>
      <Tabs.Screen name="Event" options={{
        headerTitle: "Events",
        tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={focused ? faPager : faPager}
        color={color}
        size={20}/>
      }}/>

      <Tabs.Screen name="not-found" options={{headerShown: false}}/>

    </Tabs>
   
  );
}

