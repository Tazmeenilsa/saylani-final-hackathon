import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Text, Input, Stack, FormControl, Box, Link, Button, Toast } from 'native-base';

import Colors from '../../utilities/Colors';
import { goBack, navigate } from '../../navigations/NavigationService';
import { CreateUser } from './duck/operation';
const Signup = ({ navigation }) => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, showLoading] = useState(false);

  const signupHandler = () => {
    if (password === confirmPassword) {
      let data = {
        fullName: userName,
        email: email.toLowerCase(),
        password: password
      }
      showLoading(true)
      CreateUser(data)
        .then((res) => {
          if (res?.success == true) {
            Toast.show({
              description: "Account created successfully"
            })
            showLoading(false)
            goBack()
          }
        })
        .catch((err) => {
          console.log(err, "error");
          showLoading(false);
          Toast.show({
            description: "Something went wrong",
          });
        });
    } else {
      Toast.show({
        description: `Password Not Match`,

      })
    }
  }

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
      <Box bg={Colors.buttonbg} >
        <FormControl p={5}>
          <Stack space={6}>
            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                onChangeText={(text) => setUserName(text)}
                p={2} placeholder="Username" />
            </Stack>
            <Stack>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                onChangeText={(text) => setEmail(text)}
                p={2} placeholder="abc@" />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                onChangeText={(text) => setPassword(text)}

                p={2} placeholder="Password" />
            </Stack>
            <Stack>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input
                onChangeText={(text) => setConfirmPassword(text)}

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
          backgroundColor={Colors.purple}
          onPress={() => signupHandler()}
          isLoading={loading}
        >
          SignUp
        </Button>
      </Box>
      <Box  flexDirection="row" alignItems="center" justifyContent="center">
        <Text>Already have an account? </Text>
        <Link
          variant="link"
          isUnderlined={false}
          color="#FF0000"
          bg="transparent"
          onPress={() => {
            navigate('Login');
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
