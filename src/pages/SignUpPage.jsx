// Sign Up Page

import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import UserService from "../services/UserService";
import colors from "../vars/colors";

import CustomTextInput from "../components/CustomTextInput";
import DefaultButton from "../components/DefaultButton";

const SignUpPage = (props) => {
  // initial new user state
  const [user, setUser] = useState({
    Username: "",
    User_Number: "",
    Password: "",
    Emergency_Name: "",
    Emergency_Number: "",
    Emergency_Address: "",
  });

  // Set fields of user on change
  const onTextInputChange = (value, field) => {
    setUser({ ...user, [field]: value });
  };

  // Save changes - TODO: POST to backend
  const submit = () => {
    UserService.createUser(user);
  };
  // console log user when user changes
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      {/* TEXT FIELDS */}
      <SafeAreaView>
        <CustomTextInput
          value={user.Username}
          placeholder={"Name"}
          keyboardType={"default"}
          setValue={(newValue) => onTextInputChange(newValue, "Username")}
        />
        <CustomTextInput
          value={user.User_Number}
          placeholder={"Phone Number"}
          keyboardType={"number-pad"}
          setValue={(newValue) => onTextInputChange(newValue, "User_Number")}
        />
        <CustomTextInput
          value={user.Password}
          placeholder={"Password"}
          keyboardType={"default"}
          secureText={true}
          setValue={(newValue) => onTextInputChange(newValue, "Password")}
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
    justifyContent: "space-between",
    backgroundColor: colors.defaultBackground,
  },
  submitButton: {
    marginBottom: 40,
  },
});

export default SignUpPage;
