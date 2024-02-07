import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import LogoText from "../components/LogoText";
import SigninScreen from "./SigninScreen";
import AppTextInput from "../components/lists/AppTextInput";
import Button from "../components/Button";
import colors from "../config/colors";

function SigninDetailsScreen(props) {
  return (
    <Screen>
      <LogoText />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <AppTextInput
            autocapitalize="none"
            autocorrect={false}
            icon="email"
            keyboardType="email-address"
            placeholder="Email"
          />

          <AppTextInput
            autocapitalize="none"
            autocorrect={false}
            icon="lock"
            secureTextEntry
            placeholder="Password"
          />
          <View style={styles.buttonContainer}>
            <Button title="Sign in"></Button>
          </View>
          <Text style={styles.text}>Forgot Password</Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 5,
  },
  inputContainer: {
    marginTop: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
  },
  text: {
    color: "blue",
  },
});

export default SigninDetailsScreen;
