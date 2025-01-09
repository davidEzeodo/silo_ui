import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
          Go to home screen
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#25292e",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    textDecorationLine: "underline",
    color: "#ffff"
  },
});
