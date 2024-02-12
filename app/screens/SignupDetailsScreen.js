import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import LogoText from "../components/LogoText";
import AppTextInput from "../components/AppTextInput";
import Button from "../components/Button";

function SignupDetailsScreen(props) {
  return (
    <Screen>
      <LogoText />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <AppTextInput
            autocapitalize="words"
            autocorrect={false}
            // icon="email"
            keyboardType="default"
            placeholder="First Name"
          />

          <AppTextInput
            autocapitalize="words"
            autocorrect={false}
            // icon="email"
            keyboardType="default"
            placeholder="Last Name"
          />

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
            <Button title="Sign up"></Button>
          </View>
          <Text style={styles.text}> Already have an account? Log in</Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inputContainer: {
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

export default SignupDetailsScreen;
