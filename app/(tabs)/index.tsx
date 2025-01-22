import { Text, View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Animated } from "react-native";
import { TopNav } from "@/components/TopNav";
import {useState, useEffect} from "react";
import ProfileBadge from "@/components/ProfileBadge";
import UserCommunitySummary from "@/components/UserCommunitySummary";
import DashboardTaskUtility  from "@/components/DashboardTaskUtility"
import DashboardEventUtility from "@/components/DashboardEventUtility";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
          <TopNav/>
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
    backgroundColor: "white", // Optional for better UI
  },
  scrollContent: {
    alignItems: "center" // Adds spacing around content
  },
});
