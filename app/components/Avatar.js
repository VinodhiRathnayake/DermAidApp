//Import statements
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "./styles";
import placeholder from "../assets/profile1.jpeg";

// Avatar component definition
const Avatar = ({
  uri,
  style,
  imgStyle,
  onPress,
  onButtonPress,
  aviOnly = false,
  ...props
}) => {
  return (
    // Main container view
    <View
      style={[styles.container, { marginBottom: aviOnly ? 0 : 15 }, style]}
      {...props}
    >
      <TouchableOpacity onPress={onPress}>
        {/* Avatar image */}
        <Image
          source={uri ? { uri } : placeholder}
          style={[
            styles.image,
            aviOnly && { height: 35, width: 35, borderWidth: 0 },
            imgStyle,
          ]}
        />
        {/* Edit button */}
        {!aviOnly && (
          <TouchableOpacity style={styles.editButton} onPress={onButtonPress}>
            <MaterialCommunityIcons
              name="camera-outline"
              size={30}
              color={Colors.brand}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Avatar component
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "relative",
  },
  image: {
    borderRadius: 75,
    width: 150,
    height: 150,
    borderColor: Colors.secondary,
    borderWidth: 5,
  },
  editButton: {
    backgroundColor: Colors.secondary,
    borderRadius: 24,
    padding: 8,
    position: "absolute",
    right: 5,
    bottom: 5,
  },
});

export default Avatar;
