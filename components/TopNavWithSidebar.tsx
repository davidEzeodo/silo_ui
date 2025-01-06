import React, { useState, useRef } from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Dimensions } from "react-native";
import {TopNav} from "./TopNav";
import Sidebar from "../components/SideBar";

export default function TopNavWithSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const sidebarAnimation  = useRef(new Animated.Value(-Dimensions.get("window").width * 0.75)).current; // Sidebar off-screen

  const toggleSidebar = (open: boolean) => {
    Animated.timing(sidebarAnimation , {
        toValue: open ? 0 : -250, // Slide in or out

        duration: 300,
        useNativeDriver: true,
    }).start(() => {
        setIsSidebarOpen(open); // Update state after animation
    });
};
  return (
    <View style={styles.container}>
            
            <TouchableWithoutFeedback onPress={() => toggleSidebar(false)}>
                {isSidebarOpen && <View style={styles.overlay} />}
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.sidebar, { transform: [{ translateX: sidebarAnimation }] }]}>
                <Sidebar />
            </Animated.View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  sidebar: {
    position: "absolute",
    top: 70, // Below TopNav
    left: 0,
    width: "75%", // Sidebar width
    height: "100%",
    backgroundColor: "#e0e0e0",
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
},
});
