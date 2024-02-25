import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AppText from './AppText';
import Menu from './Menu';

function AppHeader({title}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigation();

  const handleMenuPress = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  useFocusEffect(
    React.useCallback(() => {
      // Close the menu when the profile screen is focused
      setIsMenuOpen(false);
    }, [])
  );

  return (
  
    <View>
    <View style={styles.container}>
    
    <TouchableOpacity onPress={handleMenuPress}>
        <MaterialCommunityIcons name="menu" color="black" size={35} style={styles.icon}/>
        </TouchableOpacity>
        <AppText style={styles.text}>
        Derm< Text style={styles.redText}>Aid</Text>
        </AppText>
    </View>
    

    <View style={styles.titleContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}> 
        <MaterialCommunityIcons name="arrow-left" color="black" size={45} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
       

    </View>
    {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
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
    color:'#3b3b3b',
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
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

   

  },
});

export default AppHeader;