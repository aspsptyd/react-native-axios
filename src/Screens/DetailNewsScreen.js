import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DetailNewsScreen({ route, navigation }) {
    return (
        <>
            {console.info(route.params.data)}
            <View>
                <Text>DetailNewsScreen</Text>
            </View>
        </>
    )
}