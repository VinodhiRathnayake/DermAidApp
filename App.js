import SigninDetailsScreen from "./app/screens/SigninDetailsScreen";
import SigninScreen from "./app/screens/SigninScreen";
import SignupScreen from "./app/screens/SignupScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignupDetailsScreen from "./app/screens/SignupDetailsScreen";
import AboutUs from "./app/screens/AboutUs";
import AppHeader from "./app/components/AppHeader";
import MenuScreen from "./app/screens/MenuScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import PredictionRecordsScreen from "./app/screens/PredictionRecordsScreen";
import EditProfileScreen from "./app/screens/EditProfileScreen";
import ImageInput from "./app/components/ImageInput";
import PredictionScreen from "./app/screens/PredictionScreen";
import ResultScreen from "./app/screens/ResultScreen";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";


const Stack = createNativeStackNavigator();

export default function App() {
  
 
  return (

    <NavigationContainer theme={NavigationTheme}>
        <AppNavigator/>
      </NavigationContainer>
    // <WelcomeScreen />

    // <SigninScreen />

    // <SignupScreen />

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

