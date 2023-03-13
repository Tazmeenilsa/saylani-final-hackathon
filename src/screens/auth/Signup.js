import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Text, Input, Stack, FormControl, Box, Link, Button, Toast, Radio, KeyboardAvoidingView } from 'native-base';
import Colors from '../../utilities/Colors';
import { goBack, navigate, reset } from '../../navigations/NavigationService';
import { CreateUser } from './duck/operation';
const Signup = ({ navigation }) => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [value, setValue] = useState(null);
  console.log(value)
  const [loading, showLoading] = useState(false);

  const signupHandler = () => {
    if (password === confirmPassword) {
      let data = {
        fullName: userName,
        email: email.toLowerCase(),
        password: password,
        role: value

      }
      showLoading(true)
      CreateUser(data)
        .then((res) => {
          if (res?.success == true) {
            showLoading(false)
            if (value === "saler") {
              goBack()
            } else if (value === "purchaser") {
              goBack()
            }
            Toast.show({
              description: "Account created successfully"
            })
            console.log(value)



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
      <KeyboardAvoidingView>
        <Box>
          <Text textAlign="center" color={Colors.green} fontSize={32} fontWeight="bold">SAYLANI WELFARE</Text>
          <Text textAlign="center" color={Colors.blue} fontSize={16} fontWeight="bold">ONLINE MARKET PLACE</Text>
        </Box>
        <Box ml={3} mr={3} mt={3}>
          <FormControl p={5}>
            <Stack space={6}>
              <Stack>
                <FormControl.Label>Username</FormControl.Label>
                <Input
                  variant="underlined"
                  onChangeText={(text) => setUserName(text)}
                  p={2} placeholder="Username" />
              </Stack>
              <Stack>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  variant="underlined"

                  onChangeText={(text) => setEmail(text)}
                  p={2} placeholder="abc@" />
              </Stack>
              <Stack>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  variant="underlined"

                  onChangeText={(text) => setPassword(text)}

                  p={2} placeholder="Password" />
              </Stack>
              <Stack>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input
                  variant="underlined"

                  onChangeText={(text) => setConfirmPassword(text)}

                  p={2}
                  placeholder="Confirm Password"
                />
              </Stack>
            </Stack>
            <Box mt={5} flexDirection="row" justifyContent="space-evenly" alignItems="center">
              <Radio.Group
                alignSelf="center"
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={value}
                onChange={() => { setValue("saler") }}
              >
                <Radio colorScheme="green" value="saler" my={1}>
                  Seller
                </Radio>

              </Radio.Group>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={value}
                onChange={() => { setValue("purchaser") }}
              >
                <Radio colorScheme="green" value="purchaser" my={1}>
                  Buyer
                </Radio>

              </Radio.Group>

            </Box>
          </FormControl>
          <Button
            borderRadius={15}
            alignSelf="center"

            variant="solid"
            w="30%"
            backgroundColor={Colors.green}
            onPress={() => signupHandler()}
            isLoading={loading}
          >
            SignUp
          </Button>
        </Box>
        <Box flexDirection="row" alignItems="center" justifyContent="center" mt={10}>
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
      </KeyboardAvoidingView>

    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
