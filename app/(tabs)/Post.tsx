import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserPlus, faGear, faInfoCircle, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

export default function Post(){
    return(
        <View style={styles.sideBarContainer}>
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
                    <TouchableOpacity style={styles.islandlabelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faUserPlus} size={15} color={"black"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Add member</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.islandlabelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faGear} size={15} color={"black"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Settings</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.islandlabelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faInfoCircle} size={15} color={"black"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Help</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.islandlabelOption}>
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
    );
}

const styles = StyleSheet.create({
    sideBarContainer:{
        borderWidth: 2,
        borderColor: "rgba(0, 0, 0, 0.1)",
        backgroundColor: 'rgba(77, 77, 77, 0.1)',
        zIndex: 100,
        borderEndEndRadius: 5,
        borderTopRightRadius: 5,
        width: 250,
        height: "100%",
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
      islandlabelOption:{
        marginLeft: 5,
        paddingTop: 20,
        paddingBottom: 5,
      },
      islandGroup:{
        // borderWidth: 1,
        position: "absolute",
        top: 380,
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