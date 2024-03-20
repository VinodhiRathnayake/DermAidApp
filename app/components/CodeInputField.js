//Import statements
import React, { useRef, useState, useEffect } from "react";

import {
  HiddenTextInput,
  CodeInputSection,
  CodeInputContainer,
  CodeInput,
  CodeInputText,
  CodeInputFocused,
} from "./styles";

function CodeInputField({ setPinReady, code, setCode, maxLength }) {
  const codeDigitsArray = new Array(maxLength).fill(0);

  // ref for text input
  const textInputRef = useRef(null);
  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

  const handleOnPress = () => {
    setInputContainerIsFocused(true);
    textInputRef?.current?.focus();
  };

  const handleOnBlur = () => {
    setInputContainerIsFocused(false);
  };

  useEffect(() => {
    // toggle submit button state
    setPinReady(code.length === maxLength);
    return () => setPinReady(false);
  }, [code]);

  const toCodeDigitInput = (_value, index) => {
    const emptyInputChar = " ";
    const digit = code[index] || emptyInputChar;

    // formatting
    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const codeIsFull = code.length === maxLength;

    const isDigitFocused = isCurrentDigit || (isLastDigit && codeIsFull);

    const StyledCodeInput =
      inputContainerIsFocused && isDigitFocused ? CodeInputFocused : CodeInput;

    return (
      <StyledCodeInput key={index}>
        <CodeInputText>{digit}</CodeInputText>
      </StyledCodeInput>
    );
  };

  return (
    <CodeInputSection>
      <CodeInputContainer onPress={handleOnPress}>
        {codeDigitsArray.map(toCodeDigitInput)}
      </CodeInputContainer>
      <HiddenTextInput
        ref={textInputRef}
        value={code}
        onChangeText={setCode}
        onSubmitEditing={handleOnBlur}
        returnKeyType="done"
        textContentType="oneTimeCode"
        keyboardType="number-pad"
        maxLength={maxLength}
      />
    </CodeInputSection>
  );
}

export default CodeInputField;
