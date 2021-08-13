import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import screens
import Movies from '../screens/Movies';
import InfoNavigator from "./InfoNavigator";
import Favorites from '../screens/Favorites';
import Details from '../screens/Details'
const Tab = createBottomTabNavigator();

const configIcon = ({ route, focused, color, size }) => {
    let iconName;
    let iconSize;
    switch(route.name) {
        case '上映中':
            iconName = focused ? 'movie' : 'movie-outline';
            break;
        case '我的最愛':
        case 'Details':
            iconName = focused ? 'heart' : 'heart-outline';
            break;
        default:
            break;
    }
    iconSize = focused ? 40 : 24;
    return (
        <MaterialCommunityIcons name={iconName} color={color} size={iconSize} />
    );
}

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => configIcon({ route, focused, color, size }),
                tabBarActiveTintColor: 'magenta',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen
                    name="上映中"
                    // component={InfoNavigator}
                    component={Movies}
                />
                <Tab.Screen
                    name="我的最愛"
                    component={Favorites}
                />
                <Tab.Screen
                    name="Details"
                    component={Details}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigator;
