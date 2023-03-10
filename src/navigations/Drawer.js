import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/main/Home';
import Colors from '../utilities/Colors';
const Drawers = createDrawerNavigator();

const Drawer = () => {
  return (
    <Drawers.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: Colors.purple, zIndex: 1, },
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "gray",
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Drawers.Screen name="Home" component={Home} />
    </Drawers.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
