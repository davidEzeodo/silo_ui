import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserPlus, faGear, faInfoCircle, faDoorOpen, faClose } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar(){
    return(
        <>
        <View style={styles.sideBarContainer}>
            <TouchableOpacity style={styles.closeButton}>
                <FontAwesomeIcon icon={faClose} size={30}/>
            </TouchableOpacity>
            <View style={styles.channelContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Channels</Text>
                </View>
                <TouchableOpacity style={styles.labelOption}>
                    <Text>Create Channel</Text>
                </TouchableOpacity>
                <View style={styles.labelOption}>
                    <Text>All Channels</Text>
                    <TouchableOpacity>
                        <Text>...</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.islandGroup}>
                    <TouchableOpacity style={styles.labelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faUserPlus} size={15} color={"black"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Add member</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.labelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faGear} size={15} color={"black"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Settings</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.labelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faInfoCircle} size={15} color={"black"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Help</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.labelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faDoorOpen} size={15} color={"black"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Log out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                 
                
            </View>
              
        </View>
        </>
        
    );
}

const styles = StyleSheet.create({
    sideBarContainer:{
        position: "absolute",
        top: 0,
        left: 0,
        borderWidth: 2,
        width: 250,
        height: "100%",
        zIndex:1000,
        borderColor: "rgba(247, 247, 247, 10)",
        backgroundColor: 'rgba(247, 247, 247, 10)',
      },
      closeButton:{
        // borderWidth: 1,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        marginTop:21

      },
      channelContainer:{
        margin: 20,
      },
      labelContainer:{
        borderBottomWidth: 1,
        padding: 10,
    
      },
      labelOption:{
        marginLeft: 10,
        paddingTop: 20,
      },
      islandGroup:{
        // borderWidth: 1,
        position: "absolute",
        top: 400,
        width:"100%"
      },
      islandLabelOptions:{
        // borderWidth: 1,
        flexDirection: "row",
      },
      islandLabelIcon:{
        // borderWidth: 1,
        padding: 5,
        justifyContent: "center",
      },
      islandLabelText:{
        // borderWidth: 1,
        padding: 5,
        justifyContent: "center",
      },
      label:{
        color: "black",
        fontSize: 15,
        fontWeight: 800,
      }
});