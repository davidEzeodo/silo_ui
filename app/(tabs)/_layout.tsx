import { Tabs } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"; 
import { faComment, faCommentAlt, faHome, faHomeAlt, faBullhorn, faListDots} from "@fortawesome/free-solid-svg-icons";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#25292e",
            headerStyle:{
              backgroundColor: "#25292e"
            },
            headerShadowVisible: false,
            headerTintColor: "#fff",
            tabBarStyle: {
                backgroundColor: "#FAF9F9",
                // borderRadius: 50,
                // marginHorizontal:10,
                // marginVertical:10,
                height: 70,
            },
            
            
        }}
    >
    

      <Tabs.Screen name="index" options={{
        headerTitle: "",
        tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={focused ? faHome : faHomeAlt}
        color={color}
        size={20}/>
      }}/>

      <Tabs.Screen name="Post" options={{
        headerTitle: "post",
        tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={focused ? faBullhorn : faBullhorn}
        color={color}
        size={20}/>
      }}/>
      <Tabs.Screen name="Chat" options={{
        headerTitle: "chat",
        tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={focused ? faComment : faCommentAlt}
        color={color}
        size={20}/>
      }}/>
      <Tabs.Screen name="Note" options={{
        headerTitle: "note",
        tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={focused ? faListDots : faListDots}
        color={color}
        size={20}/>
      }}/>

      <Tabs.Screen name="not-found" options={{headerShown: false}}/>

    </Tabs>
   
  );
}

