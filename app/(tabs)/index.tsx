import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Silo</Text>
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
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#ffff"
  }
})
