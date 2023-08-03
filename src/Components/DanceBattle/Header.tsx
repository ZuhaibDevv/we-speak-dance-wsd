import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import {BackButton, IconSearch} from '../../Assets/Images';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

// interface DanceBattleHeaderProps {
//   middleText: string;
//   containerStyle?: string;
// }

const DanceBattleHeader = ({middleText, containerStyle, onPress}:any) => {
  const navigation = useNavigation()
  return (
    <View
      style={{marginTop: hp('6%'), height: 42}}
      className={` flex flex-row justify-between items-center  ${containerStyle} `}>
      <Pressable onPress={()=>navigation.goBack()} className=" h-10 w-10">
        <Image className="h-full w-full" source={BackButton} />
      </Pressable>
      <View className='h-full justify-center text-center'>
        <Text
          className="text-white text-xl text-center  font-medium "
          style={{fontSize: hp('2.75%')}}>
          {middleText}
        </Text>
      </View>
      <Pressable onPress={onPress} className=" h-10 w-10">
        <Image className="h-full w-full" source={IconSearch} />
      </Pressable>
    </View>
  );
};

export default DanceBattleHeader;

const styles = StyleSheet.create({});
