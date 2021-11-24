// This page will offer the user the option to "Sign in" or Sign UAParser.

// It will be two buttons that take you to different components.

// Hopefully, we can get it to not open if someone has already logged in on the device

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import colors from "../vars/colors";

import DefaultButton from "../components/DefaultButton";
import fonts from "../vars/fonts";

// TODO: add logo or some nice background asthetic

const IntroPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        {/* Logo */}
        <Image
          style={styles.image}
          // https://pixabay.com/illustrations/logo-bird-blue-design-wing-animal-4131033/
          source={require("../../assets/bird-pixabay.png")}
        />
        {/* Title */}
        <Text style={styles.title}>BirdBox</Text>
      </View>
      {/* Buttons */}
      <DefaultButton
        text="Login"
        onSelect={() => navigation.navigate("Signin")}
      />

      <DefaultButton
        text="Sign Up"
        onSelect={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    backgroundColor: colors.defaultBackground,
    paddingVertical: 80,
    paddingHorizontal: 60,
  },
  image: {
    width: 200,
    height: 240,
    resizeMode: "contain",
  },
  topContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: fonts.titleFontSize,
    color: colors.titleTextColor,
    fontWeight: fonts.titleFontWeight,
  },
});

export default IntroPage;
