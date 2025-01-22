import {View, Image, Text, StyleSheet, Animated} from "react-native";
import { useEffect, useState } from "react";

type Props = {
    onFinish: () => void
}

export default function Splash({ onFinish }: Props){
    const [opacity] = useState(new Animated.Value(1));
    useEffect(() => {
        Animated.timing(opacity, {
            toValue:0,
            duration: 1000,
            delay:2000,
            useNativeDriver: true,
        }).start(() => onFinish());

    }, [opacity, onFinish]);

    return(
        <Animated.View style={[styles.splashScreenContainer, {opacity}]}>
            <Image
            source={require("../assets/images/icon.png")}
            style={styles.image}
            resizeMode="contain"
            />
        </Animated.View>
    )
};



const styles = StyleSheet.create({
    splashScreenContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    image:{
        width: "100%",
        height: "100%",
    },
});