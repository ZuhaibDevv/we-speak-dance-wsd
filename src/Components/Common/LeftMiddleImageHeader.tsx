import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BackButton} from '../../Assets/Images';
import {TextBig, TextBigger} from './CustomText';
import { useNavigation } from '@react-navigation/native';

const LeftMiddleImageHeader = (props: any) => {
  const {image1, text, image2, containerStyle, absolute} = props;
  const navigation = useNavigation()
  return (
    <View className="flex flex-row items-center px-2 mt-2">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={image1} />
      </TouchableOpacity>
      {absolute ? (
        <View className='left-9'>
        {image2 ? (
          <Image source={image2} />
        ) : (
          <Text className={containerStyle}>{text}</Text>
        )}
      </View>
      ) : (
        <View className='flex justify-center items-center m-auto'>
        {image2 ? (
          <Image source={image2} />
        ) : (
          <Text className={containerStyle}>{text}</Text>
        )}
      </View>
      )}
      </View>

  );
};

export default LeftMiddleImageHeader;

const styles = StyleSheet.create({});
