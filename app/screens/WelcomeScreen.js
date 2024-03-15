import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Menu from "../components/Menu";
import colors from "../config/colors";

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
} from "../components/styles";

function MenuScreen({ navigation, route }) {
  const result = route.params;
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Your Skin Journey Starts Here!</Text>
        <Image style={[styles.image]} source={require("../assets/logo.jpg")} />
        <WelcomeContainer>
          <PageTitle>Welcome!!!</PageTitle>
          <SubTitle>{result.name}</SubTitle>
          <SubTitle>{result.email}</SubTitle>
          <StyledFormArea>
            <Line />
            <StyledButton
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
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

export default MenuScreen;
