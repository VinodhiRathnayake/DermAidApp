import NavigationTheme from "./app/navigation/NavigationTheme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import SigninScreen from "./app/screens/SigninScreen";
import SignupScreen from "./app/screens/SignupScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RootStack from "./app/navigation/RootStack";
import MenuScreen from "./app/screens/MenuScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer theme={NavigationTheme}>
    //  <AppNavigator/>
      // <AuthNavigator/> 
      //  <NavigationContainer/> 

    // <WelcomeScreen />

    <RootStack />
    // <LoginScreen />
    // <SignupScreen />

    // <SigninScreen/>

    // <SigninDetailsScreen />

    // <SignupDetailsScreen />
    // <AboutUs/>
    // <MenuScreen/>
    // <ProfileScreen/>
    // <PredictionRecordsScreen/>
    // <EditProfileScreen/>
    // <PredictionScreen/>
    // <ResultScreen/>
  );
}
