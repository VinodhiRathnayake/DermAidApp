//Importing statements
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppHeader from '../components/AppHeader';


//displays information about the DermAid app and its developers.
function AboutUs(props) {

  return (
    <Screen>
     
        <AppHeader title="About Us" />
     
       
<View style={styles.container}>


    <AppText style={styles.text}>
    Derm< Text style={styles.redText}>Aid</Text> app has the potential to revolutionize the diagnosis and management of skin
    diseases. By providing a more accessible, affordable, and non-invasive alternaive to traditional
    methods, the app could help to improve access to dermatology care for people in
    underserved areas and those with limited financial resources. The app could also help
    to detect skin diseases at an earlier stage when they are more likely to be treatable.
</AppText>
<AppText style={styles.nameText} >
  Developers:
    </AppText>
    <AppText style={styles.nameText} >Jehan Fernando</AppText>
    <AppText style={styles.nameText} >Vinodhi Rathnayake</AppText>
    <AppText style={styles.nameText} >Dinushi Kolambathantri</AppText>
    <AppText style={styles.nameText} >Amindee De Alwis</AppText>
    <AppText style={styles.nameText} >Uvindu Ayshcharya</AppText>
</View>
<View style={styles.contactContainer}>
<MaterialCommunityIcons name="email" color="black" size={23} style={styles.icon}/>
<Text style={styles.email}>supportdermaid@gmail.com</Text>
</View>



    </Screen>
  );
}

//styles for about us page
const styles = StyleSheet.create({
  container:{
    padding:18,
    position:"relative",

  },
  text: {
    fontWeight: 'bold', 
    textAlign: 'center', 
    lineHeight: 29,
    marginBottom:40,
    fontSize: 18,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
   marginTop:30,
  },
  icon: {
    marginRight: 12, 
  },
  email: {
    fontSize: 15,
  },

  redText: {
    color: 'red',
    fontWeight: 'bold',
  },
  nameText: {
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom:5,
    fontSize: 18,
  },
 
});

export default AboutUs;