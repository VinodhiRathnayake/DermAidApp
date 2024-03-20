//Import statements
import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../Button";

// Defining a functional component
function SubmitButton({ title }) {
  // Extracting handleSubmit function from Formik context
  const { handleSubmit } = useFormikContext();

  // Rendering a custom Button component
  return <AppButton title={title} onPress={handleSubmit} />;
}

// Exporting the SubmitButton component as default
export default SubmitButton;
