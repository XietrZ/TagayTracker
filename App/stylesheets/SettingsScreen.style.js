import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Color";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  settingsHeaderWrapper: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 33,
    backgroundColor: "white",
  },

  settingsScreenContainerWrapper: {
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: "center",
  },

  limitSettingWrapper: {
    marginTop: 42,
    width: 340,
    // height: 135,
    borderRadius: 20,
    // marginHorizontal: 15,
    backgroundColor: "white",
  },

  limitTextLabelWrapper: {
    // backgroundColor: "red",
    marginLeft: 16,
    marginTop: 8,
    color: Colors.gray_2,
    fontWeight: "bold",
    fontSize: 13,
  },

  valueTextWrapper: {
    // backgroundColor: "red",
    fontWeight: "bold",
    fontSize: 78,
    textAlign: "center",
    color: Colors.gray_2,
  },

  buttonContainerWrapper: {
    // backgroundColor: "blue",
    alignItems: "flex-end",
  },

  buttonWrapper: {
    borderRadius: 20,
    backgroundColor: Colors.orange,
    width: 110,
    height: 43,
    marginRight: 12,
    marginBottom: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
