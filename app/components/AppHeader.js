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
        <MaterialCommunityIcons name="arrow-left" color="black" size={45} style={styles.icon}/>
        <Text style={styles.headerTitle}>{title}</Text>
       

    </View>
    </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -40,
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
    marginTop: 15,
    flexDirection: 'row',
  },
  titleContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center', 
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
   alignItems:"center",
  },
});

export default AppHeader;