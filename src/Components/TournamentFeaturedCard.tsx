import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { cardBottomShadow, tournamentFeaturedImage } from '../Assets/Images'
import { TextBig, TextNormal, TextSmall } from './Common/CustomText';
import { COLORS } from '../Utils/Constants/themeSetting';

const TournamentFeaturedCard = (props:any) => {
    const {handleImagePress} = props;
  return (
    <TouchableOpacity onPress={handleImagePress} className='mt-3'>
      <View className='relative'>
        <Image source={tournamentFeaturedImage}/>
        <View className='absolute bottom-10 left-[125] right-0 m-auto bg-[#CC4A17] w-20 rounded-sm items-center z-50'>
            <TextSmall color={COLORS.white}>Health Care</TextSmall>
        </View>
        <View className='absolute bottom-4 left-0 right-0 m-auto rounded-sm items-center z-50'>
            <TextBig bold color={COLORS.white}>Make Pop</TextBig>
        </View>
        <View className='absolute bottom-0  left-0 right-0 m-auto bg-[##CC4A17] rounded-sm items-center'>
            <Image source={cardBottomShadow}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default TournamentFeaturedCard

const styles = StyleSheet.create({})
