//Import statements
import React from "react";
import { View, ActivityIndicator } from "react-native";

import {
  InfoText,
  EmphasizeText,
  InlineGroup,
  TextLink,
  TextLinkContent,
  Colors,
} from "../components/styles";

// ResendTimer component definition
const ResendTimer = ({
  activeResend,
  resendEmail,
  resendingEmail,
  resendStatus,
  timeLeft,
  targetTime,
}) => {
  return (
    <View>
      {/* Inline group for email resend options */}
      <InlineGroup>
        <InfoText>Didn't receive the email? </InfoText>

{/* Conditional rendering for resend link */}
        {!resendingEmail && (
          <TextLink
            style={{ opacity: !activeResend && 0.5 }}
            disabled={!activeResend}
            onPress={resendEmail}
          >
            <TextLinkContent
              resendStatus={resendStatus}
              style={{ textDecorationLine: "underline" }}
            >
              {resendStatus}
            </TextLinkContent>
          </TextLink>
        )}

 {/* Displaying activity indicator during resend */}
        {resendingEmail && (
          <TextLink disabled>
            <TextLinkContent>
              <ActivityIndicator color={Colors.brand} />
            </TextLinkContent>
          </TextLink>
        )}
      </InlineGroup>
      {/* Displaying countdown timer */}
      {!activeResend && (
        <InfoText>
          in<EmphasizeText> {timeLeft || targetTime}</EmphasizeText> second(s)
        </InfoText>
      )}
    </View>
  );
};

// Exporting the ResendTimer component as default
export default ResendTimer;
