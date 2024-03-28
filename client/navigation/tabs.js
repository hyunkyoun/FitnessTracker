import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import calendar from '../screens/Calendar';
import food from '../screens/Food';
import profile from '../screens/Profile';
import workout from '../screens/Workout';
import add from '../screens/AddToCalendar';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
    style={{
        top: -20, 
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
    }}
        onPress={onPress}
    >
        <View style= {{
            width: 70,
            height: 70, 
            borderRadius: 35, 
            backgroundColor: '#e32f45',
        }} >
            {children}
        </View>
    </TouchableOpacity>
);

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
                                width: 40, 
                                height: 40,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
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
                                width: 40, 
                                height: 40,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                    </View>
                ),
            }}/>

 {/* Add to Calendar Tab */}
            <Tab.Screen name = "Add to calendar" component={add} options={{
                tabBarIcon: ({focused}) => (
                    <Image
                        source={require('../assets/icons/plus.png')}
                        resizeableMode="contains"
                        style={{
                            width: 30, 
                            height: 30,
                            tintColor: '#fff'
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props}/>
                )
             }}/>

{/* Food Tab */}
            <Tab.Screen name = "Food" component={food} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../assets/icons/food.png')} 
                            resizeMode='contain'
                            style={{
                                width: 35, 
                                height: 35,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                    </View>
                ),
            }}/>

{/* Settings */}
            <Tab.Screen name = "Profile" component={profile} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source={require('../assets/icons/profile.png')} 
                            resizeMode='contain'
                            style={{
                                width: 35, 
                                height: 35, 
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
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