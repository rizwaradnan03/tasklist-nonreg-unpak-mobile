import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import BottomTabsNavigator from './BottomTabsNavigator';
import LoginScreen from '../screen/auth/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name='Home' options={{headerShown: false}} component={BottomTabsNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
