import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  BackButton,
  LoginBackground,
  searchIcon,
  voteAvatar,
  voteTextImage,
} from '../../../Assets/Images';
import CustomHeader from '../../../Components/Common/CustomHeader';
import {TextBig, TextNormal, TextSmall} from '../../../Components/Common/CustomText';
import {COLORS} from '../../../Utils/Constants/themeSetting';

const Voting = () => {
  return (
    <SafeAreaView className="flex flex-1 bg-[#1d1d1b]">
      <ImageBackground source={LoginBackground} className="h-full">
        <CustomHeader
          title={'Dance Battle'}
          iconSource1={BackButton}
          iconSource2={searchIcon}
        />

        <View className="px-2 flex justify-center items-center">
          <View className="flex items-center mt-[20%]">
            <TextBig color={COLORS.white}>Who Get Your</TextBig>
            <Image source={voteTextImage} />
          </View>

          <View className='flex flex-row items-center justify-between w-3/4 mt-10'> 
            <View className='flex items-center'>
              <Image source={voteAvatar} />
              <TextNormal bold color={COLORS.white}>Vandana Hart</TextNormal>
              <View className="bg-[#CC4A17] w-20 rounded-sm items-center z-50">
                <TextSmall color={COLORS.white}>Health Care</TextSmall>
              </View>
            </View>

            <View>
                <TextBig bold color={COLORS.white}>OR</TextBig>
            </View>

            <View className='flex items-center'>
              <Image source={voteAvatar} />
              <TextNormal bold color={COLORS.white}>Vandana Hart</TextNormal>
              <View className="bg-[#CC4A17] w-20 rounded-sm items-center z-50">
                <TextSmall color={COLORS.white}>Health Care</TextSmall>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Voting;

const styles = StyleSheet.create({});
