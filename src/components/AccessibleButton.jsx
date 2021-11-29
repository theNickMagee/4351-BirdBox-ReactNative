// This will be the component for blind-people friendy useState.  It will have to be big so that the user can touch without seeing it

import React, { useEffect } from "react";

import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

import colors from "../vars/colors";
import fonts from "../vars/fonts";

const AccessibleButton = ({ imageSrc, text, onSelect, radius }) => {
  const styles = StyleSheet.create({
    button: {
      display: "flex",
      width: radius ? radius : 300,
      height: radius ? radius : 300,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",

      backgroundColor: colors.accessableButtonColor,
      borderWidth: 2,
      // backgroundColor: "#000",
      borderRadius: 100,
      borderColor: "#000",
    },
    text: {
      color: colors.accessableButtonTextColor,
      fontSize: radius ? radius / 10 : fonts.accessibleButtonFontSize,

      letterSpacing: fonts.defaultButtonLetterSpacing,
      fontWeight: fonts.accessibleButtonFontWeight,
      paddingTop: 20,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    image: {
      width: radius ? radius / 3 : 100,
      height: radius ? radius / 3 : 100,
      resizeMode: "contain",
    },
  });

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
