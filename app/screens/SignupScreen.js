import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import LogoText from "../components/LogoText";
import Button from "../components/Button";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function SignupScreen(props) {
  return (
    <Screen>
      <LogoText />
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Sign up with Google">
            <MaterialCommunityIcons name="google" size={23} />
          </Button>

          <Button title="Sign up with Email">
            <MaterialCommunityIcons name="email" color="black" size={23} />
          </Button>
        </View>
        <Text style={styles.text}>Already have an account? Sign in here</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 40,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});

export default SignupScreen;
