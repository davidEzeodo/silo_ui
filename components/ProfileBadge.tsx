import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faPlusCircle, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { useFonts } from "expo-font";
import { router } from "expo-router";

export default function ProfileBadge(){
  const [fontsLoaded] = useFonts({
      "RobotoMono-Regular": require("@/assets/fonts/RobotoMono-Regular.ttf"),
      "Lato-Regular": require("@/assets/fonts/Lato-Regular.ttf")
    });
    const handleCreateCommunity = () => {
      router.push("/(community)/CreateCommunity")
    }
    return(
      fontsLoaded ?(
        <TouchableOpacity style={styles.profileBadgeContainer} onPress={handleCreateCommunity}>
          <View style={styles.profilePicture}>
              <FontAwesomeIcon icon={faPlusCircle} size={50} color="#113B6F"/>
          </View>

          <View style={styles.profileDetailsContainer}>
              <View style={styles.userNameContainer}>
                  <Text style={styles.userNameText}>
                      Create community
                  </Text>
              </View>
          </View>
        </TouchableOpacity>
      ): null 
    )
}

const styles = StyleSheet.create({
    profileBadgeContainer:{
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "rgb(226, 226, 226)",
        width:"95%",
        height: 100,
        position: "absolute",
        top: 98,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(255, 252, 252)",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      },
      profilePicture:{
        // borderWidth: 1,
        position: "absolute",
        right: 5,
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
      },
      profileDetailsContainer:{
        width: "80%",
        // height:50,
        position: "absolute",
        left: 5,
        padding: 5
      },
      userNameContainer:{
        // borderWidth: 1,
        height:"50%",
        paddingLeft:5,
      },
      userNameText:{
        fontWeight:500,
        fontFamily: "Lato-Regular",        
      },
      userDescriptionContainer:{
        // borderWidth: 1,
        height:"50%",
        paddingLeft:5,
        fontFamily: "Lato-Regular",
      },
      highlight:{
        fontFamily: "Lato-Regular",
      },
})