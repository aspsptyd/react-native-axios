import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'

export default function App() {
  console.info('Ini coba ambil data');

  const getData = async () => {
    try {
      const res = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'id',
          category: 'technology',
          apiKey: '87d43d69278f492783fddbd07988ad8b'
        }
      })

      console.info(res)
    } catch (error) {
      console.error(error.message)
    }
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})