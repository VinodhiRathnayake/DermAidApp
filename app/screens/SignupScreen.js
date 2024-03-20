import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Octicons, Entypo } from "@expo/vector-icons";
import axios from "axios";
import Constants from "expo-constants";

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  StyledTextInput,
  Colors,
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from "../components/styles";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Credentials Context
import { CredentialsContext } from "../components/CredentialsContext";
import { baseAPIURL } from "../components/shared";

const SignUpScreen = ({ navigation }) => {
  const [isHidden, setHidden] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  // Context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  const handleSignUp = async (credentials, setSubmitting) => {
    handleMessage(null);
    const url = `${baseAPIURL}/user/signup`;

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, data, status } = result;

        if (status !== "PENDING") {
          handleMessage(message, status);
        } else {
          temporaryUserPersist(
            ({ email, name, dateOfBirth, phone, _id, image } = credentials)
          );
          navigation.navigate("Verification", { ...data });
        }
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err.JSON());
        setSubmitting(false);
        handleMessage("An error occured. Check your internet connection");
      });
  };

  const temporaryUserPersist = async (credentials) => {
    try {
      await AsyncStorage.setItem("tempUser", JSON.stringify(credentials));
    } catch (error) {
      handleMessage("Error with initial data handling.");
    }
  };

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

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
    <StyledContainer style={styles.StyledContainer}>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Derm Aid</PageTitle>
        <SubTitle>Account Signup</SubTitle>

        <Formik
          initialValues={{
            name: "",
            email: "",
            dateOfBirth: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            if (
              values.email == "" ||
              values.password == "" ||
              values.name == "" ||
              values.confirmPassword == "" ||
              values.dateOfBirth == ""
            ) {
              handleMessage("Please fill all the fields");
              setSubmitting(false);
            } else if (values.password !== values.confirmPassword) {
              handleMessage("The passwords do not match");
              setSubmitting(false);
            } else {
              handleSignUp(values, setSubmitting);
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
              <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="Jehan Fernando"
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
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
              <MyTextInput
                label="Date of Birth"
                icon="calendar"
                placeholder="YYYY - MM - DD"
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("dateOfBirth")}
                onBlur={handleBlur("dateOfBirth")}
                value={values.dateOfBirth}
              />
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
              <MyTextInput
                label="Confirm Password"
                icon="lock"
                placeholder="*****"
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry={isHidden}
                isPassword={true}
                isHidden={isHidden}
                setHidden={setHidden}
              />
              <MsgBox type={messageType}>{message}</MsgBox>
              {!isSubmitting && (
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>SignUp</ButtonText>
                </StyledButton>
              )}
              {isSubmitting && (
                <StyledButton disabled={true}>
                  <ActivityIndicator size="large" color={Colors.primary} />
                </StyledButton>
              )}
              <Line />
              <ExtraView>
                <ExtraText>Already have an account?</ExtraText>
                <TextLink
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                  style={{ paddingLeft: 5 }}
                >
                  <TextLinkContent>Login</TextLinkContent>
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
  isDate,
  showDateTimePicker,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={Colors.brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDateTimePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon onPress={() => setHidden(!isHidden)}>
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

const styles = StyleSheet.create({
  StyledContainer: {
    flex: 1,
    padding: 25,
    paddingTop: Constants.statusBarHeight + 30,
    backgroundColor: Colors.primary,
  },
});

export default SignUpScreen;
