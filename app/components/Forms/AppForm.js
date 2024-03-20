//Import statements
import React from "react";
import { Formik } from "formik";
// Defining a functional component
function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  // Returning a Formik component to manage form state and validation
  return (
    
    <Formik
      initialValues={initialValues} // Initial values for form fields
      onSubmit={onSubmit}    // Function to handle form submission
      validationSchema={validationSchema}   // Schema for form validation
    >
       // Render prop function to render children components
      {() => <>{children}</>}
    </Formik>
  );
}

// Exporting the AppForm component as default
export default AppForm;
