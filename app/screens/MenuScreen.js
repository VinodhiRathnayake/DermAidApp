import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Menu from "../components/Menu";
import colors from "../config/colors";

function MenuScreen(props) {
  return (
    <Screen>
      <AppText style={styles.text}>
        Derm<Text style={styles.redText}>Aid</Text>
      </AppText>

      <View style={styles.container}>
        <Text style={styles.welcomeText}>Your Skin Journey Starts Here!</Text>
        <Image style={[styles.image]} source={require("../assets/logo.jpg")} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 0,
  },
  text: {
    marginTop: -40,
    fontSize: 27,
    color: "#3b3b3b",
    fontWeight: "bold",
    textAlign: "right",
    marginRight: 20,
    marginBottom: 15,
  },
  redText: {
    color: "red",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  welcomeText: {
    color: colors.white,
    marginTop: 100,
    marginBottom: 40,
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default MenuScreen;
