import { View, Text } from 'react-native'
import React from 'react'
import FastImage from "@d11/react-native-fast-image";

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <FastImage
    style={{ width: 200, height: 200 }}
    source={{
      uri: "https://unsplash.it/400/400?image=1",
      priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.contain}
  />
    </View>
  )
}

export default HomeScreen