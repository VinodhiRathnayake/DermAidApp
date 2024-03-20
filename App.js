import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

// React Navigation Stack
import RootStack from "./app/navigation/RootStack";

// Splash Screen
import * as SplashScreen from "expo-splash-screen";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Credentials Context
import { CredentialsContext } from "./app/components/CredentialsContext";
import ProfileScreen from "./app/screens/ProfileScreen";
import AboutUs from "./app/screens/AboutUs";

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState();

  const checkLoginCredentials = () => {
    AsyncStorage.getItem("dermAidCredentials")
      .then((result) => {
        if (result !== null) {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    async function prepare() {
      try {
        checkLoginCredentials();
        await SplashScreen.hideAsync(); // Hide the splash screen
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
      }
    }

    prepare();
  }, []);

  if (!appReady) {
    return (
      <View style={styles.splashContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <CredentialsContext.Provider
      value={{ storedCredentials, setStoredCredentials }}
    >
      {/* <RootStack /> */}
      <AboutUs/>
    </CredentialsContext.Provider>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
