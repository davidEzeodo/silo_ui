import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faBell, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { EventEmitter } from "events";
import SidePanel from "./SidePanel";
import { listeners } from "process";

const eventEmitter = new EventEmitter();

export function TopNav() {
  const [isSidebarPressed, setIsSidebarPressed] = useState(false);

  const handleTouch = () => { 
    eventEmitter.emit("tap");
  }

  useEffect(() => {
    //step 1 register event emitter
    const handleSidebarListener = () => {
      setIsSidebarPressed((prevState) => !prevState)
    }
    eventEmitter.addListener("tap", handleSidebarListener);
    //step 2 clean up
    return () => {
      eventEmitter.removeListener("tap", handleSidebarListener);
    }
  }, [])

    return(
        <>
            <View style={styles.topNav}>
                <TouchableOpacity onPress={handleTouch} style={styles.menuBarIconContainer}>
                    <FontAwesomeIcon icon={faBars} size={20} color={"white"}/>
                   
                </TouchableOpacity>
                <View style={styles.topNavUtilityButtons}>
                    <TouchableOpacity style={styles.navUtilItems}>
                        <FontAwesomeIcon icon={faSearch} size={20} color={"white"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navUtilItems}>
                        <FontAwesomeIcon icon={faBell} size={20} color={"white"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navUtilItems}>
                        <FontAwesomeIcon icon={faUser} size={20} color={"white"} />
                    </TouchableOpacity>
                </View>
            </View>
            {isSidebarPressed && <SidePanel/>}         
        </>
    );
}

const styles = StyleSheet.create({
  topNav:{
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: 20,
    width: "100%",
    height: 70,
    flexDirection: "row",
    position: "absolute",
    top: 0,
    justifyContent: "space-between",
    // alignItems: "center"
  },
  menuBarIconContainer:{
    // borderWidth: 2,
    // borderColor: "red",
    // borderStyle: "solid",
    width: "14.5%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  topNavUtilityButtons:{
    // borderWidth: 2,
    // borderColor: "red",
    // borderStyle: "solid",
    flexDirection: "row",
    width: "50%",
    justifyContent: "flex-end",
    
    
  },
  navUtilItems:{
    // borderWidth: 2,
    // borderColor: "red",
    // borderStyle: "solid",
    flex: 1,
    width: "12%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyles: {
    color: "white",
    
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#ffff"
  }
})
