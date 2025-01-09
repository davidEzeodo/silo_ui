import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent, Animated } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserPlus, faGear, faInfoCircle, faDoorOpen, faClose, faHeadphones, faChartLine, faRobot } from "@fortawesome/free-solid-svg-icons";
import React, {useRef, useEffect, useState} from "react";

type Props = {
    closeSidePanel: () => void
}

export default function Sidebar({ closeSidePanel }: Props){
    const slideAnimation = useRef(new Animated.Value(-260)).current;
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        Animated.timing(slideAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [slideAnimation]);
    const closeSidePanelWithAnimation = () => {
        Animated.timing(slideAnimation, {
            toValue:-260,
            duration:300,
            useNativeDriver:true,
        }).start(() => {
            setIsVisible(false);
            closeSidePanel();
        });
    };
    if(!isVisible)return null;
    return(
        <Animated.View style={[styles.sideBarContainer, {transform: [{translateX: slideAnimation}] }]}>
        <View style={styles.sideBarContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={closeSidePanelWithAnimation}>
                <FontAwesomeIcon icon={faClose} size={30} color="white"/>
            </TouchableOpacity>
            <View style={styles.channelContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Channels</Text>
                </View>
                <TouchableOpacity style={styles.labelOption}>
                    <Text style={{color: "#FAF9F9"}}>Create Channel</Text>
                </TouchableOpacity>
                <View style={styles.labelOption}>
                    <Text style={{color: "#FAF9F9", marginTop: 10}}>All Channels</Text>
                    <TouchableOpacity>
                        <Text style={{color: "#FAF9F9", marginTop: 5}}>...</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.islandGroup}>
                    <TouchableOpacity style={styles.labelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faUserPlus} size={15} color={"#FAF9F9"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Add member</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.labelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faHeadphones} size={15} color={"#FAF9F9"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Meet</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.labelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faChartLine} size={15} color={"#FAF9F9"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Track Engagement</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.labelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faRobot} size={15} color={"#FAF9F9"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Automate Workflow</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.labelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faGear} size={15} color={"#FAF9F9"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Account Settings</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.labelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faInfoCircle} size={15} color={"#FAF9F9"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Help</Text>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.labelOption}>
                        <View style={styles.islandLabelOptions}>
                            <View style={styles.islandLabelIcon}>
                                <FontAwesomeIcon icon={faDoorOpen} size={15} color={"#FAF9F9"}/>
                            </View>
                            <Text style={styles.islandLabelText}>Log out</Text>
                        </View>
                    </TouchableOpacity>
                </View>           
            </View>      
        </View>
        </Animated.View>
        
    );
}

const styles = StyleSheet.create({
    sideBarContainer:{
        position: "absolute",
        top: 0,
        left: -3,
        borderRightWidth: 5,
        width: 260,
        height: "100%",
        zIndex:1000,
        borderColor: "rgb(253, 253, 253)",
        backgroundColor: '#0B2950',
      },
      closeButton:{
        // borderWidth: 1,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        marginTop:15
      },
      channelContainer:{
        margin: 20,
      },
      labelContainer:{
        borderBottomWidth: 1,
        borderColor: "#FAF9F9",
        padding: 10,
    
      },
      labelOption:{
        marginLeft: 10,
        paddingTop: 20,
      },
      islandGroup:{
        // borderWidth: 1,
        position: "absolute",
        top: 200,
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
        color: "#FAF9F9",
      },
      label:{
        color: "#FAF9F9",
        fontSize: 15,
        fontWeight: 800,
      }
});