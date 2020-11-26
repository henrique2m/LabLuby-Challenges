import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Home";
import Followers from "../Followers";
import Repositories from "../Repositories";
import Following from "../Following";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          height: 80,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          position: "absolute",
        },
        tabStyle: {
          paddingBottom: 15,
        },
        labelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Repos"
        component={Repositories}
        options={{
          tabBarLabel: "Repos",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="github" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Followers"
        component={Followers}
        options={{
          tabBarLabel: "Seguidores",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="people-outline" color={color} size={42} />
          ),
        }}
      />
      <Tab.Screen
        name="Following"
        component={Following}
        options={{
          tabBarLabel: "Seguindo",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="people-outline" color={color} size={42} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
