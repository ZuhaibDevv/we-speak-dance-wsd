import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { BackButton } from '../../Assets/Images';

interface HeaderProps {
  middleText?: string;
  rightText?: string;
  secondTextRoute?: string;
  navigation?: any;
}

const Header = ({
  middleText,
  rightText,
  secondTextRoute,
  navigation,
}: HeaderProps) => {
  return (
    <View className="flex flex-row justify-between items-center mt-12">
      <Pressable onPress={() => navigation.navigate('social')}>
        <Image source={BackButton} />
      </Pressable>
      <View>
        <Text className="text-white text-base leading-5 font-medium">
          {middleText}
        </Text>
      </View>
      <Pressable onPress={() => navigation.navigate('signup')}>
        <Text className="text-white text-base leading-5 font-bold">
          {rightText}
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;
