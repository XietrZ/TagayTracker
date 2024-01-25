import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function PushNotification() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      console.log("[PushNotification.js] token: ", token);
      setExpoPushToken(token);
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return null;
}

// export async function schedulePushNotification(
//   className,
//   slot,
//   type,
//   time,
//   day
// ) {
//   console.log("\n[PushNotification.js] className: ", className);
//   console.log("[PushNotification.js] slot: ", slot);
//   console.log("[PushNotification.js] type: ", type);
//   console.log("[PushNotification.js] time: ", time);
//   console.log("[PushNotification.js] day: ", day);

//   time = new Date(time.getTime() - 5 * 60000);
//   var days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const weekday = days.indexOf(day) + 1;
//   const hours = time.getHours();
//   const minutes = time.getMinutes();

//   console.log("[PushNotification.js] weekday: ", weekday);
//   console.log("[PushNotification.js] hours: ", hours);
//   console.log("[PushNotification.js] minutes: ", minutes);

//   const id = await Notifications.scheduleNotificationAsync({
//     content: {
//       // title: className + " " + type,
//       // body: slot,
//       // sound: 'default',
//       title: "FUCK THIS",
//       body: "body shit v3",
//       // data: { data: "goes here" },
//       // sound: "default",
//     },
//     trigger: {
//       // weekday: weekday,
//       // hour: hours,
//       // minute: 1,
//       seconds: 2,
//       repeats: true,
//     },
//   });
//   console.log("[PushNotification.js] notif id on scheduling", id);
//   return id;
// }

export async function schedulePushNotification({ tallyCount, limitValue }) {
  console.log("\n[PushNotification.js] schedulePushNotification(){ ");
  const bodyMsg =
    "CURRENT TALLY: " + (tallyCount + 1) + "       Limit: " + limitValue;
  const timeIntervalOfNotif = 300;
  // const timeIntervalOfNotif = 5;
  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: "Oi Ayaw Kalimot ug Tally",
      body: bodyMsg,
    },
    trigger: {
      // weekday: weekday,
      // hour: hours,
      // minute: timeIntervalOfNotif,
      seconds: timeIntervalOfNotif,
      repeats: true,
    },
  });
  console.log("\t[PushNotification.js] tallyCount: ", tallyCount);
  console.log("\t[PushNotification.js] notif id on scheduling", id);
  return id;
}

async function registerForPushNotificationsAsync() {
  let token;
  // if (!Constants.isDevice) {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    alert("Failed to get push token for push notificationssss!");
    return;
  }

  // alert(
  //   "Platform.OSSS: " +
  //     Platform.OS +
  //     "\n(Platform.OS === android): " +
  //     (Platform.OS === "android")
  // );

  token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log(token);

  // alert();
  // } else {
  // alert("Must use physical device for Push Notifications");
  // }

  if (Platform.OS === "android") {
    // alert("Set notification channel");
    console.log("[PushNotification.js] Platform.OS === android");
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      sound: true,
      lightColor: "#FF231F7C",
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
      bypassDnd: true,
      enableVibrate: true,
      enableLights: true,
    });
  }

  return token;
}

export async function cancelScheduledNotification(notifId) {
  await Notifications.cancelScheduledNotificationAsync(notifId);
}

export async function cancellAllScheduledNotification() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
