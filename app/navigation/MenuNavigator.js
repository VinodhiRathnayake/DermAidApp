import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SigninDetailsScreen from "../screens/SigninDetailsScreen";
import SignupDetailsScreen from "../screens/SignupDetailsScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import MenuScreen from "../screens/MenuScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import PredictionScreen from "../screens/PredictionScreen";
import PredictionRecordsScreen from "../screens/PredictionRecordsScreen";
import AboutUs from "../screens/AboutUs";
import Menu from "../components/Menu";

const Stack = createStackNavigator();

const MenuNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Menu"
      component={MenuScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="NewPrediction" component={PredictionScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="PredictionRecords" component={PredictionRecordsScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

export default MenuNavigator;
