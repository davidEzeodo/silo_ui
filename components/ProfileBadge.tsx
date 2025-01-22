import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";


export default function ProfileBadge(){
    return(
        <TouchableOpacity style={styles.profileBadgeContainer}>
        <View style={styles.profilePicture}>
            <FontAwesomeIcon icon={faUserCircle} size={50} color="#113B6F"/>
        </View>

        <View style={styles.profileDetailsContainer}>
            <View style={styles.userNameContainer}>
                <Text style={styles.userNameText}>
                    Mary Jane
                </Text>
            </View>
            <View style={styles.userDescriptionContainer}>
                <Text>
                    Founder of  
                    <Text style={styles.highlight}> Ingressive For Good
                    </Text>...
                </Text>
            </View>
        </View>
        </TouchableOpacity>
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
        // borderWidth: 1,
        width: "80%",
        height:50,
        position: "absolute",
        left: 5,
      },
      userNameContainer:{
        // borderWidth: 1,
        height:"50%",
        paddingLeft:5,
      },
      userNameText:{
        fontWeight:500
      },
      userDescriptionContainer:{
        // borderWidth: 1,
        height:"50%",
        paddingLeft:5,
      },
      highlight:{
        fontWeight:500
      },
})