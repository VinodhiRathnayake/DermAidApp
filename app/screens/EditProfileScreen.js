import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AppButton from "../components/Button";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ImageSelectionModal from "../components/ImageSelectionModal";
import placeholder from "../assets/logo.jpg";
import { Image } from "react-native";
import ListItem from "../components/lists/ListItem";

const initialMessages = [
  {
    id: 1,
    title: "Name",
    description: "Peter",
  },
  {
    id: 2,
    title: "Email",
    description: "user123@gmail.com",
  },
  {
    id: 3,
    title: "Phone",
    description: "(+94)12345678",
  },
  {
    id: 4,
    title: "Date Of Birth",
    description: "2000-05-30",
  },
];

function EditProfileScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [imageUri, setImageUri] = useState(null);
  const [image, setImage] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeImage = (uri) => {
    setImageUri(uri);
  };

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
        await saveImage(result.assets[0].uri);
        setModalVisible(false);
      }
    } catch (error) {
      alert("Error uploading image:" + error.message);
      setModalVisible(false);
    }
  };

  const saveImage = async (image) => {
    try {
      setImage(image);
      setModalVisible(false);
    } catch (error) {
      throw error;
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

  // onCameraPress={() => uploadImage()}
  return (
    <Screen>
      <AppHeader title="EDIT PROFILE" />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.imageContainer}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.image} />
            ) : (
              <Image source={placeholder} style={styles.image} />
            )}
            <View style={styles.cameraIconContainer}>
              <MaterialCommunityIcons
                name="camera"
                size={30}
                color="black"
                style={styles.cameraIcon}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <AppText style={styles.text}>User Information</AppText>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            titleStyle={styles.titleName}
            subStyle={styles.subTitle}
          />
        )}
      />
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <AppButton title="Save" color="orange"></AppButton>
        </View>
      </View>
      <ImageSelectionModal
        visible={modalVisible}
        onSelectOption={uploadImage}
        onCancel={() => removeImage()}
        onCameraPress={() => uploadImage()}
        onGalleryPress={() => uploadImage("gallery")}
      />
    </Screen>
  );
}

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
