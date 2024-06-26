import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../stylesheets/SettingsScreen.style";
import Colors from "../constants/Color";
import {
  saveLimitValueToUserDevice,
  getLimitValueFromUserDevice,
} from "../database/AsyncStorageDB";
import Static from "../constants/Static";

const SettingsScreen = () => {
  const [limitValue, setLimitValue] = useState(4);
  const [limitValueII, setLimitValueII] = useState("");
  const [iseEditBtnPress, setEditBtnPress] = useState(false);

  useEffect(() => {
    getLimitValueFromUserDevice({ setLimitValue });
  }, []);

  useEffect(() => {
    saveLimitValueToUserDevice(limitValue);
  }, [limitValue]);

  const onPressEditLimitValue = () => {
    setEditBtnPress(true);
  };
  const onPressSaveLimitValue = () => {
    try {
      const value = parseInt(limitValueII);
      console.log("[SettingsScreen.js] parseInt(limitValueII): ", value);
      if (isNaN(value)) {
        Alert.alert("Error", "Error in saving. Please try again");
      } else {
        Alert.alert("Info", "Limit Value is Saved!");
        setLimitValue(value);
        setEditBtnPress(false);
      }
    } catch (e) {
      console.log("[SettingsScreen.js] Exception: " + e);

      Alert.alert("Error", "Error in saving: ", e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Settings Header */}
      <View style={styles.settingsHeaderWrapper}>
        <Text style={{ color: Colors.gray_2, fontWeight: "bold" }}>
          Settings
        </Text>
      </View>
      <View style={styles.settingsScreenContainerWrapper}>
        <View style={styles.limitSettingWrapper}>
          {/* Set Limit Text Label */}
          <Text style={styles.limitTextLabelWrapper}>Set Limit</Text>
          {!iseEditBtnPress && (
            <Text style={styles.valueTextWrapper}>{limitValue}</Text>
          )}

          {/* Text Input Field */}
          {iseEditBtnPress && (
            <View style={styles.inputFieldWrapper}>
              <TextInput
                style={styles.textInputWrapper}
                // placeholder="Edit Limit Value"
                placeholderTextColor="#757575"
                value={limitValueII}
                onChangeText={setLimitValueII}
                keyboardType="numeric"
              ></TextInput>
            </View>
          )}

          <View style={styles.buttonContainerWrapper}>
            {/* Edit Button */}
            {!iseEditBtnPress && (
              <TouchableOpacity
                style={styles.buttonWrapper}
                onPress={onPressEditLimitValue}
              >
                <Text style={styles.buttonTextWrapper}>Edit</Text>
              </TouchableOpacity>
            )}
            <View style={{ flexDirection: "row" }}>
              {/* Save Button */}
              {iseEditBtnPress && (
                <TouchableOpacity
                  style={styles.buttonWrapper}
                  onPress={onPressSaveLimitValue}
                >
                  <Text style={styles.buttonTextWrapper}>Save</Text>
                </TouchableOpacity>
              )}
              {/* Cancel Button */}
              {iseEditBtnPress && (
                <TouchableOpacity
                  style={styles.buttonWrapper}
                  onPress={() => {
                    setEditBtnPress(false);
                  }}
                >
                  <Text style={styles.buttonTextWrapper}>Cancel</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        {/* Footer with Developer and Version details */}
        <View style={styles.footerPanelWrapper}>
          <Text style={styles.footerTextWrapper}>
            Developed by: {Static.developerName}
          </Text>
          <Text style={styles.footerTextWrapper}>{Static.version}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
