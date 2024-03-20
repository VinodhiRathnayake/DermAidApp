//Import statements
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

function Button({ title, onPress, color, style, children }) {
  return (
    // Touchable opacity for button press
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      {/* View container for button content */}
      <View style={styles.buttonContent}>
        {children}
        {/* Button title text */}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

// Styles for the Button component
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 11,
    width: "100%",
    marginVertical: 5,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    marginLeft: 6,
    fontWeight: "bold",

  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button;
