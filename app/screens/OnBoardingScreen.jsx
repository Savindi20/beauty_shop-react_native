import { View, Text } from 'react-native'
import React from 'react'
import { SwiperFlatList } from 'react-native-swiper-flatlist'

const OnBoardingScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <SwiperFlatList>
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </SwiperFlatList>
    </View>
  )
}

export const ScreenOne = () => {
  return (
    <View>
      <Text> Screen One </Text>
    </View>
  )
}

export const ScreenTwo = () => {
  return (
    <View>
      <Text> Screen Two </Text>
    </View>
  )
}

export const ScreenThree = () => {
  return (
    <View>
      <Text> Screen Three </Text>
    </View>
  )
}

export default OnBoardingScreen