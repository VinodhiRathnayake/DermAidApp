//Import statements
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";

// AppHeader component definition
function AppHeader({ title }) {
  return (
    <SafeAreaView>
      {/* Container for the header title */}
      <View style={styles.titleContainer}>
        {/* Header title text */}
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 // Style for the title container
  titleContainer: {
    flexDirection: "row",
  },
   // Style for the header title
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

// Exporting the AppHeader component as default
export default AppHeader;
