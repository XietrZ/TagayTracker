/* eslint-disable no-use-before-define */
/* eslint-disable react/style-prop-object */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "react-native-vector-icons";
import { Icon } from "@rneui/themed";

import TallyScreen from "./screens/TallyScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Colors from "./constants/Color";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Tab.Navigator
          // initialRouteName="Settings"
          barStyle={{
            backgroundColor: "white",
          }}
          screenOptions={{
            tabBarActiveTintColor: Colors.gray_2,
            tabBarInactiveTintColor: Colors.gray_2,
            tabBarActiveBackgroundColor: Colors.gray,
            tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
          }}
        >
          <Tab.Screen
            name="Tally"
            component={TallyScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Icon
                  name="wine-bottle"
                  type="font-awesome-5"
                  color={Colors.orange}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Ionicons name="settings" color={Colors.orange} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
