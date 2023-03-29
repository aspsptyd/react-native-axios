## react-native-axios
React Native Axios Consume API by HTTP Protocol

## Get Data News API in Console Log
Untuk fetch data dari API kita Perlu Menginstallkan `Axios`

```shell
~/Desktop/react-native/ReactNativeAxios ⌚ 11:50:48
$ npm install axios 
```

<img width="984" alt="Screen Shot 2023-03-29 at 12 43 47" src="https://user-images.githubusercontent.com/98740335/228437589-b6c69276-2609-40bc-a5c1-1fc2dc6f0167.png">

kemudian pada App.tsx rename menjadi App.js, lalu ubah isinya seperti tampak pada kodingan dibawah ini

```js
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

      console.info('Get Data New : ', res)
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
```

running kemudian coba debug aplikasi, akses log pada `React Native Debugger` inspect element kemudian arahkan ke bagian `console`

<img width="1680" alt="Screen Shot 2023-03-29 at 12 46 10" src="https://user-images.githubusercontent.com/98740335/228437971-8f232143-605f-4b29-93c5-c95be7ee8be9.png">

Preferensi Library yang Diinstallkan 

- [x] https://www.npmjs.com/package/axios