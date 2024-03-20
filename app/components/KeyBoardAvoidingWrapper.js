//Import statements
import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "./styles";

const KeyboardAvoidingContainer = ({ children, backgroundColor, style }) => {
  // Get header height using useHeaderHeight hook
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* KeyboardAvoidingView to handle keyboard behavior */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={headerHeight}
      >
         {/* ScrollView to handle content scrolling */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[style]}
        >
          {/* Render children components */}
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// Exporting the KeyboardAvoidingContainer component as default
export default KeyboardAvoidingContainer;
