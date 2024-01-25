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

const SettingsScreen = () => {
  const [limitValue, setLimitValue] = useState(1);
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
                placeholder="Edit Limit Value"
                value={limitValueII}
                onChangeText={setLimitValueII}
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
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Edit</Text>
              </TouchableOpacity>
            )}
            <View style={{ flexDirection: "row" }}>
              {/* Save Button */}
              {iseEditBtnPress && (
                <TouchableOpacity
                  style={styles.buttonWrapper}
                  onPress={onPressSaveLimitValue}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>Save</Text>
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
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        {/* Footer with Developer and Version details */}
        <View style={styles.footerPanelWrapper}>
          <Text style={styles.footerTextWrapper}>Developed by: XietrZ</Text>
          <Text style={styles.footerTextWrapper}>v1.0.0</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
