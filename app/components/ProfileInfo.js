//Import statements
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// custom components
import { Colors } from "./styles";
import StyledText from "./StyledText";

const ProfileInfo = ({ children, label, style, icon }) => {
  return (
    // View container for profile information
    <View
      style={[
        { backgroundColor: Colors?.secondary },
        styles.profileInfo,
        style,
      ]}
    >
      {/* View container for label and icon */}
      <View style={styles.label}>
        {/* Icon for the profile information */}
        <MaterialCommunityIcons name={icon} size={25} color={Colors.brand} />
        {/* Label for the profile information */}
        <StyledText style={[{ color: Colors?.tertiary, marginLeft: 15 }]}>
          {label}
        </StyledText>
      </View>
      {children}
    </View>
  );
};

// Styles for the ProfileInfo component
const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    height: 60,
    marginBottom: 2,
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProfileInfo;
