import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Animated } from "react-native";
import { TopNav } from "@/components/TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLightbulb, faPlus, faPager, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";
import {useState, useEffect} from "react";

export default function DashboardEventUtility(){
    const [animatedValue] = useState(new Animated.Value(0));

    useEffect(() => {
      const animate = () => {
        Animated.loop(
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 3000, // Adjust speed of animation
            useNativeDriver: false,
          })
        ).start();
      };
      animate();
    }, [animatedValue]);
    const translateX = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['-100%', '100%'], // Moves the gradient from left to right
    });
    return(
        <View style={styles.utilityContainer2}>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.textStyle}>
                Events
                </Text>
            </View>
                <TouchableOpacity style={styles.noteIconGrid}>
                <FontAwesomeIcon icon={faPlus} size={30} color="#639BCF"/>
                </TouchableOpacity>
            <Animated.View style={styles.infoContainer}>
                {/* Gradient Animation */}
                <Animated.View
                style={[
                    styles.gradientWrapper,
                    { transform: [{ translateX }] }, // Moving gradient
                ]}
                >
                    <LinearGradient
                    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0)']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.gradient}
                    />
                </Animated.View>
                {/* Content */}
                <View>
                    <FontAwesomeIcon icon={faPager} color="yellow" />
                </View>
                <Text style={styles.infoText}>
                    Spark engagement with events everyone will remember.
                </Text>
            </Animated.View>
        </View>
    );
};
const styles = StyleSheet.create({
    utilityContainer1:{
        // borderWidth:1,
        width: "95%",
        height: 150,
        position: "absolute",
        top: 360,
        flexDirection: "row",
      },
      sectionTitleContainer:{
        // borderWidth: 1,
        width: 60,
        height: 20,
      },
      noteIconGrid:{
        borderWidth: 1,
        borderColor: "rgb(226, 226, 226)",
        width: "30%",
        height: "70%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(255, 252, 252)",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        position: "absolute",
        top: 30
      },
      textStyle:{
        fontSize: 11,
        fontWeight: 500,
        paddingLeft: 10
      },
      numberContainer:{
        borderLeftWidth:1,
        width: "40%",
        height: 53,
        position: "absolute",
        right: 0,
        top:40,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "rgb(226, 226, 226)",
      },
      numberValue:{
        fontSize: 25
      },
      utilityContainer2:{
        // borderWidth:1,
        width: "95%",
        height: 150,
        position: "absolute",
        top: 520,
        flexDirection: "row",
      },
      infoContainer: {
        position: 'absolute',
        right: 0,
        top: 30,
        width: '66%',
        height: '70%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D2A4C',
        overflow: 'hidden', // Ensure gradient stays inside
      },
      gradientWrapper: {
        ...StyleSheet.absoluteFillObject,
      },
      gradient: {
        width: '200%', // Wide enough for smooth animation
        height: '100%',
      },
        infoText:{
        // borderWidth: 1,
        padding: 15,
        fontSize: 12,
        fontStyle: "italic",
        color: "#FFFFFF"
      },
      engaementSummaryContainer:{
       borderWidth: 1,
       position: "absolute",
       top: 643,
       width: "95%",
       height: "70%"
    
      }
})