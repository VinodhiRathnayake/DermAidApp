//Import statements
import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  // Requesting permission to access the device's image library
  useEffect(() => {
    requestPermission();
  }, []);

  // Function to request permission for accessing the device's image library
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  // Handler function for press events on the image input
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  // Function to select an image from the device's image library
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    // TouchableWithoutFeedback wrapper for handling press events
    <TouchableWithoutFeedback onPress={handlePress}>
       {/* Container for displaying the image or camera icon */}
      <View style={styles.container}>
         {/* Display camera icon if no image is selected */}
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
         {/* Display selected image */}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

// Styles for the ImageInput component
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 50,
    height: 150,
    justifyContent: "center",
    marginVertical: 10,
    overflow: "hidden",
    width: 105,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

// Exporting the ImageInput component as default
export default ImageInput;
