import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export default function UserCommunitySummary(){
    return(
        <View style={styles.communitySummaryContainer}>
                    <TouchableOpacity style={styles.communitiesUnderMgt}>
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
                    </TouchableOpacity>
        
                    <TouchableOpacity style={styles.communityMemberships}>
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
                    </TouchableOpacity>
              </View>
    )
}
const styles = StyleSheet.create({
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
})