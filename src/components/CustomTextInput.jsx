// This will be the textbox for filling in String values such as NamedCurve, email, and password

import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const CustomTextInput = ({
  value,
  setValue,
  placeholder,
  keyboardType,
  secureText,
}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={setValue}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureText || false}
      returnKeyType={"done"}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CustomTextInput;
