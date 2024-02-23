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
}) {
  return (
    <GestureHandlerRootView>
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="transparent" onPress={onPress}>
        <View style={[styles.container, style]}>
          {IconComponent}
          {image && <Image style={[styles.image, imageStyle]} source={image} />}
          <View style={styles.detailsContainer}>
          <AppText style={[styles.title, titleStyle]} numberOfLines={2} ellipsizeMode="tail">
                {title}
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
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
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    // backgroundColor: colors.white,

    borderRadius:15,
  },
  detailsContainer: {
    // flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  
  },
  image: {
    width: 120,
    height: 120,
    // borderRadius: 35,
  },
  subTitle: {
    color: colors.white,
    fontWeight:"bold",
  },
  subTitle2: {
    color: colors.white,
    fontWeight:"bold",
  },
  title: {
    // fontWeight: "500",
    color: colors.white,
    fontWeight:"bold",
    
  },
});

export default ListItem;
