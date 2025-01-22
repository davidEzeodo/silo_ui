import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert,
    SafeAreaView
} from "react-native";
import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { router } from "expo-router";
import {useFonts} from "expo-font";
import {useHeaderHeight} from "@react-navigation/elements";

export default function CreateCommunityProfile(){
        
    const [communityName, setCommunityName] = useState("");
    const [theme, setTheme] = useState("");
    const [dateEstablished, setDateEstablished] = useState("");
    const [guidelines, setGuidelines] = useState("");
    const [isChecked, setChecked] = useState(false);
    const headerHeight = useHeaderHeight();

    const [fontsLoaded] = useFonts({
        "Kanit-Regular": require("../../assets/fonts/Kanit-Regular.ttf"),
        "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf"),
        "Parkinsans-Medium": require("../../assets/fonts/Parkinsans-Medium.ttf"),
    })
    if(!fontsLoaded){
        return undefined;
    }

    const handleSignup = async () =>{
        if(!isChecked){
            Alert.alert("Terms & Conditions", "You must accept the terms and conditions to proceed.")
            return;
        }
        const formData = new FormData();
        formData.append("communityName", communityName);
        formData.append("theme", theme);
        formData.append("dateEstablished", dateEstablished);
        formData.append("guidelines", guidelines);

        try{
            const response = await fetch("http://localhost:8080/createUser?", {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body: formData,
            });

            if(response.ok){
                const data = await response.json();
                Alert.alert("Signup Successful",`Welcome, ${data.communityName}!`)
                router.push({
                    pathname: "/CreateCommunityProfile",
                    params: { userId: data.userId },
                })
            }else{
                const error = await response.json();
                Alert.alert("Sign Failed", error.message || "An error occured.")
            }
            } catch(error){
                console.error("Signup Error: ", error);
                Alert.alert("Error: ", `${error}`)
        }
    }
    return (
       <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

            </ScrollView>
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Takes up the full screen
        backgroundColor: "white", // Optional for better UI
        borderWidth: 5,
        borderColor: "red",
    },
    scrollContent:{
        borderWidth: 1,
        padding: 30
    },
    headingText: {
        // borderWidth: 1,
        marginBottom: 1,
        fontFamily: "Lato-Regular",
        fontSize: 30,
        fontWeight: 500,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        // borderWidth: 1,
        width: "80%",
        height: 105,
        justifyContent: "space-between",
        marginTop: 10,
        gap: 20
    },
    inputField: {
        borderBottomWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontFamily: "Kanit-Regular",
    },
    message:{
        marginTop: 70,
        // borderWidth: 1,
        flexDirection: "row",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        width: "65%"
    },
    checkbox: {
        margin: 8,
      },
    signupButton: {
        borderWidth: 1,
        borderRadius: 25,
        width: "60%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: "rgb(3, 38, 85)",
        marginTop: 20,
    },
});
