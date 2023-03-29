import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsScreen from '../Screens/NewsScreen';
import DetailNewsScreen from '../Screens/DetailNewsScreen';

const Stack = createNativeStackNavigator();

function RouteNews() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="News"
                    component={NewsScreen}
                />
                <Stack.Screen 
                    name="DetailNews"
                    component={DetailNewsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteNews;