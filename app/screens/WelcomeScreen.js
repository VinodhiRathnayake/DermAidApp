import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import colors from "../config/colors";

import { Platform } from "react-native";
import Screen from "../components/Screen";
import Button from "../components/Button";

function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Image style={[styles.image]} source={require("../assets/logo.jpg")} />

        <Text style={styles.welcomeText}>Your Skin Journey Starts Here!</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate("Sign up")}
          />
        </View>
      </View>
    </Screen>
  );
}

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
    marginTop: 70,
    fontSize: 38,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 90,
    backgroundColor: colors.white,
    width: 330,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "orange",
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default WelcomeScreen;
