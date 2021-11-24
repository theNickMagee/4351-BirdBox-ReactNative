// This button will be used for default options.  Such as "submit", "login", "sign up", and "confirm"

import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import colors from "../vars/colors";
import fonts from "../vars/fonts";

const DefaultButton = ({ text, onSelect }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onSelect}>
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.defaultButtonColor,
    padding: 30,
    borderRadius: 10,
  },
  text: {
    color: colors.defaultButtonTextColor,
    fontSize: fonts.defaultButtonFontSize,
    textTransform: fonts.defaultButtonTextTransform,
    letterSpacing: fonts.defaultButtonLetterSpacing,
    fontWeight: fonts.defaultButtonFontWeight,
  },
});

export default DefaultButton;
