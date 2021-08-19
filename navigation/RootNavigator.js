import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import screens
import Movies from '../screens/Movies';
import Favorites from '../screens/Favorites';
import Details from '../screens/Details'
const Tab = createBottomTabNavigator();

const configIcon = ({ route, focused, color, size }) => {
    let iconName;
    let iconSize;
    switch(route.name) {
        case 'Movies':
            iconName = focused ? 'movie' : 'movie-outline';
            break;
        case 'Favorites':
            iconName = focused ? 'heart' : 'heart-outline';
            break;
        case 'Details':
            iconName = focused ? 'information' : 'information-outline';
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
                    name="Movies"
                    component={Movies}
                    options={{
                        title: "上映中"
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={Favorites}
                    options={{
                        title: "我的最愛"
                    }}
                />
                <Tab.Screen
                    name="Details"
                    component={Details}
                    options={{
                        title: "詳情"
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigator;
