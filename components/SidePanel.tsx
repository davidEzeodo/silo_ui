import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChartLine, faClose, faDoorOpen, faGear, faHeadphones, faInfo, faInfoCircle, faRobot, faUserCircle, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useFonts } from "expo-font";

type Props = {
  closeSidePanel: () => void;
};

export default function SidePanel({ closeSidePanel }: Props) {
  const slideAnimation = useRef(new Animated.Value(-260)).current; // Start hidden
  const [isVisible, setIsVisible] = useState(true);
  const [fontsLoaded] = useFonts({
    "RobotoMono-Regular": require("@/assets/fonts/RobotoMono-Regular.ttf"),
    "Lato-Regular": require("@/assets/fonts/Lato-Regular.ttf")
  })

  useEffect(() => {
    // Start animation to slide in
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const closeSidePanelWithAnimation = () => {
    Animated.timing(slideAnimation, {
      toValue: -260, // Slide out
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsVisible(false); // Ensure component unmounts
      closeSidePanel();
    });
  };

  if (!isVisible) return null;

  return (
    <Animated.View
      style={[
        styles.sideBarContainer,
        { transform: [{ translateX: slideAnimation }] },
      ]}
    >
      <TouchableOpacity style={styles.closeButton} onPress={closeSidePanelWithAnimation}>
        <FontAwesomeIcon icon={faClose} size={25} color={"white"}/>
      </TouchableOpacity>
      <View style={styles.channelContainer}>
        <Text style={styles.label}>Channels</Text>
        <TouchableOpacity style={styles.labelOption}>
          <Text style={{ color: "#FAF9F9" }}>Create Channel</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.featuresContainer}>
        <TouchableOpacity style={styles.featureButton}>
          <FontAwesomeIcon icon={faUserPlus} size={16} color={"white"}/>
          <Text style={{ color: "#FAF9F9" }}>Add member</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton}>
          <FontAwesomeIcon icon={faHeadphones} size={16} color={"white"}/>
          <Text style={{ color: "#FAF9F9" }}>Meet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton}>
          <FontAwesomeIcon icon={faChartLine} size={16} color={"white"}/>
          <Text style={{ color: "#FAF9F9" }}>Track Engagement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton}>
          <FontAwesomeIcon icon={faRobot} size={16} color={"white"}/>
          <Text style={{ color: "#FAF9F9" }}>Automate Workflow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton}>
          <FontAwesomeIcon icon={faGear} size={16} color={"white"}/>
          <Text style={{ color: "#FAF9F9" }}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton}>
          <FontAwesomeIcon icon={faInfoCircle} size={16} color={"white"}/>
          <Text style={{ color: "#FAF9F9" }}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton}>
          <FontAwesomeIcon icon={faDoorOpen} size={16} color={"white"}/>
          <Text style={{ color: "#FAF9F9" }}>Log out</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  sideBarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRightWidth: 5,
    borderColor: "rgb(253, 253, 253)",
    backgroundColor: "#0B2950", // Test visibility
    width: 300,
    height: Dimensions.get("window").height, // Dynamically set height
    zIndex: 100,
    elevation: 10,
    // justifyContent:"space-between" 
  },
  closeButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 15,
  },
  channelContainer: {
    // borderWidth:1,
    // borderColor: "white",
    paddingLeft: 5,
    margin: 20,
  },
  label: {
    borderBottomWidth: 1,
    borderColor: "white",
    color: "#FAF9F9",
    fontSize: 15,
    fontWeight: "800",
    paddingBottom:10
  },
  labelOption: {
    marginTop: 20,
  },
  featuresContainer:{
    // borderWidth:1,
    // borderColor: "white",
    paddingLeft: 5,
    margin: 20,
    height: "50%",
    gap:30,
    paddingTop: 30,
    position:"absolute",
    bottom:120,
    width: "80%"
  },
  featureButton:{
    // borderWidth:1,
    // borderColor: "white",
    gap: 15,
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
    
  }
});
