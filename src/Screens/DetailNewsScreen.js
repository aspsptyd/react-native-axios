import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DetailNewsScreen({ route, navigation }) {
    const {width, height} = Dimensions.get('window');
    return (
        <>
            {console.info(route.params.data)}
            <View>
                <Image style={{ width: width, height: width }} source={{ uri: route.params.data.urlToImage }} />
                <Text>{route.params.data.title}</Text>
                <Text>{route.params.data.author}</Text>
                <Text>{route.params.data.description}</Text>
                <Text>{route.params.data.publishedAt}</Text>
            </View>
        </>
    )
}