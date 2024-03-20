//Import statements
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Modal } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  PageTitle,
  InfoText,
  StyledButton,
  ButtonText,
  Colors,
  ModalContainer,
  ModalView,
} from "../components/styles";

const VerificationModal = ({
  modalVisible,
  setModalVisible,
  successful,
  requestMessage,
  persistLoginAfterOTPVerification,
}) => {
  // Handles the button press event to close the modal.
  const buttonHandler = () => {
    if (successful) {
      persistLoginAfterOTPVerification();
    }
    setModalVisible(false);
  };

  return (
    <Modal animationType="slide" visible={modalVisible} transparent={true}>
      <ModalContainer>
        {!successful && (
          <FailContent
            buttonHandler={buttonHandler}
            errorMsg={requestMessage}
          />
        )}
        {successful && <SuccessContent buttonHandler={buttonHandler} />}
      </ModalContainer>
    </Modal>
  );
};

// SuccessContent component displays content for successful verification.
const SuccessContent = ({ buttonHandler }) => {
  return (
    <ModalView>
      <StatusBar style="dark" />
      <Ionicons name="checkmark-circle" size={100} color={Colors.green} />
      <PageTitle
        style={{ fontSize: 25, color: Colors.tertiary, marginBottom: 10 }}
      >
        Verified!
      </PageTitle>
      <InfoText style={{ marginBottom: 15 }}>
        Congratulations, You have successfully verified your account.
      </InfoText>
      <StyledButton
        style={{
          backgroundColor: Colors.green,
          flexDirection: "row",
        }}
        onPress={buttonHandler}
      >
        <ButtonText style={{ padding: 5 }}>Continue to App</ButtonText>
        <Ionicons
          name="arrow-forward-circle"
          size={25}
          color={Colors.primary}
        />
      </StyledButton>
    </ModalView>
  );
};

// FailContent component displays content for failed verification.
const FailContent = ({ buttonHandler, errorMsg }) => {
  return (
    <ModalView>
      <StatusBar style="dark" />
      <Ionicons name="close-circle" size={100} color={Colors.red} />
      <PageTitle
        style={{ fontSize: 25, color: Colors.tertiary, marginBottom: 10 }}
      >
        Failed!
      </PageTitle>
      <InfoText style={{ marginBottom: 10 }}>
        {`Account verification failed. ${errorMsg}`}
      </InfoText>
      <StyledButton
        style={{
          backgroundColor: Colors.red,
          flexDirection: "row",
        }}
        onPress={buttonHandler}
      >
        <ButtonText style={{ padding: 5 }}>Try Again</ButtonText>
        <Ionicons name="arrow-redo-circle" size={25} color={Colors.primary} />
      </StyledButton>
    </ModalView>
  );
};

export default VerificationModal;
