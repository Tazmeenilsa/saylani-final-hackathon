import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { Text, Image, StatusBar, Box, Button } from 'native-base';
import Colors from '../../utilities/Colors';
import { reset } from '../../navigations/NavigationService';
const Splash = () => {
  useEffect(() => {
    
    setTimeout(() => {
      reset('Login');
    }, 2000);


  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", backgroundColor: Colors.white, height: '100%' }}>
      <StatusBar hidden={true} />
      <Box>
        <Image
          mt={8}

          resizeMode="contain"
          source={require('../../assets/Logo.png')}
          alt=""
        />
        <Text textAlign="center" color={Colors.green} fontSize={32} fontWeight="bold">SAYLANI WELFARE</Text>
        <Text textAlign="center" color={Colors.blue} fontSize={16} fontWeight="bold">ONLINE MARKET PLACE</Text>
      </Box>
      <Box>
        <Button
          w="40"
          shadow={1}
     
          bg={Colors.green}
          borderRadius={10}
        >
          Get Started
        </Button>
      </Box>

    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
