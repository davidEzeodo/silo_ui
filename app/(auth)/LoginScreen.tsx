import {View, Text, StyleSheet, ScrollView, Keyboard, SafeAreaView, TextInput, TouchableOpacity} from "react-native";
import {useHeaderHeight} from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import React, {useState} from "react";
import CustomModal from "@/components/Modal/CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import useTokenStore from "../../services/Stores/tokenStorage";

export default function LoginScreen(){
    const headerHeight = useHeaderHeight();
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isFocused, setIsFocused] =useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [isResponseGood, setIsResponseGood] = useState(false);
    const [modalProps, setModalProps] = useState({
        isError: true,
        headerText: "Error",
        icon: faTimesCircle,
        color: "red",
    });

    const { setToken } = useTokenStore();
    const dynamicMarginTop = headerHeight + insets.top;

    const [fontsLoaded] = useFonts({
            "Kanit-Regular": require("../../assets/fonts/Kanit-Regular.ttf"),
            "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf")
    });

    if (!fontsLoaded) {
        return undefined;
    }
    const handleSubmission = async () =>{
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        Keyboard.dismiss(); // Dismiss the keyboard before validation
        if (!email.trim() || !emailPattern.test(email)) {
            setModalContent(
                !email.trim()
                    ? "Please enter your email."
                    : "Invalid email format. Please enter a valid email address."
            );
            setModalVisible(true);
            return;
        }
        if(password.trim() === ""){
            setModalContent("No password was entered.");
            setModalVisible(true);
            return;
        }
        const requestData = {
            "email": email,
            "password": password,
        }
        try {
            console.log(requestData);
            const response = await fetch("http://192.168.45.33:8080/logIn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestData)
            });
    
            const responseData = await response.json();
    
            if (response.ok) {
                console.log(responseData)
                setIsResponseGood(true);
                setToken(responseData.token);
                setModalProps({
                    isError: false,
                    headerText: "Success",
                    icon: faCheckCircle,
                    color: "green",
                });
                setModalContent("Login Successful.");
            } else if(!response.ok){
                // const errorData = await response.json();
                    console.error("Error response: ", responseData.data);
                    setModalContent(responseData.data);
                    setModalVisible(true);
                    setModalProps({
                        isError: true,
                        headerText: "Error",
                        icon: faTimesCircle,
                        color: "red",
                });
                return;
            
            }
            setModalVisible(true);
            
        } catch (error) {
            console.log("Error:", error);
            setIsResponseGood(false);
            setModalProps({
                isError: true,
                headerText: "Error",
                icon: faTimesCircle,
                color: "red",
            });
            setModalContent("Something went wrong. Please try again.");
            setModalVisible(true);
        }    
    }
    const handleCloseModal = () =>{
        setModalVisible(false);
        if(isResponseGood){
            router.push("/(tabs)");
            setTimeout(() => {
                router.push("/(tabs)"); // Navigate to the tabs group
            }, 300);
        } 
    }
    return(
        <SafeAreaView style={[styles.container, {marginTop: headerHeight}]}>
            
            
            <ScrollView
            contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.pageHeader}>
                    <Text style={styles.headerStyle}>Login</Text>
                </View>
                <View style={styles.form}>
                    <TextInput
                        onChangeText={setEmail}
                        placeholder={"Email"}
                        value={email}
                        style={[
                            styles.inputField,
                            isFocused && styles.inputFieldFocused,
                        ]}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    <TextInput
                        onChangeText={setPassword}
                        placeholder={"Password"}
                        value={password}
                        style={[
                            styles.inputField,
                            isFocused && styles.inputFieldFocused,
                        ]}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        secureTextEntry={true}
                    />
                </View>
                <View style={{padding:10}}>
                    <TouchableOpacity style={{ marginTop: 0, width: "38%"}}>
                        <Text style={{fontFamily: "Kanit-Regular", color: "#639BCF", fontSize: 11, textDecorationLine: "underline"}}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                

                <View style={{alignItems:"center", paddingTop:30, paddingBottom:30, gap:15}}>
                    <TouchableOpacity style={styles.buttons} onPress={handleSubmission}>
                        <Text style={{color: "white", fontFamily: "Kanit-Regular"}}>Login</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={{fontFamily: "Kanit-Regular", fontSize: 12}}>Don't have an account?</Text>
                    </View>
                    <TouchableOpacity style={styles.buttons} onPress={() => (router.push("/EmailAuthentication"))}>
                        <Text style={{color: "white", fontFamily: "Kanit-Regular"}}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
            <CustomModal
                visible={isModalVisible}
                onClose={handleCloseModal}
                headerText={modalProps.headerText}
                content={
                    <View style={styles.modalContent}>
                        <FontAwesomeIcon icon={modalProps.icon} size={40} color={modalProps.color}/>
                        <Text style={styles.modalText}>{modalContent}</Text>
                    </View>
                }
                buttons={
                    <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                        <Text style={styles.modalButtonText}>
                            {modalProps.isError ? "Try Again" : "Proceed"}
                        </Text>
                    </TouchableOpacity>
                }
            />
        </SafeAreaView>
        
        
    )
};


const styles = StyleSheet.create({
    container: {
        // borderWidth: 5,
        // borderColor: "red",
        flex: 1,
    },
    pageHeader:{
        // borderWidth: 1,
        paddingTop:50,
        paddingBottom:30,
    },
    scrollContent:{
        // borderWidth: 1,
        padding: 30
    },
    headerStyle:{
        fontFamily: "Lato-Regular",
        fontSize: 30
    },
    form:{
        // borderWidth: 1,
        // borderColor: "blue",
        gap: 30
    },
    inputField: {
        borderBottomWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontFamily: "Kanit-Regular",
    },
    inputFieldFocused: {
        borderBottomColor: "rgb(3, 38, 85)", // Accent color
        boxShadow: "rgb(3, 38, 85) 1.95px 1.95px 2.6px", // Accent shadow color
    },
    FirstNameFieldFocused:{
        borderBottomColor: "rgb(3, 38, 85)", // Accent color
        boxShadow: "rgb(3, 38, 85) 1.95px 1.95px 2.6px", // Accent shadow color
    },
    buttons: {
        borderRadius: 25,
        width: "60%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: "rgb(3, 38, 85)",
    },
    modalContent: {
        alignItems: "center",
    },
    modalText: {
        fontSize: 16,
        textAlign: "center",
        color: "#333",
        marginTop: 10,
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: "rgb(3, 38, 85)",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        width: "60%",
    },
    modalButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    },
})
