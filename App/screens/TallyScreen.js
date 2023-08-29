import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../stylesheets/TallyScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";
import Colors from "../constants/Color";

const TallyScreen = () => {
  const [tallyCount, setTallyCount] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainScreenWrapper}>
        {/* Top Caution Text */}
        <View style={styles.topLabelWrapper}>
          <Text style={styles.topLabelTextWrapper}>
            CAUTION! STOP! MAMATAY JUD KA!
          </Text>
        </View>

        {/* Countdown Screen */}
        <View style={styles.countScreenWrapper}>
          <Text style={styles.countTextWrapper}>0</Text>
        </View>

        {/* Bottom Screen */}
        <View style={styles.bottomLabelWrapper}>
          <Text style={styles.bottomLabelTextWrapper}>
            Limit naka You Piece of Shit!
          </Text>
        </View>
      </View>
      <View style={styles.lowerScreenWrapper}>
        <View style={styles.lowerScreenCenterWrapper}>
          {/* Plus Button */}
          <TouchableOpacity style={styles.plusIconContainerWrapper}>
            <Icon name="plus" type="entypo" size={70} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.lowerScreenlowerWrapper}>
          {/* Refresh Button */}
          <TouchableOpacity>
            <Icon
              name="refresh"
              type="font-awesome"
              size={30}
              color={Colors.orange}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TallyScreen;
