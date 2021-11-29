// This will be the page that once signed in, we go to
// As of NetworkInformation, will have the two options of going to blind user section, and caregiver section

import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

import AccessibleButton from "../components/AccessibleButton";
import colors from "../vars/colors";

import images from "../vars/images";
import UserService from "../services/UserService";

const CaregiverPage = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState();
  const isFocused = useIsFocused();

  const [emergencyInfo, setEmergencyInfo] = useState({
    userId: null,
    name: "",
    phoneNumber: "",
    text: false,
    call: false,
  });

  useEffect(async () => {
    console.log("hello");
    try {
      const data = await AsyncStorage.getItem("userDetails");
      // console.log(id);
      if (data !== null) {
        // value previously stored
        console.log(JSON.parse(data).id);
        setEmergencyInfo({ ...emergencyInfo, userId: JSON.parse(data).id });

        UserService.getContactInfo(JSON.parse(data).id).then((response) => {
          // BUG IN THE BACKEND MAKING ME DO THIS
          console.log("setting: ", JSON.parse(data).id);
          let copy = response;
          copy.userId = JSON.parse(data).id;
          setEmergencyInfo(copy);
          console.log("emergency contact data: ", response.name);
        });
        // setUserDetails(data);
      }
    } catch (e) {
      // error reading value
      console.log("error getting userdetails: ", e);
    }
  }, [isFocused]);

  const goToEmergency = () => {
    navigation.navigate("Emergency", { data: emergencyInfo });
  };

  return (
    <View style={styles.container}>
      <AccessibleButton
        imageSrc={images.caregiver.emergency}
        text={"Emergency Contact Info"}
        onSelect={goToEmergency}
        radius={200}
      />
      <AccessibleButton
        imageSrc={images.caregiver.destination}
        text={"Common Destinations"}
        onSelect={() => console.log("Go to destinations")}
        radius={200}
      />
      <AccessibleButton
        imageSrc={images.caregiver.routine}
        text={"Daily Routines"}
        onSelect={() => console.log("Go to daily routines")}
        radius={200}
      />
    </View>
  );
};

export default CaregiverPage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",

    backgroundColor: colors.defaultBackground,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
