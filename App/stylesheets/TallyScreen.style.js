import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Color";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },

  mainScreenWrapper: {
    backgroundColor: Colors.background,
    flex: 2,
  },

  topLabelWrapper: {
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    // height: 37,
  },
  topLabelTextWrapper: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },

  countScreenWrapper: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    flex: 1,
  },

  countTextWrapper: {
    // backgroundColor: "blue",
    color: Colors.countdownText,
    fontSize: 200,
    fontWeight: 600,
  },

  bottomLabelWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
  },
  bottomLabelTextWrapper: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  lowerScreenWrapper: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // borderWidth: 0.5,
    // borderColor: Colors.gray,
    backgroundColor: "white",
    flex: 1,
  },

  lowerScreenCenterWrapper: {
    // backgroundColor: "green",
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },
  plusIconContainerWrapper: {
    borderRadius: 74,
    width: 74,
    height: 74,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.orange,
  },
  lowerScreenlowerWrapper: {
    flex: 1,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 14,
    paddingBottom: 10,
  },

  refreshButtonWrapper: {},
});

export default styles;
