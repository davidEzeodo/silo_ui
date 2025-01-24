import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput
} from "react-native";
import Modal from "react-native-modal";

const { width } = Dimensions.get("window");

type InviteMemberModalProps = {
    isVisible: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    onProceed?: () => void;
}

const InviteMemberModal: React.FC<InviteMemberModalProps> =({
    isVisible,
    onClose,
    title,
    children,
    onProceed,
}) => {
    const [email, setEmail] = useState("");
    return (
        <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        backdropOpacity={0.5}
        animationIn="slideInUp"
        style={styles.modalContainer}

        >
            <TouchableWithoutFeedback>
                <>
                <View style={styles.modalContent}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.title}>{title}</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButton}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Body */}
                    <View style={styles.body}>{children}</View>

                    {/* Footer */}
                    {onProceed && (
                        <TouchableOpacity style={styles.proceedButton} onPress={onProceed}>
                            <Text style={styles.proceedText}>Send Invite</Text>
                        </TouchableOpacity>
                    )}
                </View>
                {/* <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    placeholder="Email"
                    placeholderTextColor="#ccc"
                    value={email}
                /> */}
                </>
                
            </TouchableWithoutFeedback>
            
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: "flex-end",
        margin: 0,
        // borderWidth: 9,
        // borderColor: "red",
        alignItems:"center"
    },
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 15,
        backgroundColor: "#fff",
        color: "#000",
      },
modalContent: {
        backgroundColor: "white",
        padding: 50,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
        // borderWidth: 9,
        // borderColor: "red",
        width: "90%",
        height: "50%",
        gap: 40
    },
    header: {
    flexDirection: "row",
    width: "80%",
    marginBottom: 16,
    alignItems:"center",
        justifyContent: "space-between",
        // borderWidth: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        // borderWidth: 1,
        
    },
    closeButton: {
    fontSize: 18,
    color: "gray",
    },
    body: {
    width: "80%",
    marginBottom: 16,
    // borderWidth: 1,
    },
    proceedButton: {
    backgroundColor: "#0B2950",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    },
    proceedText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    },
});
        
export default InviteMemberModal;