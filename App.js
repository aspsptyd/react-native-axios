import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          category: 'business',
          apiKey: '87d43d69278f492783fddbd07988ad8b'
        }
      })

      setData(res.data.articles)
    } catch (error) {
      console.error(error.message)
    }
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {/* Memunculkan data lewat log {console.info('Get Data JSX', data)} */}
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {data && data.map((item, i) => {
            return <>
              <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 10, backgroundColor: '#ffffff', flex: 1 }}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }} />
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                  <Text style={{ color: '#000000', marginLeft: 5, fontWeight: 'bold', flex: 1, marginRight: 5 }}>{item.title}</Text>
                  <Text style={{ marginLeft: 5, marginRight: 5 }}>{item.author}</Text>
                </View>
              </View>
            </>
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})