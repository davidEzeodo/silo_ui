import {View, Text, StyleSheet} from "react-native";

export default function WelcomeScreen(){
    return(
        <View style={styles.container}>
            <Text>Welcome to Silo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})