// Sign Up Page

import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import DefaultButton from "../components/DefaultButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../vars/colors";
import UserService from "../services/UserService";

const SignInPage = ({ navigation }) => {
  // initial new user state
  const [user, setUser] = useState({
    phoneNumber: "",
    password: "",
  });

  //login failed?
  const [failed, setFailed] = useState(false);

  // Set fields of user on change
  const onTextInputChange = (value, field) => {
    setUser({ ...user, [field]: value });
  };

  // Save changes - TODO: POST to backend
  const submit = async () => {
    //TODO - if verified, set local storage user to user form backend
    // set the state of the user
    // setUser(response.data);

    // store the user in localStorage
    // localStorage.setItem("userDetails", JSON.stringify(response.data));
    // localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // localStorage.setItem("loggedIn", true);

    UserService.signInAttempt(user).then((response) => {
      console.log("RETURNED: ", response);
      try {
        AsyncStorage.setItem("userDetails", JSON.stringify(response));
      } catch (e) {
        console.log("error storing userdetails: ", e);
      }
      if (response && response.id) {
        navigation.navigate("Home");
      } else {
        setFailed(true);
      }
    });
    // await AsyncStorage.setItem("userDetails", JSON.stringify(userDetails));
  };
  // console log user when user changes
  useEffect(() => {
    console.log("failed: ", failed);
  }, [failed]);

  return (
    <SafeAreaView style={styles.container}>
      {/* TEXT FIELDS */}
      <SafeAreaView style={styles.textBoxContainer}>
        <CustomTextInput
          value={user.phoneNumber}
          placeholder={"Phone Number"}
          keyboardType={"number-pad"}
          setValue={(newValue) => onTextInputChange(newValue, "phoneNumber")}
        />
        <CustomTextInput
          value={user.Password}
          placeholder={"Password"}
          keyboardType={"default"}
          secureText={true}
          setValue={(newValue) => onTextInputChange(newValue, "password")}
        />
        {failed && (
          <View style={styles.failedContainer}>
            <Text style={styles.failedText}>Login Attempt Failed</Text>
          </View>
        )}
      </SafeAreaView>
      {/* SUBMIT BUTTON */}
      <View style={styles.submitButton}>
        <DefaultButton text={"Log In"} onSelect={submit} />
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
    alignItems: "stretch",
    backgroundColor: colors.defaultBackground,
    padding: 30,
  },
  submitButton: {
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  textBoxContainer: {
    paddingHorizontal: 30,
  },
  failedContainer: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  failedText: {
    color: "red",
  },
});

export default SignInPage;
