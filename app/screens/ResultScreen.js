import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Button from '../components/Button';

function ResultScreen(props) {
  return (
    <Screen style={styles.container}>
        <AppHeader title="RESULT"/>
        <Image source={require('../assets/DermAidlogo.jpg')} style={styles.image} />

        <AppText>Disease: HIVES</AppText>

        <AppText>Date: 20-12-2023</AppText>
        <AppText>Time: 9.40pm</AppText>
        <View style={styles.buttonContainer}>
            <Button title="Learn More About the Disease.." color= "red"></Button>
            <Button title="SAVE" color= "red"></Button>
            <Button title="DON'T SAVE" color= "red"></Button>
          </View>


    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    marginTop:20,
    marginBottom:20,
    width:200,
    height:200,
    borderRadius:10,
   
  },
  buttonContainer: {

    justifyContent:"center",
     marginTop: 20,
     width:350,
     
 
   }
});

export default ResultScreen;