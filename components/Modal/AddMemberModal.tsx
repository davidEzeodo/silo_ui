import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from "react-native";
import Modal from "react-native-modal";
import { useFonts } from "expo-font";

const { width } = Dimensions.get("window");

type InviteMemberModalProps = {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  onProceed?: (email: string) => void; // Pass the entered email back to parent
};

const InviteMemberModal: React.FC<InviteMemberModalProps> = ({
  isVisible,
  onClose,
  title,
  onProceed,
}) => {
  const [email, setEmail] = useState("");
  const [fontsLoaded] = useFonts({
      "RobotoMono-Regular": require("@/assets/fonts/RobotoMono-Regular.ttf"),
      "Lato-Regular": require("@/assets/fonts/Lato-Regular.ttf"),
    });

  const handleProceed = () => {
    if (onProceed) {
      onProceed(email); // Pass email back to parent when 'Proceed' is pressed
    }
    setEmail(""); // Reset email input
    onClose(); // Close modal
  };

  return (
    fontsLoaded ? (
        <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        backdropOpacity={0.5}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modalContainer}
        propagateSwipe={true}
        >
        <View style={styles.modalContent}>
        
            <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
                <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
            </View>


            <View style={styles.body}>
            <Text style={styles.label}>Enter Email Address</Text>
            <TextInput
                style={styles.input}
                placeholder="e.g., user@example.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                // value={email}
                onChangeText={(text) => setEmail(text)}
            />
            </View>

            {/* Footer */}
            {onProceed && (
            <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
                <Text style={styles.proceedText}>Proceed</Text>
            </TouchableOpacity>
            )}
        </View>
        </Modal>
    ) : null
    
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily:"Lato-Regular",
  },
  closeButton: {
    fontSize: 18,
    color: "gray",
  },
  body: {
    width: "100%",
    marginBottom: 16,
    
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: "#333",
    fontWeight: "bold",
    fontFamily:"Lato-Regular",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    width: "100%",
    fontSize: 16,
    marginBottom: 16,
    color: "#333",
  },
  proceedButton: {
    backgroundColor: "rgb(7, 62, 134)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: width * 0.9,
    alignItems: "center",
  },
  proceedText: {
    color: "white",
    fontWeight: "bold",
    fontFamily:"Lato-Regular",
    fontSize: 16,
  },
});

export default InviteMemberModal;
