//import statements
import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { Octicons, Entypo } from "@expo/vector-icons";
import axios from "axios";
import Constants from "expo-constants";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledButton,
  StyledTextInput,
  Colors,
  MsgBox,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from "../components/styles";
// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Credentials Context
import { CredentialsContext } from "../components/CredentialsContext";

const LoginScreen = ({ navigation }) => {
  const [isHidden, setHidden] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  // Context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  //Function to handle login process.
  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    const url =
      "https://polar-inlet-39847-1b8c485839ae.herokuapp.com/user/signin";

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, data, status } = result;

        if (status !== "SUCCESS") {
          handleMessage(message, status);
        } else {
          persistLogin({ ...data[0] }, message, "SUCCESS");
          console.log({ ...data[0] });
        }
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        setSubmitting(false);
        handleMessage("An error occured. Check your internet connection");
      });
  };

  //Function to display messages.
  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

  //Function to persist user login.
  const persistLogin = (credentials, message, status) => {
    AsyncStorage.setItem("dermAidCredentials", JSON.stringify(credentials))
      .then(() => {
        handleMessage(message, status);
        setStoredCredentials(credentials);
      })
      .catch((err) => {
        console.log(err);
        handleMessage("Persisting login failed");
      });
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require("../assets/logo1.png")} />
        <PageTitle>Derm Aid</PageTitle>
        <SubTitle>Account Login</SubTitle>

        {/* Formik component for form handling */}
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.email == "" || values.password == "") {
              handleMessage("Please fill all the fields");
              setSubmitting(false);
            } else {
              handleLogin(values, setSubmitting);
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
          }) => (
            <StyledFormArea>
              {/* Email input field */}
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="user@example.com"
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              {/* Password input field */}
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="*****"
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={isHidden}
                isPassword={true}
                isHidden={isHidden}
                setHidden={setHidden}
              />
              <MsgBox type={messageType}>{message}</MsgBox>
              {!isSubmitting && (
                <StyledButton onPress={handleSubmit}>
                  <Text style={styles.ButtonText}>Login</Text>
                </StyledButton>
              )}
              {/* Loading indicator while submitting */}
              {isSubmitting && (
                <StyledButton disabled={true}>
                  <ActivityIndicator size="large" color={Colors.primary} />
                </StyledButton>
              )}
              {/* Line separator */}
              <View style={styles.Line} />

              {/* Extra view for navigating to signup screen */}
              <ExtraView>
                <ExtraText>Don't have an account?</ExtraText>
                <TextLink
                  style={{ paddingLeft: 5 }}
                  onPress={() => {
                    navigation.navigate("SignUp");
                  }}
                >
                  <TextLinkContent>Signup</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  isHidden,
  setHidden,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={Colors.brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          style={styles.RightIcon}
          onPress={() => setHidden(!isHidden)}
        >
          <Entypo
            name={isHidden ? "eye-with-line" : "eye"}
            size={30}
            color={Colors.darklight}
          />
        </RightIcon>
      )}
    </View>
  );
};

//styling for login screen
const styles = StyleSheet.create({
  StyledContainer: {
    flex: 1,
    padding: 25,
    paddingTop: Constants.statusBarHeight + 30,
    backgroundColor: Colors.primary,
  },
  InnerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  PageLogo: {
    width: 250,
    height: 250,
  },
  PageTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.brand,
    padding: 10,
  },
  SubTitle: {
    fontSize: 18,
    marginBottom: 5,
    letterSpacing: 1,
    fontWeight: "bold",
    color: Colors.tertiary,
  },
  StyledFormArea: {
    width: "90%",
  },
  MsgBox: {
    textAlign: "center",
    fontSize: 13,
    color: (props) => (props.type === "SUCCESS" ? "green" : "red"),
  },
  StyledButton: {
    padding: 15,
    backgroundColor: Colors.brand,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
  },
  ButtonText: {
    color: Colors.primary,
    fontSize: 16,
  },
  Line: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.darklight,
    marginVertical: 10,
  },
  ExtraView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  ExtraText: {
    justifyContent: "center",
    alignItems: "center",
    color: Colors.tertiary,
    fontSize: 15,
  },
  TextLink: {
    justifyContent: "center",
    alignItems: "center",
  },
  TextLinkContent: {
    color: Colors.brand,
    fontSize: 15,
  },
  LeftIcon: {
    left: 15,
    top: 38,
    position: "absolute",
    zIndex: 1,
  },
  RightIcon: {
    right: 15,
    top: 38,
    position: "absolute",
    zIndex: 1,
  },
  StyledInputLabel: {
    color: Colors.tertiary,
    fontSize: 13,
    textAlign: "left",
  },
  StyledTextInput: {
    backgroundColor: Colors.secondary,
    padding: 15,
    paddingLeft: 55,
    paddingRight: 55,
    borderRadius: 5,
    fontSize: 16,
    height: 60,
    marginVertical: 3,
    marginBottom: 10,
    color: Colors.tertiary,
  },
});

export default LoginScreen;
