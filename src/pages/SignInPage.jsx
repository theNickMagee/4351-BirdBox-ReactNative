// Sign Up Page

import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import DefaultButton from "../components/DefaultButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../vars/colors";

const SignInPage = ({ navigation }) => {
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
  const submit = async () => {
    //TODO - if verified, set local storage user to user form backend
    // set the state of the user
    // setUser(response.data);

    const userDetails = {
      Username: "Nick",
      User_Number: "889",
      Password: "Nick",
      Emergency_Name: "Curt",
      Emergency_Number: "329",
      Emergency_Address: "Candy Lane",
    };
    // store the user in localStorage
    // localStorage.setItem("userDetails", JSON.stringify(response.data));
    // localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // localStorage.setItem("loggedIn", true);

    try {
      await AsyncStorage.setItem("userDetails", JSON.stringify(userDetails));
    } catch (e) {
      console.log("error storing userdetails: ", e);
    }

    navigation.navigate("Home");
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
    justifyContent: "space-between",
    backgroundColor: colors.defaultBackground,
  },
  submitButton: {
    marginBottom: 40,
  },
});

export default SignInPage;
