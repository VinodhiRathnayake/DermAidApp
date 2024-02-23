import React from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppHeader from '../components/AppHeader';

function EditProfileScreen(props) {
  return (
    <Screen>
        <AppHeader title="EDIT PROFILE"/>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default EditProfileScreen;