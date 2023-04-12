import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {
  IconAvatar,
  IconNotification,
  IconSearch,
  IconVideo,
} from '../../Assets/Images';

const DanceHeader = () => {
  return (
    <View className=" absolute px-4  z-50 w-full  mt-12 flex flex-row justify-between items-center">
      <View className="flex flex-row gap-4">
        <View className="rounded-3xl ">
          <Image source={IconAvatar} className="object-contain" />
        </View>
        <View>
          <Image source={IconVideo} />
        </View>
      </View>
      <View className="flex flex-row gap-4">
        <View>
          <Image source={IconNotification} />
        </View>
        <View>
          <Image source={IconSearch} />
        </View>
      </View>
    </View>
  );
};

export default DanceHeader;
