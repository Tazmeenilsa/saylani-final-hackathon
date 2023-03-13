import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Splash from '../screens/appintro/Splash';
import Signup from '../screens/auth/Signup';
import SellerBottom from '../navigations/SellerBottom'
import { isReadyRef, navigationRef } from "./NavigationService";
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [initRoute, setInitRoute] = useState(null);

  useEffect(() => {
    setInitRoute("Splash")
  }, [])

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator
        initialRouteName={initRoute}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Bottom" component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name="SellerBottom" component={SellerBottom} options={{headerShown:false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
