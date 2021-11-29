// Sign Up Page

import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import UserService from "../services/UserService";
import colors from "../vars/colors";

import CustomTextInput from "../components/CustomTextInput";
import DefaultButton from "../components/DefaultButton";

const SignUpPage = ({ navigation }) => {
  // initial new user state
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    password: "",
  });

  // Set fields of user on change
  const onTextInputChange = (value, field) => {
    setUser({ ...user, [field]: value });
  };

  // Save changes - TODO: POST to backend
  const submit = () => {
    UserService.createUser(user);
    navigation.navigate("Home");
  };
  // console log user when user changes
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      {/* TEXT FIELDS */}
      <SafeAreaView style={styles.textBoxContainer}>
        <CustomTextInput
          value={user.name}
          placeholder={"Name"}
          keyboardType={"default"}
          setValue={(newValue) => onTextInputChange(newValue, "name")}
        />
        <CustomTextInput
          value={user.phoneNumber}
          placeholder={"Phone Number"}
          keyboardType={"number-pad"}
          setValue={(newValue) => onTextInputChange(newValue, "phoneNumber")}
        />
        <CustomTextInput
          value={user.password}
          placeholder={"Password"}
          keyboardType={"default"}
          secureText={true}
          setValue={(newValue) => onTextInputChange(newValue, "password")}
        />
      </SafeAreaView>
      {/* SUBMIT BUTTON */}
      <View style={styles.submitButton}>
        <DefaultButton text={"Submit"} onSelect={submit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: colors.defaultBackground,
    paddingHorizontal: 30,
  },
  submitButton: {
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  textBoxContainer: {
    paddingHorizontal: 30,
  },
});

export default SignUpPage;
