//  importing statements
import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppText from "../AppText";
import colors from "../../config/colors";

function ListItem({
  title,
  subTitle,
  subTitle2,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  style,
  titleStyle, 
  imageStyle,
  subStyle,
  
}) {
  
  return (
    <GestureHandlerRootView>
      {/* Swipeable component for handling swipe gestures */}
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="transparent" onPress={onPress}>
        <View style={[styles.container, style]}>
           {/* Icon component passed as prop */}
          {IconComponent}
          {/* Image component with optional styling */}
          {image && <Image style={[styles.image, imageStyle]} source={image} />}
          <View style={styles.detailsContainer}>
            {/* Render title text with custom and default styles */}
          <AppText style={[styles.title, titleStyle]} numberOfLines={2} ellipsizeMode="tail">
                {title}
              </AppText>
              {/* Render subtitle text (if available) with custom and default styles */}
              {subTitle && (
                <AppText style={[styles.subTitle, subStyle]} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
              {/* Render second subtitle text (if available) with default styles */}
              {subTitle2 && (
                <AppText style={styles.subTitle2} numberOfLines={2}>
                  {subTitle2}
                </AppText>
            )}
          </View>
      
        </View>
      </TouchableHighlight>
    </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  // Styling for the main container
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderRadius:15,
  },
   // Styling for the text details container
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  
  },
   // Styling for the image
  image: {
    width: 120,
    height: 120,
  },
  // Styling for the subtitle text
  subTitle: {
    color: colors.white,
    fontWeight:"bold",
  },
  // Styling for the second subtitle text
  subTitle2: {
    color: colors.white,
    fontWeight:"bold",
  },
  // Styling for the title text
  title: {
    color: colors.black,
    fontWeight:"bold",
    
  },
});

// Exporting the ListItem component as default
export default ListItem;
