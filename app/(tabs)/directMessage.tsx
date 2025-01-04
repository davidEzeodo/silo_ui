import { Text, View, StyleSheet } from "react-native";

export default function DirectMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Chat Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
    
  },
  textStyles: {
    color: "white"
  },
  
})
