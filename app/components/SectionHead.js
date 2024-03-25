//Import statements
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "./styles";
import StyledText from "../components/StyledText";

const SectionHead = ({ children, option, style, onPress }) => {
  return (
    //View container for section header
    <View style={[styles.sectionHead, style]}>
      {/* Main section header text */}
      <StyledText bold style={styles.headText}>
        {children}
      </StyledText>
      {/* Optional text or action */}
      <TouchableOpacity onPress={onPress}>
        <StyledText small style={styles.optionText}>
          {option}
        </StyledText>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the SectionHead component
const styles = StyleSheet.create({
  sectionHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headText: {
    color: Colors.tertiary,
  },
  optionText: {
    color: Colors.tertiary + "aa",
  },
});

export default SectionHead;
