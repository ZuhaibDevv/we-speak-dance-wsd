import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { cardBottomShadow, tournamentFeaturedImage, cardTopShadow, BackButton, BackButton2} from '../Assets/Images'
import { TextBig, TextBigger, TextNormal, TextSmall } from './Common/CustomText';
import { COLORS } from '../Utils/Constants/themeSetting';
import LeftMiddleImageHeader from './Common/LeftMiddleImageHeader';

const TournamentDetailsHeaderCard = () => {
  return (
    <View className='mt-3'>
      <View className='relative'>
        <View className='absolute top-0  left-0 right-0 m-auto bg-[##CC4A17] rounded-sm items-center z-10'>
            <Image source={cardTopShadow}/>
        </View>
        <View className="absolute top-1 z-10">
            <LeftMiddleImageHeader absolute containerStyle="text-white font-bold text-5xl" image1={BackButton2} text="MAKE POP"/>
        </View>
        <Image source={tournamentFeaturedImage}/>
        <View className='absolute bottom-10 left-[125] right-0 m-auto bg-[#CC4A17] w-20 rounded-sm items-center z-50'>
            <TextSmall color={COLORS.white}>Health Care</TextSmall>
        </View>
        <View className='absolute bottom-3 left-0 right-0 m-auto  rounded-sm items-center z-50'>
            <TextBigger bold color={COLORS.white}>Round1</TextBigger>
        </View>
        <View className='absolute bottom-0  left-0 right-0 m-auto rounded-sm items-center'>
            <Image source={cardBottomShadow}/>
        </View>
      </View>
    </View>
  )
}

export default TournamentDetailsHeaderCard

const styles = StyleSheet.create({})
