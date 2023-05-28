import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { SongImage, TournamentRoundHeader, TournamentRoundImageHeader } from '../Assets/Images';
import { TextBig, TextSmaller } from './Common/CustomText';
import { COLORS } from '../Utils/Constants/themeSetting';

const TournamentRoundHeaderCard = ({text1, text2}:any) => {
  return (
    <View className="relative">
      <View className="flex justify-center items-center">
        <Image
          source={TournamentRoundHeader}
          style={{width: widthPercentageToDP(94)}}
        />
      </View>
      <Text className="text-white absolute left-0 right-0 m-auto text-center my-1 font-bold">
        {text1}
      </Text>

      <View className="absolute left-0 right-0 m-auto text-center top-7">
        <View className="flex items-center">
          <Image source={TournamentRoundImageHeader} />
        </View>
      </View>
      <View className="absolute left-0 right-0 m-auto top-[70] text-center">
        <View className="flex flex-row items-center justify-center">
          <Image source={SongImage} />
          <View className="ml-1">
            <TextBig className={'text-xl font-extrabold text-white'}>
              STILL G
            </TextBig>
            <TextSmaller color={COLORS.grey}>MADd3e</TextSmaller>
          </View>
        </View>
      </View>
      <Text className="text-white absolute left-0 right-0 m-auto text-center top-[120] text-lg font-bold">
        {text2}
      </Text>
    </View>
  );
};

export default TournamentRoundHeaderCard;

const styles = StyleSheet.create({});
