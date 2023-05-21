import {Image, StyleSheet, Text, View} from 'react-native';
import {BackButton, IconSearch} from '../../Assets/Images';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// interface DanceBattleHeaderProps {
//   middleText: string;
//   containerStyle?: string;
// }

const DanceBattleHeader = ({middleText, containerStyle}) => {
  return (
    <View
      style={{marginTop: hp('6%')}}
      className={` flex flex-row justify-between items-center    ${containerStyle} `}>
      <View className=" h-10 w-10">
        <Image className="h-full w-full" source={BackButton} />
      </View>
      <View>
        <Text
          className="text-white text-xl  font-medium leading-5"
          style={{fontSize: hp('2.75%')}}>
          {middleText}
        </Text>
      </View>
      <View className=" h-10 w-10">
        <Image className="h-full w-full" source={IconSearch} />
      </View>
    </View>
  );
};

export default DanceBattleHeader;

const styles = StyleSheet.create({});
