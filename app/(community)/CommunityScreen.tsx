import { faArrowDown, faBullhorn, faCaretDown, faPeopleGroup,faCaretUp, faUser, faUserCircle, faUserPlus, faPersonBooth } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { 
    View, 
    Text, 
    SafeAreaView, 
    ScrollView, 
    StyleSheet ,
    TouchableOpacity
    } from "react-native";
import {useState} from "react";

export default function CommunityScreen(){
    const [visibleSections, setVisibleSections] = useState({
        channels: true,
        members: true,
        messages: true,
        events: true,
        campaigns: true,
    })
    const toggleSection = (section: keyof typeof visibleSections) => {
        setVisibleSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    }
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView
            contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.communityNameTag}>
                    <View style={styles.communityLogo}>
                        <FontAwesomeIcon icon={faPeopleGroup} size={30} color={"#0B2950"}/>
                    </View>
                    <View style={styles.communityDetails}>
                        <Text style={styles.headingText}>Semicolon Natives</Text>
                        <Text style={styles.subHeadingText}>A community for softare engineers.</Text>
                        <Text>1 member</Text>
                    </View>
                </View>

                <View style={styles.featureContainer}>
                    <View style={styles.sectionHeading}>
                        <Text>Channels</Text>
                        <TouchableOpacity onPress={() => toggleSection("channels")}>
                            <FontAwesomeIcon icon={visibleSections.channels ? faCaretUp : faCaretDown} color={"#0B2950"}/>
                        </TouchableOpacity>
                    </View>
                    {visibleSections.channels && (
                        <>
                            <View>
                                <Text># announcements</Text>
                                <Text># onboardingRoom</Text>
                            </View>
                        </>
                    )}
                    <TouchableOpacity style={{flexDirection: "row", gap: 20, alignItems: "center"}}>
                        <FontAwesomeIcon icon={faPersonBooth} size={15} color={"#0B2950"}/>
                        <Text >Create channel</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.featureContainer}>
                    <View style={styles.sectionHeading}>
                        <Text>Members</Text>
                        <TouchableOpacity onPress={() => toggleSection("members")}>
                            <FontAwesomeIcon icon={visibleSections.members ? faCaretUp : faCaretDown} color={"#0B2950"}/>
                        </TouchableOpacity>
                    </View>
                    {visibleSections.members && (
                        <>
                            <View style={styles.userNameTagContainer}>
                                <FontAwesomeIcon icon={faUserCircle} size={20} color={"#0B2950"}/>
                                <Text>You</Text>
                            </View>
                        </>
                    )}
                    
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faUserPlus} color={"#0B2950"}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.featureContainer}>
                    <View style={styles.sectionHeading}>
                        <Text>Direct messages</Text>
                        <TouchableOpacity onPress={() => toggleSection("messages")}>
                            <FontAwesomeIcon icon={visibleSections.messages ? faCaretUp : faCaretDown} color={"#0B2950"}/>
                        </TouchableOpacity>
                    </View>
                    {visibleSections.messages && (
                        <>
                            <View>
                                <TouchableOpacity style={styles.userNameTagContainer}>
                                    <FontAwesomeIcon icon={faUserCircle} size={20} color={"#0B2950"}/>
                                    <Text>Deola Adekunle</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                    
                </View>
                <View style={styles.featureContainer}>
                    <View style={styles.sectionHeading}>
                        <Text>Community Events: 1</Text>
                        <TouchableOpacity onPress={() => toggleSection("events")}>
                            <FontAwesomeIcon icon={visibleSections.events ? faCaretUp : faCaretDown} color={"#0B2950"}/>
                        </TouchableOpacity>
                    </View>
                    {visibleSections.events && (
                        <>
                            <View style={styles.userNameTagContainer}>
                                <TouchableOpacity>
                                    <Text>member onboarding</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                    
                </View>
                <View style={styles.featureContainer}>
                    <View style={styles.sectionHeading}>
                        <Text>Crowdfunding campaigns: 0</Text>
                        <TouchableOpacity onPress={() => toggleSection("campaigns")}>
                            <FontAwesomeIcon icon={visibleSections.campaigns ? faCaretUp : faCaretDown} color={"#0B2950"}/>
                        </TouchableOpacity>
                    </View>
                    {visibleSections.campaigns && (
                        <>
                            <View style={styles.userNameTagContainer}>
                                <Text>none</Text>
                            </View>
                        </>
                    )}
                    
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // borderWidth: 1,
    },
    scrollContent:{
        // borderWidth: 1,
        gap:10
    },
    communityNameTag:{
        borderBottomWidth: 1,
        backgroundColor: "rgb(255, 252, 252)",
        borderColor: "#0B2950",
        flexDirection: "row",
        gap: 20,
        padding: 10,
        borderRadius: 5
    },
    communityLogo:{
        borderWidth: 1,
        borderColor: "#0B2950", 
        width: 80,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center"
    },
    communityDetails:{
        // borderWidth: 1,
    },
    headingText:{
        fontSize: 25,
        fontWeight: 500
    },
    subHeadingText:{
        fontSize: 20,
    },
    featureContainer:{
        backgroundColor: "rgb(255, 252, 252)",
        borderColor: "rgb(255, 252, 252)",
        padding: 20,
        gap:20
    },
    sectionHeading:{
        backgroundColor: "rgb(255, 252, 252)",
        borderColor: "rgb(255, 252, 252)",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    channelHeading:{
        // borderWidth: 1, 
        width: 70,
        borderRadius:5,
    },
    channelUpdate:{
        fontSize: 15,
    },
    userNameTagContainer:{
        // borderWidth:1,
        flexDirection:"row",
        gap: 20,
        
    }
})