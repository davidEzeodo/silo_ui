import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import React from "react";

type CustomModalProps = {
  visible: boolean;
  onClose: () => void;
  content: React.ReactNode;
  headerText?: string;
  isError?: boolean; // Determines if it's an error modal
  buttons?: React.ReactNode;
};

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  content,
  headerText,
  isError = false,
  buttons
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <Text style={[styles.headerText, isError && styles.errorText]}>
            {headerText || "Notice"}
          </Text>

          {/* Content */}
          <View style={styles.modalContent}>{content}</View>

          {/* Footer Buttons */}
          <View style={styles.buttonGroup}>
            {buttons}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: "#333",
  },
  errorText: {
    color: "red",
  },
  modalContent: {
    marginBottom: 20,
    alignItems: "center",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    alignItems: "center",
  },
  confirmButton: {
    flex: 1,
    backgroundColor: "#ff6666",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
});

export default CustomModal;
