import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ImageSelectionModal from "../components/ImageSelectionModal";
import placeholder from "../assets/profile1.jpeg";
import { Image } from "react-native";
import { Formik } from "formik";
import { Octicons, Entypo } from "@expo/vector-icons";

import {
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  StyledTextInput,
  Colors,
  MsgBox,
  InnerContainer,
} from "../components/styles";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Credentials Context
import { CredentialsContext } from "../components/CredentialsContext";
import Avatar from "../components/Avatar";

function EditProfileScreen(props) {
  const [isHidden, setHidden] = useState(true);
  const [messageType, setMessageType] = useState();
  const [message, setMessage] = useState();

  const [imageUri, setImageUri] = useState(null);
  const [image, setImage] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  // Context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const { name, dateOfBirth } = storedCredentials;

  const uploadImage = async (mode) => {
    try {
      let result = {};

      if (mode === "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }

      if (!result.canceled) {
        // save image
        await saveImage(result.assets[0].uri);
      }
    } catch (error) {
      alert("Error uploading image: " + error.message);
      setModalVisible(false);
    }
  };

  const removeImage = async () => {
    try {
      saveImage(null);
    } catch ({ message }) {
      alert(message);
      setModalVisible(false);
    }
  };

  const saveImage = async (image) => {
    try {
      // update displayed image
      setImage(image);

      // make api call to save
      // sendToBackend();

      setModalVisible(false);
    } catch (error) {
      throw error;
    }
  };

  // onCameraPress={() => uploadImage()}
  return (
    <Screen>
      <AppHeader title="EDIT PROFILE" />
      <Avatar onButtonPress={() => setModalVisible(true)} uri={image} />
      <InnerContainer>
        <AppText style={styles.text}>User Information</AppText>
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
                placeholder={name}
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              <MyTextInput
                label="Date of Birth"
                icon="calendar"
                placeholder={dateOfBirth}
                placeholderTextColor={Colors.darklight}
                onChangeText={handleChange("dateOfBirth")}
                onBlur={handleBlur("dateOfBirth")}
                value={values.dateOfBirth}
              />
              <MyTextInput
                label="New Password"
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
                label="Confirm New Password"
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
                  <ButtonText>Update</ButtonText>
                </StyledButton>
              )}
              {isSubmitting && (
                <StyledButton disabled={true}>
                  <ActivityIndicator size="large" color={Colors.primary} />
                </StyledButton>
              )}
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
      <ImageSelectionModal
        modalVisible={modalVisible}
        onBackPress={() => {
          setModalVisible(false);
        }}
        onCameraPress={() => uploadImage()}
        onGalleryPress={() => uploadImage("gallery")}
        onRemovePress={() => removeImage()}
      />
    </Screen>
  );
}

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
  container: {
    alignItems: "center",
    padding: 15,
  },
  text: {
    marginTop: 5,
    marginBottom: 20,
    paddingLeft: 10,
    fontWeight: "bold",
    color: colors.medium,
    fontSize: 30,
  },
  buttonContainer: {
    backgroundColor: colors.orange,
    justifyContent: "center",
    width: 360,
    borderRadius: 25,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 15,
    padding: 5,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    resizeMode: "cover",
  },
  titleName: {
    fontSize: 22,
    paddingLeft: 8,
    marginBottom: 5,
    color: colors.light,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 8,
    color: colors.black,
  },
});

export default EditProfileScreen;
