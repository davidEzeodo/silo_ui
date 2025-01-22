import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Keyboard,
    SafeAreaView,
    ActivityIndicator
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import CustomModal from "../../components/Modal/CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import useOtpStore from "@/services/Stores/OtpStore";
import {useHeaderHeight} from "@react-navigation/elements";

interface SendOtpResponse {
    otp: string;
    message: string;
    status: boolean;
}

export default function EmailAuthentication() {
    const [email, setEmail] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalProps, setModalProps] = useState({
        isError: true,
        headerText: "Error",
        icon: faTimesCircle,
        color: "red",
    });
    const headerHeight = useHeaderHeight();

    const { setStoreOtp, setStoreEmail } = useOtpStore();
    const {emailForOtp: storedEmail} = useOtpStore();

    const [fontsLoaded] = useFonts({
        "Kanit-Regular": require("../../assets/fonts/Kanit-Regular.ttf"),
        "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf")
    });
    if (!fontsLoaded) {
        return undefined;
    }

    const handleVerifyPress = async () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        console.log("button clicked");
        Keyboard.dismiss();
        if (!email.trim() || !emailPattern.test(email)) {
            setModalContent(
                !email.trim()
                    ? "Please enter your email."
                    : "Invalid email format. Please enter a valid email address."
            );
            setModalProps({
                isError: true,
                headerText: "Validation Error",
                icon: faTimesCircle,
                color: "red",
            });
            setModalVisible(true);
            return;
        }
        setStoreEmail(email);
        console.log(storedEmail);
        setLoading(true);
        try {
            console.log("program in try catch block");
            const requestData = {
                "email": email
            }
            const response = await fetch("http://192.168.45.33:8080/sendOtp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestData),
            });
            console.log("request has been sent");
            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData.message);
                throw new Error(errorData.message || "Something went wrong.");
            }

            const data: SendOtpResponse = await response.json();
            
            if (data.status) {
                setLoading(false);
                console.log(data);
                setStoreOtp(data.otp);
                setModalContent(`
                    Verification email sent successfully.
                    You should get an OTP in your inbox or spam.
                    `);
                setModalProps({
                    isError: false,
                    headerText: "Success",
                    icon: faCheckCircle, // Replace with a green tick icon
                    color: "green",
            });
            setModalVisible(true);
            router.push("/Otp");
            } else {
                throw new Error(data.message);
            }
        } catch (error: any) {
            console.log(error.message)
            console.log(error);
            // const err = await error.json();
            // console.log(err)
            setLoading(false); 
            console.error("Error fetching OTP:", error.message);
            setModalContent(error.message || "An unexpected error occurred.");
            setModalProps({
                isError: true,
                headerText: "Error",
                icon: faTimesCircle,
                color: "red",
            });
            setModalVisible(true);
        }
    };

    const closeModal = () => setModalVisible(false);

    return (
        <SafeAreaView style={[styles.container, {marginTop: headerHeight}]}>
            
            
            <ScrollView
            contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.pageHeader}>
                    <Text style={styles.headerStyle}>Email Verification</Text>
                    <View style={styles.pageSubHeader}>
                        <Text style={{width: "58%", fontFamily: "Lato-Regular"}}>
                            Please provide a valid email address so we can verify it.
                        </Text>
                    </View>
                </View>
                <View style={styles.form}>
                    <TextInput
                    onChangeText={setEmail}
                    placeholder={"Email"}
                    value={email}
                    style={[
                        styles.inputField,
                        isFocused && styles.FirstNameFieldFocused,
                    ]}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    />
                </View>
                <View style={{alignItems: "center"}}>
                    <TouchableOpacity
                        style={styles.verifyButton}
                        onPress={handleVerifyPress}
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
            {/* Loading Modal */}
            {isLoading && (
                <CustomModal
                    visible={isLoading}
                    onClose={() => setLoading(false)} // Optional close behavior
                    headerText="Loading"
                    content={
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="large" color="#00BFFF" />
                            <Text style={styles.loadingText}>Processing...</Text>
                        </View>
                    }
                />
            )}
            {/* Error/Success Modal */}
            <CustomModal
                visible={isModalVisible}
                onClose={closeModal}
                headerText={modalProps.headerText}
                content={
                    <View style={styles.modalContent}>
                        <FontAwesomeIcon icon={modalProps.icon} size={40} color={modalProps.color} />
                        <Text style={styles.modalText}>{modalContent}</Text>
                    </View>
                }
                buttons={
                    <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                        <Text style={styles.modalButtonText}>
                            {modalProps.isError ? "Try Again" : "Proceed"}
                        </Text>
                    </TouchableOpacity>
                }
            />
        </SafeAreaView>
    );
}

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
    pageSubHeader:{
        // borderWidth: 1,
        paddingTop:20,
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
    loadingContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    loadingText: {
        marginTop: 16,
        fontFamily: "Lato-Regular",
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
