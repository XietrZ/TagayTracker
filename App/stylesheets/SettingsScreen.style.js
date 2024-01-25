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

  inputFieldWrapper: {
    borderWidth: 4,
    borderColor: Colors.gray_2,
    width: 280,
    height: 40,
    justifyContent: "center",
    marginBottom: 18,
    marginTop: 20,
    marginLeft: 28,
    marginRight: 13,
  },
  textInputWrapper: {
    color: Colors.textInput,
    fontSize: 15,
    paddingLeft: 15,
  },

  buttonContainerWrapper: {
    // backgroundColor: "blue"
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

  footerPanelWrapper: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    marginBottom: 24,
  },

  footerTextWrapper: {
    color: Colors.footer,
    fontSize: 12,
  },
});

export default styles;
