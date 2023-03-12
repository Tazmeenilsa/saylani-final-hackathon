import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Pressable, StyleSheet, View, Image } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Account from '../screens/main/Account';
import Cart from '../screens/main/Cart';
import Home from '../screens/main/Home';
import Message from '../screens/main/Message';
import Colors from '../utilities/Colors';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <View style={{ flex: 1, }}>
            <Tab.Navigator
                tabBar={props => <MyTabBar {...props} />}
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Message" component={Message} />
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>
        </View>
    );
}


function MyTabBar({ state, descriptors, navigation }) {

    const renderIcon = (focused, routeName) => {
        if (routeName.name === "Home")
            return focused == true ?
                <Ionicons
                    name="md-home"
                    size={25}
                  color={Colors.green}
                /> :
                <Ionicons
                    name="md-home"
                    size={25}
                   color="grey"
                />
        else if (routeName.name == "Message")
            return focused == true ?
                <MaterialCommunityIcons
                    name="message-reply-text-outline"
                    size={25}
                    color={Colors.green}
                />
                :
                <MaterialCommunityIcons
                    name="message-reply-text-outline"
                    size={25}
                    color="grey"
                />
        else if (routeName.name == "Cart")
            return focused == true ?
                <Ionicons
                    name="cart-outline"
                    size={25}
                   color={Colors.green}
                /> :
                <Ionicons
                    name="cart-outline"
                    size={25}
                    color="grey"
                />
        else if (routeName.name == "Account")
            return focused == true ?
                <Ionicons
                    name="person-outline"
                    size={25}
                    color={Colors.green}
                />
                
                :
                <Ionicons
                    name="person-outline"
                    size={25}
                    color="grey"
                />
    }
    return (
        <View style={styles.tabBarStyle}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return (
                    <Pressable
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        // testID={options.tabBarTestID}
                        onPress={onPress}
                        key={route.key}
                    >
                        <View style={styles.tabBarItemStyle}>
                            <View style={styles.iconContainer}>
                                {renderIcon(isFocused, route)}
                            </View>
                            <View style={[styles.tabBarIndicatorStyle, ]} />
                        </View>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        margin:"0 auto",
        backgroundColor: Colors.main,
        height: 50,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: "grey",
        width: '100%',
        justifyContent: "space-around",
    },
    iconContainer: {
        height: 70 - 2,
        width: 62,
        paddingBottom: 20,
        justifyContent: "center",
        alignItems: 'center',
    },
    tabBarItemStyle: {
        height: 80,
        width: 62,
        justifyContent: "space-between",
        alignItems: 'center',
    },

});