//Import statements
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignupScreen";
import AppNavigator from "./AppNavigator";
import OTPVerificationScreen from "../screens/OTPVerificationScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Credentials Context
import { CredentialsContext } from "../components/CredentialsContext";

const Stack = createNativeStackNavigator();


// Component for handling the root navigation stack of the application.
const RootStack = () => {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"
          >
            {storedCredentials ? (
              <Stack.Screen name="AppNavigator" component={AppNavigator} />
            ) : (
              <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen
                  name="Verification"
                  component={OTPVerificationScreen}
                />
                <Stack.Screen
                  name="EditProfile"
                  component={EditProfileScreen}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
};

export default RootStack;
