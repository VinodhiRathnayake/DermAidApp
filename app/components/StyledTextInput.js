//Import statements
import { useState } from "react";
import { StyleSheet, View, TextInput, Platform } from "react-native";
import StyledText from "./StyledText";

// icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "./styles";

// Check if the platform is iOS
const onIOS = Platform.OS == "ios";

// StyledTextInput component definition
const StyledTextInput = ({ label, icon, style, multiline, ...props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftIcon}>
        <MaterialCommunityIcons name={icon} size={30} color={Colors.brand} />
      </View>

      {/* Label for the input field */}
      <StyledText>{label} </StyledText>

      <TextInput
        placeholderTextColor={Colors.placeholder}
        {...props}
        multiline={multiline}
        numberOfLines={multiline && 5}
        style={[
          styles.inputField,
          multiline && styles.multilineInputField,

          {
            color: Colors.tint,
            borderColor: Colors.gray,
            backgroundColor: Colors.primary,
            paddingRight: 15,
          },
          style,
        ]}
      />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {},
  leftIcon: {
    left: 15,
    top: onIOS ? 34 : 36,
    position: "absolute",
    zIndex: 1,
  },
  inputField: {
    paddingLeft: 55,
    paddingRight: 55,
    borderRadius: 15,
    fontSize: 16,
    height: 60,
    marginVertical: 3,
    marginBottom: 25,
  },
  multilineInputField: {
    height: onIOS ? 118 : 132,
    textAlignVertical: "top",
    paddingTop: onIOS ? 20 : 15,
    paddingBottom: onIOS ? 20 : 15,
  },
  row: {
    flexDirection: "row",
  },
});

export default StyledTextInput;
