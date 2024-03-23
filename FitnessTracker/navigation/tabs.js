import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import calendar from '../screens/calendar';
import food from '../screens/food';
import settings from '../screens/settings';
import workout from '../screens/workout';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25, 
                    left: 20, 
                    right: 20, 
                    elevation: 0, 
                    backgroundColor: '#ffffff',
                    borderRadius: 15, 
                    height: 90,
                    ...styles.shadow
                }
            }} >

{/* Calendar Tab */}
            <Tab.Screen name = "Calendar" component={calendar} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../assets/icons/calendar.png')} 
                            resizeMode='contain'
                            style={{
                                width: 25, 
                                height: 25, 
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text
                            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                                Calendar</Text>
                    </View>
                ),
            }}/>

{/* Workout Tab */}
            <Tab.Screen name = "Workout" component={workout} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../assets/icons/workout.png')} 
                            resizeMode='contain'
                            style={{
                                width: 25, 
                                height: 25, 
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text
                            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                                Workout</Text>
                    </View>
                ),
            }}/>

{/* Food Tab */}
            <Tab.Screen name = "Food" component={food} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../assets/icons/food.png')} 
                            resizeMode='contain'
                            style={{
                                width: 25, 
                                height: 25, 
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text
                            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                                Food</Text>
                    </View>
                ),
            }}/>

{/* Settings */}
            <Tab.Screen name = "Settings" component={settings} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../assets/icons/settings.png')} 
                            resizeMode='contain'
                            style={{
                                width: 25, 
                                height: 25, 
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text
                            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                                Settings</Text>
                    </View>
                ),
            }}/>


        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5, 
        elevation: 5
    }
});

export default Tabs;