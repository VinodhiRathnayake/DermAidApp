import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

import { Platform } from "react-native";
import Screen from '../components/Screen';


function WelcomeScreen(props) {
  return (
    <Screen>
    <View style={styles.container}>
      
        <Image
        style={[styles.image]}
        source={require("../assets/DermAidlogo.jpg")}
      />
     
        <Text style={styles.welcomeText}>Your Skin Journey Starts Here!</Text>
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => console.log('Button Pressed')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

    </View>
    </Screen>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 200,
  },
  welcomeText: {
    color: colors.white,
    marginTop: 70,
    fontSize:38,
    textAlign: 'center',
    fontWeight:'bold',
  },
  buttonContainer: {
    marginTop: 90,
    backgroundColor: colors.white,
    width: 330, 
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'orange', 
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default WelcomeScreen;