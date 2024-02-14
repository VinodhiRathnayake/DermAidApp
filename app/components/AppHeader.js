import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from './AppText';

function AppHeader({title}) {
  return (
    <View>
    <View style={styles.container}>
        <MaterialCommunityIcons name="menu" color="black" size={35} style={styles.icon}/>
        <AppText style={styles.text}>
        Derm< Text style={styles.redText}>Aid</Text>
        </AppText>
    </View>

    <View style={styles.titleContainer}>
        <MaterialCommunityIcons name="arrow-left" color="black" size={45} />
        <Text style={styles.headerTitle}>{title}</Text>
       

    </View>
    </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -50,
    flexDirection: 'row',
     
  },
  icon: {
    marginRight:260,
  },
  text: {
    marginTop: 5,
    fontSize: 27,
    color:'grey',
    fontWeight: 'bold',
  },
  redText: {
    color: 'red',
  },
  
  titleContainer: {
    marginTop: 10,
    flexDirection: 'row',
    marginBottom:15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:120,
    fontSize: 30,

   

  },
});

export default AppHeader;