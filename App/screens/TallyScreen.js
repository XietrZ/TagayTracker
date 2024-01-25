import { Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../stylesheets/TallyScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";
import Colors from "../constants/Color";
import {
  getLimitValueFromUserDevice,
  getNotifIdFromUserDevice,
  getTallyCountFromUserDevice,
  saveNotifIdToUserDevice,
  saveTallyCountToUserDevice,
} from "../database/AsyncStorageDB";
import {
  cancelScheduledNotification,
  schedulePushNotification,
  cancellAllScheduledNotification,
} from "../notification/PushNotification";
import { cancelAllScheduledNotificationsAsync } from "expo-notifications";

const TallyScreen = () => {
  const [limitValue, setLimitValue] = useState(4);
  const [tallyCount, setTallyCount] = useState(0);
  const [countTracker, setCountTracker] = useState(0);
  const [trackerLimit, setTrackerLimit] = useState(0);
  const [notifId, setNotifId] = useState("");

  var dt = new Date();
  const [className, setClass] = useState("");
  const [slot, setSlot] = useState("");
  const [type, setType] = useState("Theory");
  const [day, setDay] = useState("Monday");
  const [fromTime, setFromTime] = useState(new Date());
  const [toTime, setToTime] = useState(
    new Date(dt.setHours(dt.getHours() + 1))
  );

  useEffect(() => {
    getLimitValueFromUserDevice({ setLimitValue });
  }, []);

  useEffect(() => {
    getTallyCountFromUserDevice({ setTallyCount });
  }, []);

  useEffect(() => {
    saveTallyCountToUserDevice(tallyCount);
  }, [tallyCount]);

  useEffect(() => {
    getNotifIdFromUserDevice({ setNotifId });
  }, []);

  useEffect(() => {
    saveNotifIdToUserDevice(notifId);
  }, [notifId]);

  const onPressPlusButton = () => {
    console.log("\n[TallyScreen.js] onPressPlusButton");
    console.log("[TallyScreen.js] \ttallyCount: ", tallyCount);
    console.log("[TallyScreen.js] \tlimitValue: ", limitValue);
    setTallyCount(tallyCount + 1);

    schedueNotification();
    cancelNotification();
  };

  const schedueNotification = async () => {
    const id = await schedulePushNotification({ tallyCount, limitValue }).catch(
      (e) => console.log("[TallyScreen.js] e: ", e)
    );

    console.log("[TallyScreen.js] id: ", id);

    setNotifId(id);
  };

  const cancelNotification = async () => {
    console.log("\n[TallyScreen.js] cancelNotification notifId: ", notifId);
    await cancelScheduledNotification(
      notifId
      // "e00cd027-30d5-4210-b025-69a8c8786315"
    ).catch((e) => {
      console.log("[TallyScreen.js] e: ", e);
    });
  };

  const cancelAllNotification = async () => {
    console.log("\n[TallyScreen.js] cancellAllScheduledNotification ");
    await cancellAllScheduledNotification().catch((e) => {
      console.log("[TallyScreen.js] e: ", e);
    });
  };

  const onPressResetButton = () => {
    console.log("\n[TallyScreen.js] onPressResetButton");
    console.log("[TallyScreen.js] \ttallyCount: ", tallyCount);
    console.log("[TallyScreen.js] \ttrackerLimit: ", trackerLimit);
    console.log("[TallyScreen.js] \tcountTracker: ", countTracker);

    if (trackerLimit == 0 && tallyCount != 0) {
      const rand = generateUniqueRandomNumber();
      // const rand = 3;
      setTrackerLimit(rand);
      Alert.alert("Error", "Not today bitch! Try again");
    } else if (countTracker < trackerLimit) {
      Alert.alert("Error", "Not today bitch! Try again");
      setCountTracker(countTracker + 1);
    } else {
      setTallyCount(0);
      setCountTracker(0);
      setTrackerLimit(0);

      cancelNotification();
      cancelAllNotification();

      Alert.alert("Info", "Lucky bitch! Reset finally done");
    }
  };

  const generateUniqueRandomNumber = () => {
    for (; true; ) {
      const count = 0;
      const temp_1 = Math.random();
      const temp_2 = temp_1 * (tallyCount < 15 ? 15 : tallyCount);
      const randomNumber = Math.floor(temp_2);

      if (randomNumber >= 10) {
        return randomNumber;
        // return 1;
        break;
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainScreenWrapper}>
        {/* Top Caution Text */}
        {tallyCount >= limitValue - 3 && (
          <View style={styles.topLabelWrapper}>
            <Text style={styles.topLabelTextWrapper}>
              CAUTION! STOP! MAMATAY JUD KA!
            </Text>
          </View>
        )}

        {/* Countdown Screen */}
        <View style={styles.countScreenWrapper}>
          <Text style={styles.countTextWrapper}>{tallyCount}</Text>
        </View>

        {/* Bottom Screen */}
        {tallyCount >= limitValue && (
          <View style={styles.bottomLabelWrapper}>
            <Text style={styles.bottomLabelTextWrapper}>
              Limit naka You Piece of Shit!
            </Text>
          </View>
        )}
      </View>
      {/* Plus Button and Refresh button panel */}
      <View style={styles.lowerScreenWrapper}>
        <View style={styles.lowerScreenCenterWrapper}>
          {/* Plus Button */}
          <TouchableOpacity
            style={styles.plusIconContainerWrapper}
            onPress={onPressPlusButton}
          >
            <Icon name="plus" type="entypo" size={70} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.lowerScreenlowerWrapper}>
          {/* Refresh Button */}
          <TouchableOpacity onPress={onPressResetButton}>
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
