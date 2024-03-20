//Import statements
import { Platform } from "react-native";
import colors from "./colors";

// Default style object containing commonly used styles
export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "notoserif" : "Avenir",
  },
};
