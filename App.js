import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroPage from "./src/pages/IntroPage";
import SignInPage from "./src/pages/SignInPage";
import SignUpPage from "./src/pages/SignUpPage";
import HomePage from "./src/pages/HomePage";
import CameraPage from "./src/pages/CameraPage";
import CaregiverPage from "./src/pages/CaregiverPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen
          name="Intro"
          component={IntroPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Signin" component={SignInPage} />
        <Stack.Screen
          name="Signup"
          component={SignUpPage}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen name="Camera" component={CameraPage} />
        <Stack.Screen name="Caregiver" component={CaregiverPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
