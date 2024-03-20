//Import statements
import React from "react";
import { Text } from "react-native";
import defaultStyles from "../config/styles";

// AppText component definition
function AppText({ children, style, ...otherProps }) {
  return (
    // Rendering Text component with combined styles and additional props
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;