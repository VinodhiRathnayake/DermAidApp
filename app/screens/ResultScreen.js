import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Button from '../components/Button';
import colors from '../config/colors';

function ResultScreen(props) {
  return (
    <Screen style={styles.container}>
        <AppHeader title="RESULT"/>
        <Image source={require('../assets/DermAidlogo.jpg')} style={styles.image} />

        <AppText>Disease: HIVES</AppText>

        <AppText>Date: 20-12-2023</AppText>
        <AppText>Time: 9.40pm</AppText>

        <View style={styles.buttonContainer}>
            <Button title="Learn More About the Disease.."  color="orange" ></Button>
            <Button title="SAVE" color="orange" ></Button>
            <Button title="DON'T SAVE" color="orange" ></Button>
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
    
     marginTop: 40,
     width:360,
     borderRadius: 25,

    
  
    justifyContent: "center",
    alignItems: "center",
 
   },
  
});

export default ResultScreen;