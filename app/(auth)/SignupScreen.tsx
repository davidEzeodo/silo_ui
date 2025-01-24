import {View, Text, StyleSheet, ScrollView, Keyboard, SafeAreaView, TextInput, TouchableOpacity} from "react-native";
import {useHeaderHeight} from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import React, {useState} from "react";
import useOtpStore from "@/services/Stores/OtpStore";
import CustomModal from "../../components/Modal/CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function CreateAccount(){
    const headerHeight = useHeaderHeight();
    const insets = useSafeAreaInsets();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isResponseGood, setIsResponseGood] = useState(false);
    const [isFocused, setIsFocused] =useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalProps, setModalProps] = useState({
        isError: true,
        headerText: "Error",
        icon: faTimesCircle,
        color: "red",
    });
    
    // const dynamicMarginTop = headerHeight + insets.top;
    const {emailForOtp: storedEmail} = useOtpStore();

    const [fontsLoaded] = useFonts({
            "Kanit-Regular": require("../../assets/fonts/Kanit-Regular.ttf"),
            "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf")
    });
    if (!fontsLoaded) {
        return undefined;
    }
    const handleSubmission = async () => {
        const phoneNumberPattern = /^\d{11}$/;
        console.log("Submit button clicked");
        
        Keyboard.dismiss();
    
        // Validate Inputs
        if (!firstName.trim() || !lastName.trim()) {
            setModalContent(!firstName.trim() ? "Please enter first name." : "Please enter last name.");
            setIsResponseGood(false);
            setModalVisible(true);
            return;
        }
    
        if (!phoneNumber.trim() || !phoneNumberPattern.test(phoneNumber)) {
            setModalContent("Enter a valid phone number (11 digits).");
            setIsResponseGood(false);
            setModalVisible(true);
            return;
        }
    
        if (!password.trim() || !confirmPassword.trim()) {
            
            setModalContent("Please fill in both password fields.");
            setIsResponseGood(false);
            setModalVisible(true);
            return;
        }
    
        if (password !== confirmPassword) {
            console.log(password, " ", confirmPassword)
            setModalContent("Passwords do not match.");
            setIsResponseGood(false);
            setModalVisible(true);
            return;
        }
    

        const data = {
            "firstName": firstName,
            "lastName": lastName,
            "phoneNumber": phoneNumber,
            "email": storedEmail,
            "password": password
        }
    
        try {
            // Make API call
            const response = await fetch("http://192.168.191.33:8080/createUser", {
                method: "POST",
                body: JSON.stringify(data),
                headers:{
                    "Content-Type": "application/json"
                }
            });
    
           // Check Response
        if (!response.ok) {
            setIsResponseGood(false);
            const errorData = await response.json();
            console.error("Error response: ", errorData);
            setModalContent(errorData.data);
            setModalVisible(true);
            setModalProps({
                isError: true,
                headerText: "Error",
                icon: faTimesCircle,
                color: "red",
            });
            return;
        }
            
            const responseData = await response.json();
            setIsResponseGood(true);
            console.log("Account created successfully: ", responseData);
            setModalContent("Account created successfully!");
            setModalVisible(true);
            setModalProps({
                isError: false,
                headerText: "Success",
                icon: faCheckCircle,
                color: "green",
            });
        } catch (error) {
            console.error("Network error: ", error);
            setModalContent("Network error. Please try again later.");
            setModalVisible(true);
            setModalProps({
                isError: true,
                headerText: "Error",
                icon: faTimesCircle,
                color: "red",
            });
        }
        
    };
    const handleCloseModal = () =>{
        if(isResponseGood){
            setModalVisible(false);
            router.push("/LoginScreen");
        }else{
            setModalVisible(false);
        }   
    }
    
    return(
        <SafeAreaView style={[styles.container, {marginTop: headerHeight}]}>
            
            
            <ScrollView
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.pageHeader}>
                    <Text style={styles.headerStyle}>Create Account</Text>
                </View>
                <View style={styles.form}>
                    <TextInput
                    onChangeText={setFirstName}
                    placeholder={"First name"}
                    value={firstName}
                    style={[
                        styles.inputField,
                        isFocused && styles.FirstNameFieldFocused,
                    ]}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    />
                    <TextInput
                    onChangeText={setLastName}
                    placeholder={"Last name"}
                    value={lastName}
                    style={[
                        styles.inputField,
                        isFocused && styles.inputFieldFocused,
                    ]}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    />
                    <TextInput
                    onChangeText={setPhoneNumber}
                    placeholder={"Phone number (080-100-8181)"}
                    value={phoneNumber}
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
                    <TextInput
                        onChangeText={setConfirmPassword}
                        placeholder={"Confirm password"}
                        value={confirmPassword}
                        style={[
                            styles.inputField,
                            isFocused && styles.inputFieldFocused,
                        ]}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        secureTextEntry={true}
                    />
                </View>
                <View style={{alignItems: "center"}}>
                    <TouchableOpacity
                        style={styles.verifyButton}
                        onPress={handleSubmission}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontFamily: "Kanit-Regular",
                            }}
                        >
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
            <CustomModal
                visible={isModalVisible}
                onClose={handleCloseModal}
                headerText={modalProps.headerText}
                content={
                    <View style={styles.modalContent}>
                        <FontAwesomeIcon icon={modalProps.icon} size={40} color={modalProps.color} />
                        <Text style={styles.modalText}>{modalContent}</Text>
                    </View>
                }
                buttons={
                    <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                        <Text style={styles.modalButtonText}>{modalProps.isError ? "Try Again" : "OK"}</Text>
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
        borderColor: "blue",
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
})
