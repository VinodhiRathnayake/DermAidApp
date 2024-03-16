import React, { useState, useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import colors from "../config/colors";
import Icon from "../components/Icon";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Credentials Context
import { CredentialsContext } from "../components/CredentialsContext";

const menuItems = [
  {
    title: "EDIT PROFILE",
    icon: {
      name: "account-edit",
      backgroundColor: colors.primary,
    },
    targetScreen: "EditProfile",
  },
  {
    title: "NEW PREDICTION",
    icon: {
      name: "stethoscope",
      backgroundColor: colors.secondary,
    },
    targetScreen: "NewPrediction",
  },
  {
    title: "PREDICTION RECORDS",
    icon: {
      name: "clipboard-list",
      backgroundColor: colors.primary,
    },
    targetScreen: "PredictionRecords",
  },
  {
    title: "ABOUT US",
    icon: {
      name: "information-variant",
      backgroundColor: colors.secondary,
    },
    targetScreen: "AboutUs",
  },
];

function ProfileScreen(props) {
  // Context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const { name, email } = storedCredentials;

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const navigation = useNavigation();

  // Close the menu when navigating to another screen
  const handleMenuItemPress = (targetScreen) => {
    setIsMenuOpen(false);
    navigation.navigate(targetScreen);
  };

  // Reset menu state when the screen gains focus
  useFocusEffect(() => {
    setIsMenuOpen(true);
    return () => {
      // Cleanup code here (if needed)
    };
  });

  return (
    <Screen onFocus={() => setIsMenuOpen(false)}>
      <AppHeader />
      <View style={styles.container}>
        <ListItem
          title={name}
          subTitle={email}
          image={require("../assets/profile1.jpeg")}
          style={styles.infoContainer}
          titleStyle={styles.name}
          imageStyle={styles.image}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              style={styles.buttons}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => handleMenuItemPress(item.targetScreen)}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    backgroundColor: "rgba(70, 130, 180, 0.6)",
    paddingVertical: 20,
    width: 380,
    height: 180,
    borderRadius: 25,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  buttons: {
    marginTop: 30,
    backgroundColor: colors.white,
    width: 300,
    height: 70,
    borderRadius: 28,
  },
  image: {
    width: 110,
    height: 130,
  },
});

export default ProfileScreen;
