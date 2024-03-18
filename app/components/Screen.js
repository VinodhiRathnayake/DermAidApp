import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={[styles.screen, style]}
    >
      <SafeAreaView style={[styles.screen, style]}>
        <ScrollView>
        <View style={[styles.view, style]}>{children}</View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

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
