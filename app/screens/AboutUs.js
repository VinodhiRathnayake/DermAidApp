import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Screen from '../components/Screen';

function AboutUs(props) {
  return (
    <Screen>
<Text>About us</Text>
<Text>Skin diseases are a major golbal health concern, 
    affecting millions of people worldwide. Early diagnosis
    and treatement of skin diseases are crucial in prventing 
    complications and improving patient outcomes. However, traditional
    diagnostic methods such as clinical examinations and biopsies,
    can be time-consuming, expensive, and invasive.
    </Text>

    <Text>
    DermAid app has the potential to revolutionize the diagnosis and management of skin
    diseases. By providing a more accessible, affordable, and non-invasive alternaive to traditional
    methods, the app could help to improve access to dermatology care for people in
    underserved areas and those with limited financial resources. The app could also help
    to detect skin diseases at an earlier stage when they are more likely to be treatable.
</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AboutUs;