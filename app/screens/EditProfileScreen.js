import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppHeader from '../components/AppHeader';
import ImageInput from '../components/ImageInput';
import AppText from '../components/AppText';
import colors from '../config/colors';
import Button from '../components/Button';
import { SubmitButton } from '../components/Forms';
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ImageSelectionModal from '../components/ImageSelectionModal';
import placeholder from "../assets/DermAidlogo.jpg";
import { Image } from 'react-native';

function EditProfileScreen(props) {
  const [imageUri, setImageUri] = useState(null);
  const [image, setImage] =useState();
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeImage = uri => {
    setImageUri(uri);
  };

  const uploadImage = async(mode) => {
    try{
let result ={};

      if(mode=== "gallery"){
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

      }else{
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }


      
      if(!result.canceled){
          await saveImage(result.assets[0].uri);
          setModalVisible(false); 
      }
    }catch(error){
      alert("Error uploading image:" + error.message);
      setModalVisible(false);

    }
  };


  const saveImage = async (image) =>{
    try{
      setImage(image);
      setModalVisible(false);

    }catch(error){
      throw error;
    }
  };

  const removeImage = async() => {
    try{
      saveImage(null);

    }catch({message}){
      alert(message);
      setModalVisible(false);
    }
  };

  // onCameraPress={() => uploadImage()}
  return (
    <Screen>
      <AppHeader title="EDIT PROFILE"/>
      <View style= {styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.imageContainer}>
            {imageUri ? 
              <Image source={{ uri: imageUri }} style={styles.image} /> :
              <Image source={placeholder} style={styles.image} />
            }
            <View style={styles.cameraIconContainer}>
              <MaterialCommunityIcons name="camera" size={30} color="black" style={styles.cameraIcon} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <AppText style={styles.text}>User Information</AppText>
      <AppText>First Name</AppText>
      <AppText>Last Name</AppText>
      <AppText>Email</AppText>
      <AppText>Gender</AppText>
      <AppText>Phone</AppText>
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
            <Button title="Save" color= "orange" ></Button>
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
  },
  text:{
    marginTop: 10,
    paddingLeft:10,
    fontWeight:"bold",
    color: colors.white,
    fontSize:25,
  },
  buttonContainer: {
    backgroundColor: colors.orange,
   justifyContent:"center",
    marginTop: 30,
    width:360,
    borderRadius: 25,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    padding: 5,
  },
  
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
});

export default EditProfileScreen;