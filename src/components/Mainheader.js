import { StyleSheet, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar, Box, HStack, Icon, IconButton, Image, StatusBar, Text } from 'native-base';
import Colors from '../utilities/Colors';
import { useNavigation } from '@react-navigation/native';



const Mainheader = () => {
    const navigation = useNavigation()

    return (
        <>
            <Box />
            <HStack bg={Colors.white} px="1" py="5" justifyContent="space-between" alignItems="center" w="100%">
                <HStack alignItems="center">
                    {/* <IconButton onPress={() => navigation.toggleDrawer()} icon={<Icon size="8" as={Ionicons} name="menu-outline" color="white" />} /> */}
                    {/* <Image alt='' w='6' h='8' source={require('../assets/splashLogo.png')} /> */}
                    <HStack flexDirection="column">
                        <Text ml='2' letterSpacing={3} color={Colors.green} fontSize="20" w="100%" fontWeight="bold">
                            SAYLANI WELFARE
                        </Text>
                        <Text textAlign="center" ml='2' mb="2"color={Colors.blue} fontSize="15">
                            ONLINE MARKET PLACE
                        </Text>
                    </HStack>

                </HStack>

                <HStack>
                <IconButton onPress={() => navigate('Notification')} icon={<Icon as={Ionicons} name="cart-outline" size="lg" color="gray" />} />
                    <IconButton onPress={() => navigate('Notification')} icon={<Icon as={MaterialIcons} name="notifications-none" size="lg" color="gray" />} />
                    {/* <IconButton onPress={() => navigate('Profile')} size='sm' icon={<Avatar bg="green.500" source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }} />} /> */}
                </HStack>
            </HStack>
        </>

    )
}

export default Mainheader

const styles = StyleSheet.create({})