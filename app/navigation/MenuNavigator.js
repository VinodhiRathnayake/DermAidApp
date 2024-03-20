//Import statement
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import PredictionScreen from "../screens/PredictionScreen";
import PredictionRecordsScreen from "../screens/PredictionRecordsScreen";
import AboutUs from "../screens/AboutUs";
import ResultScreen from "../screens/ResultScreen";

const Stack = createStackNavigator();

//Menu navigator component
const MenuNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Menu"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="NewPrediction"
      component={PredictionScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PredictionRecords"
      component={PredictionRecordsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AboutUs"
      component={AboutUs}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Result"
      component={ResultScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default MenuNavigator;
