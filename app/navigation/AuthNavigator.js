import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SigninDetailsScreen from "../screens/SigninDetailsScreen";
import SignupDetailsScreen from "../screens/SignupDetailsScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Sign in" component={SigninDetailsScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Sign up" component={SignupDetailsScreen} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

export default AuthNavigator;
