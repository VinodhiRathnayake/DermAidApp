//import statements
import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import * as ImagePicker from "expo-image-picker";
import ImageSelectionModal from "../components/ImageSelectionModal";
import StyledTextInput from "../components/StyledTextInput";
import StyledButton from "../components/StyledButton";
import { useNavigation } from "@react-navigation/native";

// Credentials Context
import { CredentialsContext } from "../components/CredentialsContext";

import Avatar from "../components/Avatar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import KeyboardAvoidingContainer from "../components/KeyBoardAvoidingWrapper";

function EditProfileScreen({ route }) {
  const navigation = useNavigation();

  const [image, setImage] = useState(route.params?.image);
  const [modalVisible, setModalVisible] = useState(false);

  // Context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  // const { name, dateOfBirth } = storedCredentials;


  //Function to upload an image from the device's gallery or camera.
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

  //Function to remove the user's profile image.

  const removeImage = async () => {
    try {
      saveImage(null);
    } catch ({ message }) {
      alert(message);
      setModalVisible(false);
    }
  };

  //Function to save the user's profile image.
  const saveImage = async (image) => {
    try {
      setImage(image);

      const updatedUserData = {
        ...storedCredentials,
        image,
      };
      AsyncStorage.setItem(
        "dermAidCredentials",
        JSON.stringify(updatedUserData)
      )
        .then(() => {
          setStoredCredentials(updatedUserData);
        })
        .catch((err) => {
          console.log(err);
        });

      setModalVisible(false);
    } catch (error) {
      throw error;
    }
  };

  const [savingChanges, setSavingChanges] = useState(false);

  //Function to save the changes made to the user's profile.
  const saveChanges = async () => {
    try {
      setSavingChanges(true);

      const updatedUserData = {
        ...storedCredentials,
        image,
        name,
        email,
        phone,
        dateOfBirth,
      };

      AsyncStorage.setItem(
        "dermAidCredentials",
        JSON.stringify(updatedUserData)
      )
        .then(() => {
          setStoredCredentials(updatedUserData);
        })
        .catch((err) => {
          console.log(err);
        });

      setSavingChanges(false);
      navigation.navigate("Profile");
    } catch ({ message }) {
      alert(message);
      setSavingChanges(false);
    }
  };

  const [name, setName] = useState(route.params?.name || "");
  const [email, setEmail] = useState(route.params?.email || "");
  const [phone, setPhone] = useState(route.params?.phone || "");
  const [dateOfBirth, setDateOfBirth] = useState(
    route.params?.dateOfBirth || ""
  );

  // onCameraPress={() => uploadImage()}
  return (
    <Screen style={styles.container}>
      <KeyboardAvoidingContainer>
        <AppHeader title="EDIT PROFILE" />
        <Avatar uri={image} onButtonPress={() => setModalVisible(true)} />
        <StyledTextInput
          placeholder="Full Name"
          icon="account-outline"
          label="Full Name"
          value={name}
          onChangeText={setName}
        />

        <StyledTextInput
          placeholder="jbrown@hotmail.com"
          icon="email-outline"
          label="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <StyledTextInput
          placeholder="+94 71 4269052"
          icon="phone-outline"
          label="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <StyledTextInput
          placeholder="YYYY-MM-DD"
          icon="calendar"
          label="Date Of Birth"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
        />

        <StyledButton isLoading={savingChanges} onPress={saveChanges}>
          Save Changes
        </StyledButton>

        <ImageSelectionModal
          modalVisible={modalVisible}
          onBackPress={() => {
            setModalVisible(false);
          }}
          onCameraPress={() => uploadImage()}
          onGalleryPress={() => uploadImage("gallery")}
          onRemovePress={() => removeImage()}
        />
      </KeyboardAvoidingContainer>
    </Screen>
  );
}

//styles for edit profile screen

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
});

export default EditProfileScreen;
