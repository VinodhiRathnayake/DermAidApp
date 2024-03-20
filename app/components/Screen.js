//  Import statements
import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    // Applying linear gradient background
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={[styles.screen, style]}
    >
      {/* SafeAreaView to ensure content doesn't overlap with device insets */}
      <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.view, style]}>{children}</View>
      </SafeAreaView>
    </LinearGradient>
  );
}

// Styles for the Screen component
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,

    marginBottom: 50,
  },
});

export default Screen;
