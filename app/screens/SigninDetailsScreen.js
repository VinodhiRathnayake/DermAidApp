import React, { useState } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform } from "react-native";
import Screen from "../components/Screen";
import LogoText from "../components/LogoText";
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from '../components/Forms';
import colors from "../config/colors";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

function SigninDetailsScreen(props) {
  const [isInputFocused, setIsInputFocused] = useState(false);

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
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
            validationSchema = {validationSchema}
          >
         <AppFormField
            autocapitalize="none"
            autocorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />

          <AppFormField
            autocapitalize="none"
            autocorrect={false}
            icon="lock"
            secureTextEntry
            name="password"
            placeholder="Password"
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          <View style={styles.buttonContainer}>
            <SubmitButton 
            title="Sign in"
            ></SubmitButton>
          </View>

          </AppForm>
          
          
          <Text style={styles.text}>Forgot Password</Text>
        </View>
      </View>
      </KeyboardAvoidingView>
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
    backgroundColor:colors.orange,
    borderRadius: 25,
  },
  text: {
    color: "blue",
  },
});

export default SigninDetailsScreen;
