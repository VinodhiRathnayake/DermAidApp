import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MenuScreen from "../screens/MenuScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PredictionScreen from "../screens/PredictionScreen";
import AppHeader from "../components/AppHeader";
import colors from "../config/colors";
import PredictionRecordsScreen from "../screens/PredictionRecordsScreen";
import AboutUs from "../screens/AboutUs";
import { View } from "react-native";

// import AccountNavigator from "./AccountNavigator";
// import FeedNavigator from "./FeedNavigator";
// import ListingEditScreen from "../screens/ListingEditScreen";
// import NewListingButton from "./NewListingButton";
// import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (

    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarStyle: {
            position: "absolute",
          backgroundColor: "transparent", 
          bottom: 0, 
          left: 0,
          right: 0,
          elevation: 0,
          borderTopWidth: 0, 
        },
        tabBarLabelStyle: {
            color: "black", // Set the text color to white
            fontWeight: "bold",
          },
          
      }}
    
  >
    <Tab.Screen
   name="Home"
      component={MenuScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color="black" size={size} />
        ),
      }}
    />

<Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color="black" size={size} />
        ),
      }}
    />

<Tab.Screen
  name= "Scan"
      component={PredictionScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="camera" color="black" size={size} />
        ),
      }}
    />

    
<Tab.Screen
  name= "Records"
      component={PredictionRecordsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="notebook" color="black" size={size} />
        ),
      }}
    />

    
<Tab.Screen
  name= "About"
      component={AboutUs}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="compass" color="black" size={size} />
        ),
      }}
    />
   
  </Tab.Navigator>

);

export default AppNavigator;
