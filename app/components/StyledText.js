//Import statements
import { Text } from "react-native";
import { Colors } from "./styles";
const StyledText = ({ children, small, big, bold, style, ...props }) => {
  return (
    <Text
      style={[
        {
          color: Colors?.tint,
          fontSize: small ? 13 : big ? 24 : 15,
          fontWeight: big || bold ? "bold" : "normal",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

// Exporting the StyledText component as default
export default StyledText;
