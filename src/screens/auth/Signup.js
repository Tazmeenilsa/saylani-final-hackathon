import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text, Input, Stack, FormControl, Box, Link, Button} from 'native-base';

import Colors from '../../utilities/Colors';
const Signup = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.bg,
        height: '100%',
        justifyContent: 'space-around',
      }}>
      <Box>
        <Text textAlign="center">register</Text>
      </Box>
      <Box bg={Colors.buttonbg} height="40%">
        <FormControl p={5}>
          <Stack space={6}>
            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input  p={2} placeholder="Username" />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input  p={2} placeholder="Password" />
            </Stack>
            <Stack>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input
                
                p={2}
                placeholder="Confirm Password"
              />
            </Stack>
          </Stack>
        </FormControl>
        <Button
          borderRadius={15}
          alignSelf="center"
          variant="solid"
          w="30%"
          backgroundColor={Colors.purple}>
          SignUp
        </Button>
      </Box>
      <Box flexDirection="row" alignItems="center" justifyContent="center">
        <Text> have an account? </Text>
        <Link
        variant="link"
        isUnderlined={false}
        color="#FF0000"
        bg="transparent"
          onPress={() => {
            navigation.navigate('Login');
          }}>
          {' '}
          Login Here{' '}
        </Link>
      </Box>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
