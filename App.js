import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const[data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'id',
          category: 'technology',
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
      <SafeAreaView>
        <ScrollView>
          {data && data.map((item, i) => {
            return <>
              <Text style={{ color: '#000000' }}>{item.title}</Text>
            </>
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})