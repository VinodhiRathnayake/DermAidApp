import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/native";
import Avatar from "../components/Avatar";
import ProfileInfo from "../components/ProfileInfo";
import SectionHead from "../components/SectionHead";
import StyledText from "../components/StyledText";
import ImageSelectionModel from "../components/ImageSelectionModal";
import * as ImagePicker from "expo-image-picker";

// Credentials Context
import { CredentialsContext } from "../components/CredentialsContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import KeyBoardAvoidingWrapper from "../components/KeyBoardAvoidingWrapper";

function ProfileScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { setStoredCredentials, storedCredentials } =
    useContext(CredentialsContext);
  const { name, email, dateOfBirth, phone, image, userID } = storedCredentials;

  //Function to upload image from camera or gallery.
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

  //Function to remove user's profile picture.
  const removeImage = async () => {
    try {
      saveImage(null);
    } catch ({ message }) {
      alert(message);
      setModalVisible(false);
    }
  };

  //Function to save user's profile picture.
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

  return (
    <Screen>
       {/* Wrapper for keyboard avoiding behavior */}
      <KeyBoardAvoidingWrapper style={styles.container}>
        {/* Avatar component with profile picture */}
        <Avatar onButtonPress={() => setModalVisible(true)} uri={image} />
        <StyledText big bold style={[styles.text, { marginBottom: 10 }]}>
          {name}
        </StyledText>
        {/* Section header for personal information */}
        <SectionHead
          option="Edit"
          style={{ marginTop: 20 }}
          onPress={() =>
            navigation.navigate("EditProfile", {
              ...storedCredentials,
            })
          }
        >
          Personal Info
        </SectionHead>
        <View style={styles.section}>
          <ProfileInfo label="Email" icon="email-outline">
            <StyledText>{email}</StyledText>
          </ProfileInfo>
          <ProfileInfo label="Phone" icon="phone-outline">
            <StyledText>{userID}</StyledText>
          </ProfileInfo>
          <ProfileInfo label="Date of Birth" icon="calendar">
            <StyledText>{dateOfBirth}</StyledText>
          </ProfileInfo>
        </View>
         {/* Image selection modal for changing profile picture */}
        <ImageSelectionModel
          modalVisible={modalVisible}
          onBackPress={() => {
            setModalVisible(false);
          }}
          onCameraPress={() => uploadImage()}
          onGalleryPress={() => uploadImage("gallery")}
          onRemovePress={() => removeImage()}
        />
      </KeyBoardAvoidingWrapper>
    </Screen>
  );
}

//styling profile screen
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
  section: {
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    textAlign: "center",
  },
});

export default ProfileScreen;
