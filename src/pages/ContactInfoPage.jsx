// This will be the page to insert contact info

import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";

import CustomTextInput from "../components/CustomTextInput";
import DefaultButton from "../components/DefaultButton";

import colors from "../vars/colors";
import UserService from "../services/UserService";

const ContactInfoPage = ({ navigation, route }) => {
  //initial contact fields
  const [contact, setContact] = useState({
    name: route.params.data.name,
    phoneNumber: route.params.data.phoneNumber,
  });

  //checkboxes
  const [isCallSelected, setIsCallSelected] = useState(route.params.data.call);
  const [isTextSelected, setIsTextSelected] = useState(route.params.data.text);

  // Set fields of user on change
  const onTextInputChange = (value, field) => {
    setContact({ ...contact, [field]: value });
  };

  //save contact info
  const save = () => {
    UserService.saveContactInfo(route.params.data.userId, {
      userId: route.params.data.userId,
      name: contact.name,
      phoneNumber: contact.phoneNumber,
      text: isTextSelected,
      call: isCallSelected,
    });

    navigation.navigate("Caregiver");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* TEXT FIELDS */}
      <SafeAreaView style={styles.textboxContainer}>
        <CustomTextInput
          value={contact.name}
          placeholder={"Name"}
          keyboardType={"default"}
          setValue={(newValue) => onTextInputChange(newValue, "name")}
        />
        <CustomTextInput
          value={contact.phoneNumber}
          placeholder={"Phone Number"}
          keyboardType={"number-pad"}
          setValue={(newValue) => onTextInputChange(newValue, "phoneNumber")}
        />
        <TouchableOpacity
          style={styles.checkboxContainer}
          onClick={() => setIsCallSelected(!isCallSelected)}
          onPress={() => setIsCallSelected(!isCallSelected)}
        >
          <Checkbox
            value={isCallSelected}
            onValueChange={setIsCallSelected}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Call in case of emergency</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onClick={() => setIsTextSelected(!isTextSelected)}
          onPress={() => setIsTextSelected(!isTextSelected)}
        >
          <Checkbox
            value={isTextSelected}
            onValueChange={setIsTextSelected}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Text in case of emergency</Text>
        </TouchableOpacity>
      </SafeAreaView>
      {/* SUBMIT BUTTON */}
      <View style={styles.saveButton}>
        <DefaultButton text={"Save Contact"} onSelect={save} />
      </View>
    </SafeAreaView>
  );
};

export default ContactInfoPage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: colors.defaultBackground,
  },
  saveButton: {
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  textboxContainer: {
    paddingHorizontal: 30,
  },
});
