import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Animated } from "react-native";
import { TopNav } from "@/components/TopNav";
import {useState, useEffect} from "react";
import ProfileBadge from "@/components/ProfileBadge";
import {useHeaderHeight} from "@react-navigation/elements";
import UserCommunitySummary from "@/components/UserCommunitySummary";
import DashboardTaskUtility from "@/components/DashboardTaskUtility";
import DashboardEventUtility from "@/components/DashboardEventUtility";

export default function Home() {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={[styles.container, {marginTop: headerHeight}]}>
        <ScrollView
            contentContainerStyle={styles.scrollContent}
        >
            <View style={styles.fullScreenContainer}>
                <TopNav />
            </View>
            <ProfileBadge/>
            <UserCommunitySummary/>
            <DashboardTaskUtility/>
            <DashboardEventUtility/>
        </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full screen
    backgroundColor: "#f8f9fa", // Optional for better UI
  },
  scrollContent: {
    alignItems: "center",
  },
  fullScreenContainer: {
    flex: 1,
    width:"95%", // Ensure it takes the full screen height and width
    backgroundColor: "#fff", // Optional: Set a base background color
    alignItems: "center",
    zIndex: 50
  },
});
`r`