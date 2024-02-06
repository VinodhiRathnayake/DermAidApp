import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";

function Button({ title, onPress, color = "white" , children}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <View style={styles.buttonContent}>
        {children}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
    width: "100%",
    marginVertical: 9,
  },
  text: {
    color: colors.black,
    fontSize: 18,
    marginLeft: 6,

    // fontWeight: "bold",
  },
  buttonContent: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
  },
});

export default Button;
