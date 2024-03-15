import React, { useContext } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

import {
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
} from "../components/styles";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Credentials Context
import { CredentialsContext } from "../components/CredentialsContext";

function WelcomeScreen() {
  // Context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const { name, email } = storedCredentials;

  const clearLogin = () => {
    AsyncStorage.removeItem("dermAidCredentials")
      .then(() => {
        setStoredCredentials("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Your Skin Journey Starts Here!</Text>
        <Image style={[styles.image]} source={require("../assets/logo.jpg")} />
        <WelcomeContainer>
          <PageTitle>Welcome!!!</PageTitle>
          <SubTitle>{name}</SubTitle>
          <SubTitle>{email}</SubTitle>
          <StyledFormArea>
            <Line />
            <StyledButton onPress={clearLogin}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
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

export default WelcomeScreen;
