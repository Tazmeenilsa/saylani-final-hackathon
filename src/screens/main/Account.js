import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'native-base'
import { removeStorage } from '../../utilities/Localstore';
import { reset } from '../../navigations/NavigationService';

const Account = () => {
  const logout = () => {
    removeStorage("Token");
    removeStorage("userData");
    reset("Login");
  };
  return (
    <View>
     <Button 
     mt="auto"
     w="50%"
    alignSelf="center"
     onPress={()=>logout()}
     >
      Logout
     </Button>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})