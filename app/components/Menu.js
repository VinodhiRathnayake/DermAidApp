import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuButton from './MenuButton';


function Menu({onClose}) {
    const handleMenuItemClick = () => {
        onClose();
  };
  return (
    <View style={styles.container}>
        <MenuButton title="HOME"/>
        <MenuButton title="EDIT PROFILE" />
        <MenuButton title="NEW PREDICTION" />
        <MenuButton title="PREDICTION RECORDS" />
        <MenuButton title="ABOUT US" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
  
  },
  
});

export default Menu;