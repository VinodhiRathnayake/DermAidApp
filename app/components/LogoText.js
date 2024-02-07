import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";

const LogoText = ({ source, style }) => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, style]}
        source={require("../assets/DermAidlogo.jpg")}
      />
      <Text style={styles.welcomeText}>Your Skin Journey Starts Here!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 200,
  },
  welcomeText: {
    color: colors.white,
    marginTop: 50,
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default LogoText;
