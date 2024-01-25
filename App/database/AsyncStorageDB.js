import AsyncStorage from "@react-native-async-storage/async-storage";

const saveTallyCountToUserDevice = async (tallyCount) => {
  try {
    const stringifyTallyCount = JSON.stringify(tallyCount);
    await AsyncStorage.setItem("tallyCount", stringifyTallyCount);
  } catch (e) {
    console.log("saveTodoToUserDevice Exception: " + e);
    // saving error
  }
};

const getTallyCountFromUserDevice = async ({ setTallyCount }) => {
  try {
    const values = await AsyncStorage.getItem("tallyCount");
    if (values != null) {
      setTallyCount(JSON.parse(values));
    }
  } catch (e) {
    console.log("getTallyCountFromUserDevice Exception: " + e);
  }
};

const saveLimitValueToUserDevice = async (limitValue) => {
  try {
    const stringifylimitValue = JSON.stringify(limitValue);
    await AsyncStorage.setItem("limitValue", stringifylimitValue);
  } catch (e) {
    console.log("saveLimitValueToUserDevice Exception: " + e);
    // saving error
  }
};

const getLimitValueFromUserDevice = async ({ setLimitValue }) => {
  try {
    const values = await AsyncStorage.getItem("limitValue");
    if (values != null) {
      setLimitValue(JSON.parse(values));
    }
  } catch (e) {
    console.log("getLimitValueFromUserDevice Exception: " + e);
  }
};

const saveNotifIdToUserDevice = async (notifId) => {
  try {
    const stringifyNotifId = JSON.stringify(notifId);
    await AsyncStorage.setItem("notifId", stringifyNotifId);
  } catch (e) {
    console.log("saveTodoToUserDevice Exception: " + e);
    // saving error
  }
};

const getNotifIdFromUserDevice = async ({ setNotifId }) => {
  try {
    const values = await AsyncStorage.getItem("notifId");
    if (values != null) {
      setNotifId(JSON.parse(values));
    }
  } catch (e) {
    console.log("getNotifIdFromUserDevice Exception: " + e);
  }
};

export {
  saveTallyCountToUserDevice,
  getTallyCountFromUserDevice,
  saveLimitValueToUserDevice,
  getLimitValueFromUserDevice,
  saveNotifIdToUserDevice,
  getNotifIdFromUserDevice,
};
