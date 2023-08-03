import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { BackButton } from '../../Assets/Images';
import { useNavigation } from '@react-navigation/native';

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

}: HeaderProps) => {
  const navigation = useNavigation()
  return (
    <View className="flex flex-row justify-between items-center mt-12">
      <Pressable onPress={() => navigation.navigate('social')}>
        <Image source={BackButton} />
      </Pressable>
      <View>
        <Text className="text-white text-base font-bold">
          {middleText}
        </Text>
      </View>
      <Pressable onPress={() => navigation.navigate('signup')}>
        <Text className="text-white text-base  font-bold">
          {rightText}
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;
