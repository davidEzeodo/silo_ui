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
    Keyboard
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import {useFonts} from "expo-font";
import CustomModal from "../../components/Modal/CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import useOtpStore from "../../services/Stores/OtpStore"

export default function OtpValidation() {
    const [otp, setOtp] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [isResponseGood, setIsResponseGood] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalProps, setModalProps] = useState({
        isError: true,
        headerText: "Error",
        icon: faTimesCircle,
        color: "red",
    });

    const [fontsLoaded] = useFonts({
        "Kanit-Regular": require("../../assets/fonts/Kanit-Regular.ttf"),
        "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf")
    });
    // const {otp: storedOtp, setStoreOtp} = useOtpStore();
    const {emailForOtp: storedEmail} = useOtpStore();
    const requestData = {
        otp: otp,
        email: storedEmail
    }
    if(!fontsLoaded){
        return undefined;
    }
    
    const handleVerifyPress = async () => {
        Keyboard.dismiss();
        if (otp.trim() === "") {
            setIsResponseGood(false);
            setModalContent("OTP field cannot be empty.");
            setModalProps({
                isError: true,
                headerText: "Input Error",
                icon: faTimesCircle,
                color: "red",
            });
            setModalVisible(true);
            return;
        }
        try {
            console.log(requestData);
            const response = await fetch("http://192.168.191.33:8080/verifyOtp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestData)
            });
    
            const responseData = await response.json();
    
            if (response.ok) {
                setIsResponseGood(true);
                setModalProps({
                    isError: false,
                    headerText: "Success",
                    icon: faCheckCircle,
                    color: "green",
                });
                setModalContent(responseData.message || "OTP validation successful.");
            } else {
                setIsResponseGood(false);
                setModalProps({
                    isError: true,
                    headerText: "Error",
                    icon: faTimesCircle,
                    color: "red",
                });
                setModalContent(responseData.message || "Validation failed: OTP is incorrect.");
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
    };
    const handleCloseModal = () =>{
        if(isResponseGood){
            setModalVisible(false);
            router.push("/SignupScreen");
        }else{
            setModalVisible(false);
        }   
    }
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
            <ScrollView style={styles.formContainer} 
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            >
                <View style={styles.contentArea} >
                    <Text style={styles.headingText}>OTP Validation</Text>
                    <View style={styles.subHeadingContainer}>
                        <Text style={styles.subHeadingText}>
                        Enter the code sent to your email. 
                        Check inbox or spam.
                        </Text>
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <TextInput
                            onChangeText={setOtp}
                            placeholder={"101010"}
                            placeholderTextColor={"gray"}
                            value={otp}
                            style={[
                                styles.inputField,
                                isFocused && styles.inputFieldFocused, // Apply focused style
                            ]}
                            onFocus={() => setIsFocused(true)} // Set focus state
                            onBlur={() => setIsFocused(false)} // Reset focus state
                        />
                    </View>
                </View>
                    <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyPress}>
                        <Text style={{color: "white", fontFamily: "Kanit-Regular"}}>Verify</Text>
                    </TouchableOpacity>
            </ScrollView>
            {/* Modal Integration */}
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
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    formContainer: {
        width: "100%",
    },
    contentArea: {
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "29%",
    },

    scrollContent: {
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        flexGrow: 1, // Prevent bouncing
    },
    headingText: {
        fontFamily: "Lato-Regular",
        fontSize: 30,
        fontWeight: "500",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    subHeadingContainer:{
        justifyContent: "center",
        // borderWidth: 1, 
        borderColor: "red", 
        width: "80%",
        height: 70,
        paddingLeft: 4
    },
    subHeadingText:{
        // borderWidth: 1,
        fontFamily: "Lato-Regular",
        fontSize: 13,
        fontWeight: "500",
        width: "76%",
        height: "100%"
    },
    inputContainer: {
        width: "80%",
        justifyContent: "space-between",
        marginTop: 10,

    },
    inputField: {
        borderBottomWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontFamily: "Kanit-Regular",
    },
    inputFieldFocused: {
        borderBottomColor: "rgb(3, 38, 85)", // Accent color
        boxShadow: "rgb(3, 38, 85) 1.95px 1.95px 2.6px" // Accent shadow color
    },
    verifyButton: {
        marginTop: 50,
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
});