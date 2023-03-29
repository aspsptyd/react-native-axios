import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DetailNewsScreen({ route, navigation }) {
    return (
        <>
            {console.info(route.params.data)}
            <View>
                <Image style={{ width: 120, height: 120 }} source={{ uri: route.params.data.urlToImage }} />
                <Text>{route.params.data.title}</Text>
                <Text>{route.params.data.author}</Text>
                <Text>{route.params.data.description}</Text>
                <Text>{route.params.data.publishedAt}</Text>
            </View>
        </>
    )
}