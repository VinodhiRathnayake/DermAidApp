import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import LogoText from "../components/LogoText";
import AppTextInput from "../components/AppTextInput";
import Button from "../components/Button";
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

function SigninDetailsScreen(props) {
  return (
    <Screen>
      <LogoText />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
            validationSchema = {validationSchema}
          >
        {({handleChange, handleSubmit, errors}) => (
          <>
          <AppTextInput
            autocapitalize="none"
            autocorrect={false}
            icon="email"
            keyboardType="email-address"
            onChangeText={handleChange("email")}
            placeholder="Email"
          />
          <AppText style={{color: 'red'}}>{errors.email}</AppText>

          <AppTextInput
            autocapitalize="none"
            autocorrect={false}
            icon="lock"
            secureTextEntry
            onChangeText={handleChange("password")}
            placeholder="Password"
          />
          <AppText style={{color: 'red'}}>{errors.password}</AppText>
          <View style={styles.buttonContainer}>
            <Button 
            title="Sign in"
            onPress={handleSubmit}
            ></Button>
          </View>
  </>
)}

          </Formik>
          
          
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
