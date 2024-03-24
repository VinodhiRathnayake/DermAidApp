//import statements
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppHeader from "../components/AppHeader";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/Button";
import { useRoute } from "@react-navigation/native";

//renders the result of a diagnosis.
function ResultScreen(props) {
  const route = useRoute();
  const { predictedLabel, photo } = route.params; // Handle missing params

  // Extract date and time (assuming these are available from somewhere)
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();
  const timeString = currentDate.toLocaleTimeString();

  return (
    <Screen style={styles.container}>
      <AppHeader title="RESULT" />
      {photo && ( // Conditionally render image if available
        <Image
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
          style={styles.image}
        />
      )}

      <AppText>Disease: {predictedLabel}</AppText>
      <AppText>Date: {dateString}</AppText>
      <AppText>Time: {timeString}</AppText>

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
