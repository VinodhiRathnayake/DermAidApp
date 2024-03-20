 // Importing SecureStore module from Expo
import * as SecureStore from "expo-secure-store";

// Function to save a value securely in the device's keychain
export const saveSecurely = async (key, value) => {
  try {
    // Convert value to JSON string
    const jsonValue = JSON.stringify(value);
    // Save JSON string securely
    await SecureStore.setItemAsync(key, jsonValue);
  } catch (error) {
    throw error;
  }
};

// Function to fetch a securely saved value from the device's keychain
export const fetchSecurely = async (key) => {
  try {
    // Retrieve JSON string from key
    const jsonValue = await SecureStore.getItemAsync(key);
    // Parse JSON string to value or return null if not found
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    throw error;
  }
};

// Function to delete a securely saved value from the device's keychain
export const deleteSecurely = async (key) => {
  return await SecureStore.deleteItemAsync(key);
};
