import React, { useState } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform } from "react-native";
import Screen from "../components/Screen";
import LogoText from "../components/LogoText";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../config/colors";


const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().label("First Name"),
  lastname: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function SignupDetailsScreen(props) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const navigation = useNavigation();
  return (
    <Screen>
      {!isInputFocused && <LogoText />}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 200}
      >
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
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />

        <AppFormField
            autocorrect={false}
            icon="account"
            name="lastname"
            placeholder="Last Name"
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />

      <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />

<AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
          <View style={styles.buttonContainer}>
            <SubmitButton title="Sign up" ></SubmitButton>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Sign in")}>
                <Text style={styles.text}> Already have an account? Log in</Text>
              </TouchableOpacity>
          </AppForm>
        </View>
      </View>
      </KeyboardAvoidingView>
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
    backgroundColor:colors.orange,
    borderRadius: 25,

  },
  text: {
    color: "blue",
  },
});

export default SignupDetailsScreen;
