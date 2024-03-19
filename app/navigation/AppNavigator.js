import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import PredictionScreen from "../screens/PredictionScreen";
import PredictionRecordsScreen from "../screens/PredictionRecordsScreen";
import AboutUs from "../screens/AboutUs";
import MenuNavigator from "./MenuNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
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
        //     tabBarActiveTintColor: "white",
        // tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={MenuNavigator}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? "red" : "black"} // Change color when focused
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="account"
              color={focused ? "red" : "black"}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Scan"
        component={PredictionScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="camera"
              color={focused ? "red" : "black"}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Records"
        component={PredictionRecordsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="notebook"
              color={focused ? "red" : "black"}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={AboutUs}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="compass"
              color={focused ? "red" : "black"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
