import { Text, View, StyleSheet, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { TopNav } from "@/components/TopNav";

const PlaceholderImage = require("../../assets/silo_assets/silo_splash_screen.svg")

export default function Index() {
  return (
    <View style={styles.parentContainer}>
      <TopNav/>
      <View style={styles.postContainer}>
        <View style={styles.textContainer}>
          <Text 
          style={styles.textHeadingStyles}
          >
            No activities yet.
          </Text>
          <Text 
          style={styles.textBodyStyles}
          >
            Break the ice, make the first post.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
    // borderStyle: "solid",
    // borderColor: "red",
    // borderWidth: 2,
    flexDirection: "column"
  },
  postContainer:{
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 20,
    position:"absolute",
    top:90,
    width: "100%",
    height: "83%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer:{
    // borderStyle: "solid",
    // borderColor: "blue",
    // borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeadingStyles:{
    color: "white",
    // borderStyle: "solid",
    // borderColor: "blue",
    // borderWidth: 2,
    width: "100%",
    height: "30%",
    fontSize: 20
  },
  textBodyStyles: {
    color: "white",
    // borderStyle: "solid",
    // borderColor: "blue",
    // borderWidth: 2,
  },
});
