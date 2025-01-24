import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChartLine,
  faClose,
  faDoorOpen,
  faGear,
  faHeadphones,
  faInfoCircle,
  faPersonBooth,
  faRobot,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useFonts } from "expo-font";
import InviteMemberModal from "./Modal/AddMemberModal";
import { TextInput } from "react-native";

type Props = {
  closeSidePanel: () => void;
};

export default function SidePanel({ closeSidePanel }: Props) {
  const slideAnimation = useRef(new Animated.Value(-300)).current; // Start hidden
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isAddMemberModalVisible, setIsAddMemberModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    "RobotoMono-Regular": require("@/assets/fonts/RobotoMono-Regular.ttf"),
    "Lato-Regular": require("@/assets/fonts/Lato-Regular.ttf"),
  });

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
      toValue: -300, // Slide out
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsVisible(false); // Ensure component unmounts
      closeSidePanel();
    });
  };

  const handleAddMember = () => {
    setIsVisible(false);
    setIsAddMemberModalVisible(true);
  };

  if (!fontsLoaded) return <Text>Loading...</Text>;

  return (
    <>
      {isVisible && (
        <Animated.View
          style={[
            styles.sideBarContainer,
            { transform: [{ translateX: slideAnimation }] },
          ]}
        >
          <TouchableOpacity
            style={styles.closeButton}
            onPress={closeSidePanelWithAnimation}
          >
            <FontAwesomeIcon icon={faClose} size={25} color={"white"} />
          </TouchableOpacity>
          <View style={styles.channelContainer}>
            <Text style={styles.label}>Channels</Text>
            <TouchableOpacity style={styles.featureButton}>
              <FontAwesomeIcon icon={faPersonBooth} size={16} color={"white"} />
              <Text style={styles.featuresText}>Create Channel</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.featuresContainer}>
            <TouchableOpacity
              style={styles.featureButton}
              onPress={handleAddMember}
            >
              <FontAwesomeIcon icon={faUserPlus} size={16} color={"white"} />
              <Text style={styles.featuresText}>Add member</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureButton}>
              <FontAwesomeIcon icon={faHeadphones} size={16} color={"white"} />
              <Text style={styles.featuresText}>Meet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureButton}>
              <FontAwesomeIcon icon={faChartLine} size={16} color={"white"} />
              <Text style={styles.featuresText}>Track Engagement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureButton}>
              <FontAwesomeIcon icon={faRobot} size={16} color={"white"} />
              <Text style={styles.featuresText}>Automate Workflow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureButton}>
              <FontAwesomeIcon icon={faGear} size={16} color={"white"} />
              <Text style={styles.featuresText}>Account Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureButton}>
              <FontAwesomeIcon icon={faInfoCircle} size={16} color={"white"} />
              <Text style={styles.featuresText}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureButton}>
              <FontAwesomeIcon icon={faDoorOpen} size={16} color={"white"} />
              <Text style={styles.featuresText}>Log out</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
      <Modal
        visible={isAddMemberModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsAddMemberModalVisible(false)}
      >
        
        <InviteMemberModal
          isVisible={isAddMemberModalVisible}
          onClose={() => setIsAddMemberModalVisible(false)}
          title="Invite Member"
          onProceed={() => console.log("Proceed clicked")}
        >
          <TextInput
          onChangeText={setEmail}
          placeholder={"Email"}
          value={email}
          style={[
              isFocused && styles.FirstNameFieldFocused,
          ]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          />
          
        </InviteMemberModal>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  sideBarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRightWidth: 5,
    borderColor: "rgb(253, 253, 253)",
    backgroundColor: "#0B2950",
    width: 300,
    height: Dimensions.get("window").height,
    zIndex: 100,
    elevation: 10,
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
    paddingLeft: 5,
    margin: 20,
  },
  label: {
    borderBottomWidth: 1,
    borderColor: "white",
    color: "#FAF9F9",
    fontSize: 15,
    fontWeight: "800",
    paddingBottom: 10,
    marginBottom: 20,
  },
  featuresContainer: {
    paddingLeft: 5,
    margin: 20,
    gap: 30,
    paddingTop: 30,
    position: "absolute",
    bottom: 120,
    width: "80%",
  },
  featureButton: {
    gap: 15,
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
  },
  featuresText: {
    fontFamily: "Lato-Regular",
    color: "#FAF9F9",
  },
  FirstNameFieldFocused:{
    borderBottomColor: "rgb(3, 38, 85)", // Accent color
    boxShadow: "rgb(3, 38, 85) 1.95px 1.95px 2.6px", // Accent shadow color
},
});
