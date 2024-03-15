import React from "react";
import { View, StyleSheet } from "react-native";
import MenuButton from "./MenuButton";
import EditProfileScreen from "../screens/EditProfileScreen";
import { useNavigation } from "@react-navigation/native";
import MenuScreen from "../screens/WelcomeScreen";

function Menu({ onClose, activeTab }) {
  const navigation = useNavigation();

  const handleMenuItemClick = (screenName) => {
    navigation.navigate(screenName);
    // onClose(); // Close the menu after navigating
  };

  return (
    <View style={styles.container}>
      <MenuButton title="HOME" onPress={() => handleMenuItemClick("Menu")} />
      <MenuButton
        title="EDIT PROFILE"
        onPress={() => handleMenuItemClick("EditProfile")}
      />
      <MenuButton
        title="NEW PREDICTION"
        onPress={() => handleMenuItemClick("NewPrediction")}
      />
      <MenuButton
        title="PREDICTION RECORDS"
        onPress={() => handleMenuItemClick("PredictionRecords")}
      />
      <MenuButton
        title="ABOUT US"
        onPress={() => handleMenuItemClick("AboutUs")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    justifyContent: "flex-start",
    zIndex: 1000,
    position: "absolute",
  },
});

export default Menu;
