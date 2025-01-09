import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Animated } from "react-native";
import { TopNav } from "@/components/TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLightbulb, faPlus, faPager, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";
import {useState, useEffect} from "react";

export default function Home() {
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
  return (
    <View style={styles.parentContainer}>
      <TopNav/>
    
      <TouchableOpacity style={styles.profileBadgeContainer}>
        <View style={styles.profilePicture}>
          <FontAwesomeIcon icon={faUserCircle} size={50} color="#113B6F"/>
        </View>

        <View style={styles.profileDetailsContainer}>
          <View style={styles.userNameContainer}>
            <Text style={styles.userNameText}>Mary Jane</Text>
          </View>
          <View style={styles.userDescriptionContainer}>
            <Text>
            Founder of <Text style={styles.highlight}>Ingressive For Good</Text>...
            </Text>
          </View>
        </View>
      </TouchableOpacity>

        <View style={styles.communitySummaryContainer}>
          <View style={styles.communitiesUnderMgt}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>
                Communities Under Management 
              </Text>
              <View style={styles.numberContainer}>
                <Text style={styles.numberValue}>
                  0
                </Text>
              </View>
            </View>
        </View>
        <View style={styles.communityMemberships}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>
              Memberships
            </Text>
            <View style={styles.numberContainer}>
              <Text style={styles.numberValue}>
                0
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.utilityContainer1}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.textStyle}>
            Notes
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
            <FontAwesomeIcon icon={faLightbulb} color="yellow"/>
          </View>
          <Text style={styles.infoText}>
            Capture ideas that spark connection.
          </Text>
        </Animated.View>

      </View>

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

    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 252, 252)",
    // borderWidth: 2,
    flexDirection: "column"
  },
  
  profileBadgeContainer:{
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "rgb(226, 226, 226)",
    width:"95%",
    height: 100,
    position: "absolute",
    top: 98,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(255, 252, 252)",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
  },
  profilePicture:{
    // borderWidth: 1,
    position: "absolute",
    right: 5,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  profileDetailsContainer:{
    // borderWidth: 1,
    width: "80%",
    height:50,
    position: "absolute",
    left: 5,
  },
  userNameContainer:{
    // borderWidth: 1,
    height:"50%",
    paddingLeft:5,
  },
  userNameText:{
    fontWeight:500
  },
  userDescriptionContainer:{
    // borderWidth: 1,
    height:"50%",
    paddingLeft:5,
  },
  highlight:{
    fontWeight:500
  },
  communitySummaryContainer:{
    // borderWidth:1,
    width: "95%",
    height: 100,
    position: "absolute",
    top: 230,
    flexDirection: "row",
    justifyContent: "space-between",

  },
  communitiesUnderMgt:{
    borderWidth:1,
    borderColor: "rgb(226, 226, 226)",
    height: "100%",
    width: "45%",
    borderRadius:20,
    justifyContent: "center",
    backgroundColor: "rgb(255, 252, 252)",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"

  },
  communityMemberships:{
    borderWidth:1,
    borderColor: "rgb(226, 226, 226)",
    height: "100%",
    width: "45%",
    borderRadius:20,
    justifyContent: "center",
    backgroundColor: "rgb(255, 252, 252)",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
  },
  textContainer:{
    borderBottomWidth:1,
    borderColor: "rgb(226, 226, 226)",
    width: "100%",
    height: 40,
    position: "absolute",
    top: 6
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
});
