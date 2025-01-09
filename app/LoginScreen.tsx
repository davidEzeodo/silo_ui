import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useState } from "react";

export default function BuildScreen() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [lastPassword, setPassword] = useState("");

    return (
        <KeyboardAwareScrollView
            style={{flex:1}}
            contentContainerStyle={styles.logInContainer}
            enableOnAndroid={true}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.formContainer}>
                <Text style={styles.headingText}>Welcome</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={setFirstName}
                        placeholder={"First name"}
                        placeholderTextColor={"gray"}
                        value={firstName}
                        style={styles.inputField}
                    />
                    <TextInput
                        onChangeText={setLastName}
                        placeholder={"Last name"}
                        placeholderTextColor={"gray"}
                        value={lastName}
                        style={styles.inputField}
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <View>
                    <Text>Don't have an account?</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text>Sign up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    logInContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    formContainer: {
        borderWidth: 1,
        borderColor: "rgb(226, 226, 226)",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        width: "70%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
    },
    headingText: {
        fontSize: 40,
        width: "64.5%",
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: "80%",
        height: "23%",
        justifyContent: "space-between",
    },
    inputField: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    button: {
        borderWidth: 1,
        borderRadius: 20,
        width: "60%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
});
