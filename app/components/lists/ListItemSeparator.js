//Importing statements
import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";

// Defining a functional component
function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  // Styles for the separator

  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSeparator;
