import {Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {BackButton} from '../../Assets/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

interface LeaderBoardHeaderProps {
  middleText: string;
  rightText: string;
  containerStyle?: string;
}

const LeaderBoardHeader = ({
  middleText,
  rightText,
  containerStyle,
}: LeaderBoardHeaderProps) => {

  const navigation = useNavigation()
  return (
    <View
      style={{marginTop: hp('6%')}}
      className={` flex flex-row justify-between items-center ${containerStyle} `}>
      <Pressable className=" h-10 w-10" onPress={() => navigation.goBack()}>
        <Image className="h-full w-full" source={BackButton} />
      </Pressable>
      <View>
        <Text
          className="text-white text-xl  font-medium leading-5"
          style={{fontSize: hp('2.75%'), marginRight: wp('10%')}}>
          {middleText}
        </Text>
      </View>
      <View>
        <Text className="text-white text-base leading-5 font-bold">
          {rightText}
        </Text>
      </View>
    </View>
  );
};

export default LeaderBoardHeader;
