import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text, Input, Stack, FormControl, Box, Link, Button} from 'native-base';
import Colors from '../../utilities/Colors';
export default function Login({navigation}) {
  return (
    <View
      style={{
        backgroundColor: Colors.bg,
        height: '100%',
        justifyContent: 'space-evenly',
      }}>
      <Box>
        <Text textAlign="center"> Login</Text>
      </Box>
      <Box bg={Colors.buttonbg} height="30%">
        <FormControl p={5} mt={0}>
          <Stack space={6}>
            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input p={2} placeholder="Username" />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input p={2} placeholder="Password" />
            </Stack>
          </Stack>
        </FormControl>
        <Button
          variant="solid"
          borderRadius={15}
          alignSelf="center"
          w="30%"
          backgroundColor={Colors.purple}
          onPress={()=>navigation.navigate("Drawer")}
          >
            
          Login
        </Button>
      </Box>
      <Box flexDirection="row" alignItems="center" justifyContent="center">
        <Text>New User?</Text>
        <Link
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          {' '}
          SignUp Here
        </Link>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({});
