import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import {
  TextNormal,
  TextHuge,
  TextSmaller,
  TextSmall,
  TextBig,
} from '../../Components/Common/CustomText';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../Utils/Constants/themeSetting';
import {ManSuccessIcon, LoginBackground} from '../../Assets/Images';
import AuthButton from '../../Components/AuthButton/AuthButton';

const Success = () => {
  return (
    <View className="flex-1 bg-[#1d1d1b]">
      <ImageBackground source={LoginBackground} className="flex-1">
        <View className="h-[88%] flex justify-center">
          <View className="flex items-center">
            <Image source={ManSuccessIcon} className="mb-[-15px]" />
            <Text className="color-[#C83A0A] text-[35px] font-bold">
              SUCCESS!
            </Text>

            <Text className="text-white text-2xl text-center mt-2">
              We are Sending
            </Text>
            <Text className="text-white text-2xl text-center">
              your challenge
            </Text>
          </View>
        </View>
        <View className="w-[85%] mx-auto">
          <AuthButton text={'Back to Home'} input1={'sad'} input2={'ad'} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Success;
