//import statements
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/Button";
import { useNavigation } from "@react-navigation/native";

//displays the camera view for taking a picture
function PredictionScreen(props) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const navigation = useNavigation();

  // Request camera and media library permissions
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  // Render camera view based on permissions
  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  // Function to take a picture with the camera
  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  // Render captured photo with options
  if (photo) {
    let scanPic = async () => {
      // Check if photo is available
      if (!photo) {
        alert("Please take a picture first!");
        return;
      }

      // Prepare the image data for sending
      const base64Data = photo.base64;
      const imageData = { image: `data:image/jpeg;base64,${base64Data}` };

      // Define your Heroku app's prediction endpoint URL (replace with your actual URL)
      const PREDICTION_URL =
        "https://deploying-mlmodel-to-heroku55-8974242e09eb.herokuapp.com/predict";

      try {
        // Send a POST request with the image data
        const response = await fetch(PREDICTION_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(imageData),
        });

        // Check for successful response
        if (!response.ok) {
          throw new Error("Failed to get prediction. Try again.");
        }

        // Parse the response data
        const predictionData = await response.json();
        const predictedLabel = predictionData.result;

        // Navigate to result screen and pass the predicted label
        navigation.navigate("Result", { predictedLabel });
        setPhoto(undefined); // Reset photo state
      } catch (error) {
        alert("Error:", error.message);
      }
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <Screen style={styles.container}>
        <AppHeader />
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <View style={styles.buttons}>
          <AppButton title="Scan" onPress={scanPic} color="orange" />
          {hasMediaLibraryPermission ? (
            <AppButton title="Save" onPress={savePhoto} color="orange" />
          ) : undefined}
          <AppButton
            title="Discard"
            onPress={() => setPhoto(undefined)}
            color="orange"
          />
        </View>
      </Screen>
    );
  }

  // Render camera view for capturing a new photo
  return (
    <Screen style={styles.container}>
      <AppHeader title="NEW PREDICTION" />
      <Camera style={styles.container} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={takePic}>
            <MaterialCommunityIcons name="camera" size={35} />
          </TouchableOpacity>
        </View>
        <StatusBar
          style="auto"
          backgroundColor="transparent"
          translucent={true}
        />
      </Camera>
    </Screen>
  );
}

//styles for prediction screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    padding: 10,
    borderRadius: 50,
  },
  buttons: {
    paddingVertical: -50, // Adjust the vertical padding to reduce the height
    paddingHorizontal: 10, // Adjust the horizontal padding if needed
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});
export default PredictionScreen;
