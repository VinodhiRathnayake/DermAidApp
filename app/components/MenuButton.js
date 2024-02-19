import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";

function MenuButton({ title, onPress, color = "white", children }) {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}
    >
      <View style={styles.buttonContent}>
        {children}
        <Text style={styles.text}>{title}</Text>
        <View style={styles.strip} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor:colors.blue,
    
    padding: 10,
    width: "60%",
    position: "relative", 

  
  },
  text: {
    color: colors.black,
    fontSize: 18,
  

    fontWeight: "bold",
  },
  buttonContent: {
    flexDirection: "row",
 
    
  },
  strip: {
    position: "absolute",
    backgroundColor: "black",
    height: 4,
    width: "100%", 
    bottom: -7, 

  },
});

export default MenuButton;
