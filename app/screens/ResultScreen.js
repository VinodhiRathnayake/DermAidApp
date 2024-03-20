//import statements
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppHeader from "../components/AppHeader";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/Button";

//renders the result of a diagnosis.
function ResultScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppHeader title="RESULT" />
      <Image source={require("../assets/logo.jpg")} style={styles.image} />

{/* Disease information */}
      <AppText>Disease: HIVES</AppText>

      <AppText>Date: 20-12-2023</AppText>
      <AppText>Time: 9.40pm</AppText>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Learn More About the Disease.."
          color="orange"
        ></AppButton>
        <AppButton title="SAVE" color="orange"></AppButton>
        <AppButton title="DON'T SAVE" color="orange"></AppButton>
      </View>
    </Screen>
  );
}

//styling results screen
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 40,
    width: 360,
    borderRadius: 25,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default ResultScreen;
