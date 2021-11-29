import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import IntroPage from "./src/pages/IntroPage";
import SignInPage from "./src/pages/SignInPage";
import SignUpPage from "./src/pages/SignUpPage";
import HomePage from "./src/pages/HomePage";
import CameraPage from "./src/pages/CameraPage";
import CaregiverPage from "./src/pages/CaregiverPage";
import ContactInfoPage from "./src/pages/ContactInfoPage";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  const [userDetails, setUserDetails] = useState();

  useEffect(async () => {
    try {
      const value = await AsyncStorage.getItem("userDetails");
      if (value !== null) {
        // We have data!!
        setUserDetails(value);
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
    // if (userDetails) {
    //   // const foundUser = JSON.parse(userDetails);
    //   setUserDetails(userDetails);
    // }
  }, []);

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
        <Stack.Screen
          name="Signin"
          component={SignInPage}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpPage}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen name="Camera" component={CameraPage} />
        <Stack.Screen name="Caregiver" component={CaregiverPage} />
        <Stack.Screen
          name="Emergency"
          component={ContactInfoPage}
          options={{ title: "Emergency Contact" }}
        />
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
