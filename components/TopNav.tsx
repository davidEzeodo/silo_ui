import { View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faBell, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

export function TopNav(){
    return(
        <>
            <View style={styles.topNav}>
                <View style={styles.menuBarIconContainer}>
                    <FontAwesomeIcon icon={faBars} size={20} color={"white"} />
                </View>
                <View style={styles.topNavUtilityButtons}>
                    <View style={styles.navUtilItems}>
                        <FontAwesomeIcon icon={faSearch} size={20} color={"white"} />
                    </View>
                    <View style={styles.navUtilItems}>
                        <FontAwesomeIcon icon={faBell} size={20} color={"white"} />
                    </View>
                    <View style={styles.navUtilItems}>
                        <FontAwesomeIcon icon={faUser} size={20} color={"white"} />
                    </View>
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
