// This will be the component for blind-people friendy useState.  It will have to be big so that the user can touch without seeing it

import React, { useEffect } from "react";

import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

import colors from "../vars/colors";
import fonts from "../vars/fonts";

const AccessibleButton = ({ imageSrc, text, onSelect }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onSelect}>
        <Image style={styles.image} source={imageSrc} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccessibleButton;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    width: 500,
    height: 500,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.accessableButtonColor,
    borderWidth: 2,
    // backgroundColor: "#000",
    borderRadius: 100,
    borderColor: "#000",
  },
  text: {
    color: colors.accessableButtonTextColor,
    fontSize: fonts.accessibleButtonFontSize,

    letterSpacing: fonts.defaultButtonLetterSpacing,
    fontWeight: fonts.accessibleButtonFontWeight,
    paddingTop: 20,
  },
  image: {
    width: 240,
    height: 240,
    resizeMode: "contain",
  },
});
