//Import statements
import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

// Defining a functional component named AppFormField that takes props
function AppFormField({ name, width, ...otherProps }) {
  // Extracting necessary formik context
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>

{/*  AppTextInput component for user input */}

      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
         {/* ErrorMessage component to display error message */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
// Exporting the AppFormField component as default
export default AppFormField;
