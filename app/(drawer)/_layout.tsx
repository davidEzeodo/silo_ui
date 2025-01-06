import {Drawer} from "expo-router/drawer"
import { GestureHandlerRootView } from "react-native-gesture-handler";


export function DrawerLayout(){
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
        name="CommunityChannels"
        options={{
          drawerLabel: "Channels",
          title:"CommunityChannels Page"
        }}/>
      </Drawer>
    </GestureHandlerRootView>
  );
}


