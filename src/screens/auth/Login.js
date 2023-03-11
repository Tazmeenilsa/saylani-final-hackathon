import { StyleSheet, View } from 'react-native';
import React ,{useState}from 'react';
import { Text, Input, Stack, FormControl, Box, Link, Button, Toast } from 'native-base';
import Colors from '../../utilities/Colors';
import { navigate, reset } from '../../navigations/NavigationService';
import { LoginUser } from './duck/operation';
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, showLoading] = useState(false);
  const loginHandler = async () => {
    let data = {
      email: email.toLowerCase(),
      password: password,
    };
    showLoading(true);
    LoginUser(data)
      .then((res) => {
        if (res?.success == true) {
          Toast.show({
            description: `Welcome ${res?.email}`,
          });
          showLoading(false);
          reset("Drawer")
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
        justifyContent: 'space-evenly',
      }}>
      <Box>
        <Text textAlign="center"> Login</Text>
      </Box>
      <Box bg={Colors.buttonbg} height="30%">
        <FormControl p={5} mt={0}>
          <Stack space={6}>
            <Stack>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                onChangeText={(text) => setEmail(text)}
                p={2}
                placeholder="Email" />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                p={2} placeholder="Password" />
            </Stack>
          </Stack>
        </FormControl>
        <Button
          variant="solid"
          borderRadius={15}
          alignSelf="center"
          w="30%"
          backgroundColor={Colors.purple}
          isLoading={loading}
          onPress={() => loginHandler()}
        >

          Login
        </Button>
      </Box>
      <Box flexDirection="row" alignItems="center" justifyContent="center">
        <Text>New User?</Text>
        <Link
          onPress={() => {
            navigate('Signup');
          }}>
          {' '}
          SignUp Here
        </Link>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({});
