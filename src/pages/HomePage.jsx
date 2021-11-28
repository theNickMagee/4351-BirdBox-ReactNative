// This will be the page that once signed in, we go to
// As of NetworkInformation, will have the two options of going to blind user section, and caregiver section

import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import AccessibleButton from "../components/AccessibleButton";
import colors from "../vars/colors";

import images from "../vars/images";

const HomePage = (props) => {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails) {
      // const foundUser = JSON.parse(userDetails);
      console.log(userDetails);
      setUserDetails(userDetails);
    }
  }, []);

  const goToBlind = () => {};
  const goToCareGiver = () => {};

  return (
    <View style={styles.container}>
      <AccessibleButton
        imageSrc={images.home.caregiver}
        text={"Blind User"}
        onSelect={goToBlind}
      />
      <AccessibleButton
        imageSrc={images.home.blind_man}
        text={"Caregiver"}
        onSelect={goToCareGiver}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",

    backgroundColor: colors.defaultBackground,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
