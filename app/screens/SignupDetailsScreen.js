import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import LogoText from "../components/LogoText";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";


const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().label("First Name"),
  lastname: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function SignupDetailsScreen(props) {
  return (
    <Screen>
      <LogoText />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <AppForm
        initialValues={{ firstname: "",lastname: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
          <AppFormField
          
            autocorrect={false}
            icon="account"
            name="firstname"
            placeholder="First Name"
          />

        <AppFormField
            autocorrect={false}
            icon="account"
            name="lastname"
            placeholder="Last Name"
          />

      <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

<AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
          <View style={styles.buttonContainer}>
            <SubmitButton title="Sign up"></SubmitButton>
          </View>
          <Text style={styles.text}> Already have an account? Log in</Text>
          </AppForm>
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
