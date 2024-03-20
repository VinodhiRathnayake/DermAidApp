//Importing statements
import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";

// Defining a functional component
function ErrorMessage({ error, visible }) {
  // Conditional rendering to display error message
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  // Styles for error message
  error: { 
    color: "red",
    marginTop:-9,
 },
});

// Exporting the ErrorMessage component
export default ErrorMessage;
