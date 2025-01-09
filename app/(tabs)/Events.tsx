import { TopNav } from "@/components/TopNav";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Post(){
    return(
        <View style={styles.parentContainer}>
            <TopNav/>
              <View style={styles.postContainer}>
                <View style={styles.textContainer}>
                  <Text 
                  style={styles.textHeadingStyles}
                  >
                    Create events here. 
                  </Text>
                  <Text 
                  style={styles.textBodyStyles}
                  >
                    Plan, schedule and set reminders.
                  </Text>
                </View>
              </View>
        </View>
    )
};

const styles = StyleSheet.create({
    parentContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FAF9F9",
      // borderStyle: "solid",
      // borderColor: "red",
      // borderWidth: 2,
      flexDirection: "column"
    },
    postContainer:{
      // borderStyle: "solid",
      // borderColor: "white",
      // borderWidth: 2,
      borderRadius: 20,
      position:"absolute",
      top:90,
      width: "100%",
      height: "83%",
      justifyContent: "center",
      alignItems: "center",
    },
    textContainer:{
      justifyContent: "center",
      alignItems: "center",
    },
    textHeadingStyles:{
      color: "black",
      // borderStyle: "solid",
      // borderColor: "blue",
      // borderWidth: 2,
      width: "100%",
      height: "30%",
      fontSize: 20
    },
    textBodyStyles: {
      color: "black",
      // borderStyle: "solid",
      // borderColor: "blue",
      // borderWidth: 2,
    },
  });
  