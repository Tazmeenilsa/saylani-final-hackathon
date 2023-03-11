import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Text, Image, StatusBar} from 'native-base';
import Colors from '../../utilities/Colors';
import { reset } from '../../navigations/NavigationService';
const Splash = () => {
  useEffect(() => {
   setTimeout(() => {
      reset('Login');
    }, 3000);

  
  }, []);

  return (
    <View style={{padding: 10, backgroundColor: Colors.purple, height: '100%'}}>
      <StatusBar hidden={true} />
      <Text color={Colors.textbtn}>
        Splash Screen
      </Text>
      {/* <Image
        resizeMode="center"
        source={require('../../assets/splashLogo.png')}
        alt=""
      /> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
