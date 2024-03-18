import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
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
  
    <SafeAreaView>

    <View style={styles.titleContainer}>
 
        <Text style={styles.headerTitle}>{title}</Text>
       

    </View>
    {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
    </SafeAreaView>
    
    
   
        
  );
}

const styles = StyleSheet.create({
  container: {
  
    flexDirection: 'row',
     
  },
 
  redText: {
    color: 'red',
  },
  
  titleContainer: {
  
    flexDirection: 'row',
    // marginBottom:15,
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