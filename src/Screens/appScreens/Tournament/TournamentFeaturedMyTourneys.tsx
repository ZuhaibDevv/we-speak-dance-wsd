import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextBigger, TextNormal } from '../../../Components/Common/CustomText'
import { COLORS } from '../../../Utils/Constants/themeSetting'

const TournamentFeaturedMyTourneys = () => {
  return (
    <View className='flex items-center justify-center h-full'>
      <TextBigger bold color={COLORS.white}>No Results</TextBigger>
      {/* <TextNormal bold color={COLORS.white}>Create Your</TextNormal> */}
    </View>
  )
}

export default TournamentFeaturedMyTourneys

const styles = StyleSheet.create({})