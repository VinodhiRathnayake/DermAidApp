//import statements
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SigninDetailsScreen from "../screens/SigninDetailsScreen";
import SignupDetailsScreen from "../screens/SignupDetailsScreen";
import SignupScreen from "../screens/SignupScreen";
import SigninScreen from "../screens/SigninScreen";

const Stack = createStackNavigator();

//Component for handling the authentication navigation flow.
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Sign in"
      component={SigninDetailsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Sign up"
      component={SignupDetailsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Sign upmail"
      component={SignupScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Sign inmail"
      component={SigninScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
