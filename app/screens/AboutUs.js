import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppHeader from '../components/AppHeader';
import ImageInput from '../components/ImageInput';


function AboutUs(props) {

  return (
    <Screen>
     
        <AppHeader title="About Us" />
     
       
<View style={styles.container}>
<AppText style={styles.text} >Skin diseases are a major global health concern, 
    affecting millions of people worldwide. Early diagnosis
    and treatement of skin diseases are crucial in preventing 
    complications and improving patient outcomes. However, traditional
    diagnostic methods such as clinical examinations and biopsies,
    can be time-consuming, expensive, and invasive.
    </AppText>

    <AppText style={styles.text}>
    Derm< Text style={styles.redText}>Aid</Text> app has the potential to revolutionize the diagnosis and management of skin
    diseases. By providing a more accessible, affordable, and non-invasive alternaive to traditional
    methods, the app could help to improve access to dermatology care for people in
    underserved areas and those with limited financial resources. The app could also help
    to detect skin diseases at an earlier stage when they are more likely to be treatable.
</AppText>
</View>
<View style={styles.contactContainer}>
<MaterialCommunityIcons name="email" color="black" size={23} style={styles.icon}/>
<Text style={styles.email}>supportdermaid@gmail.com</Text>
</View>
<View style={styles.contactContainer}>
<MaterialCommunityIcons name="phone" color="black" size={23} style={styles.icon}/>
<Text style={styles.email}>+94 7700000000</Text>
</View>
<Image
          style={[styles.image]}
          source={require("../assets/DermAidlogo.jpg")}
        />

    </Screen>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:15,

  },
  text: {
    fontWeight: 'bold', 
    textAlign: 'center', 
    lineHeight: 27,
    marginBottom:20,
    fontSize: 16,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:15,
  },
  icon: {
    marginRight: 12, 
  },
  email: {
    fontSize: 15,
  },
  image: {
    width: 170,
    height: 70,
    alignSelf: 'center',
    
  },
  redText: {
    color: 'red',
    fontWeight: 'bold',
  },
 
});

export default AboutUs;