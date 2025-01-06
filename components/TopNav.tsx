import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faBell, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { EventEmitter } from "events";
import Sidebar  from "../components/SideBar";

export function TopNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const eventEmitter = new EventEmitter();
  let message: string = "touched";
  const displayMessage = () =>{
    console.log(message)
  }
  const handleTouch = () => { setIsSidebarOpen(true); displayMessage() }


  useEffect(() => {
    //step 1 register event emitter
    const handleSidebarEvent = eventEmitter.addListener("tap", () => {
      handleTouch();
    })
    //step 2 emit an event
    eventEmitter.emit("tap", {handleSidebarEvent})
    //step 3 respond to event
    handleSidebarEvent.removeListener;
    //step 4 close listener
  }, [isSidebarOpen])

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
