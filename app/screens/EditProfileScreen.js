import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppHeader from '../components/AppHeader';
import ImageInput from '../components/ImageInput';
import AppText from '../components/AppText';
import colors from '../config/colors';
import Button from '../components/Button';
import { SubmitButton } from '../components/Forms';

function EditProfileScreen(props) {
  const [imageUri, setImageUri] = useState(null);

  const handleChangeImage = uri => {
    setImageUri(uri);
  };
  return (
    <Screen>
      <AppHeader title="EDIT PROFILE"/>
      <View style= {styles.container}>
      <ImageInput imageUri={imageUri} onChangeImage={handleChangeImage} />
      </View>
      <AppText style={styles.text}>User Information</AppText>
      <AppText>First Name</AppText>
      <AppText>Last Name</AppText>
      <AppText>Email</AppText>
      <AppText>Gender</AppText>
      <AppText>Phone</AppText>
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
            <Button title="Save" color= "red"></Button>
          </View>
          </View>
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

   justifyContent:"center",
    marginTop: 20,
    width:350,
    

  }
});

export default EditProfileScreen;