import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../stylesheets/SettingsScreen.style";
import Colors from "../constants/Color";

const SettingsScreen = () => {
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
          <Text style={styles.valueTextWrapper}>1</Text>
          <View style={styles.buttonContainerWrapper}>
            {/* Edit Button */}
            <TouchableOpacity style={styles.buttonWrapper}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
