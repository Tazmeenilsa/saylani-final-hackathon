import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Text, Input, Stack, FormControl, Box, Link, Button, Toast, Radio, KeyboardAvoidingView } from 'native-base';
import Colors from '../../utilities/Colors';
import { navigate, reset } from '../../navigations/NavigationService';
import { LoginUser } from './duck/operation';
export default function Login() {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(null);
  const [loading, showLoading] = useState(false);

  const loginHandler = async () => {
    let data = {
      fullName: userName,
      email: email.toLowerCase(),
      password: password,
      role: value
    };
    showLoading(true);
    LoginUser(data)
      .then((res) => {
        if (res?.success == true) {
          showLoading(false)
          if (value === "saler") {
            reset("SellerBottom")
          } else if (value === "purchaser") {
            reset("Bottom")
          }
          Toast.show({
            description: `Welcome ${res?.fullName}`
          });
          //  res.email == "admin@gmail.com"
          //     ? reset("AdminBottomTab")
          //     : reset("BottomTab");
        }
    
      })
      .catch((err) => {
        console.log(err, "error");
        showLoading(false);
        Toast.show({
          description: "Something went wrong",
        });
      });
  };

  return (
    <View
      style={{
        backgroundColor: Colors.bg,
        height: '100%',
        justifyContent: 'space-between',
      }}>
      <KeyboardAvoidingView>
        <Box mt={10}>
          <Text textAlign="center" color={Colors.green} fontSize={32} fontWeight="bold">SAYLANI WELFARE</Text>
          <Text textAlign="center" color={Colors.blue} fontSize={16} fontWeight="bold">ONLINE MARKET PLACE</Text>
        </Box>
        <Box ml={3} mr={3} mt={10}>
          <FormControl p={5} mt={0}>
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
                  p={2}
                  placeholder="Email" />
              </Stack>
              <Stack>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  variant="underlined"
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  p={2} placeholder="Password" />
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
                  saler
                </Radio>

              </Radio.Group>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={value}
                onChange={() => { setValue("purchaser") }}
              >
                <Radio colorScheme="green" value="purchaser" my={1}>
                  buyer
                </Radio>

              </Radio.Group>
            </Box>
          </FormControl>
          <Button
            variant="solid"
            borderRadius={15}
            alignSelf="center"
            w="30%"
            backgroundColor={Colors.green}
            isLoading={loading}
            onPress={() => loginHandler()}
          >

            Login
          </Button>
        </Box>
        <Box flexDirection="row" alignItems="center" justifyContent="center" mt={10}>
          <Text>New User?</Text>
          <Link
            onPress={() => {
              navigate('Signup');
            }}>
            {' '}
            SignUp Here
          </Link>
        </Box>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({});
