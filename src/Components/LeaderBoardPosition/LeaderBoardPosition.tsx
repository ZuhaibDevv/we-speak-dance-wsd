import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
interface leaderboardPositionProps {
  image: any;
  position: string;
  containerStyle: string;
}

const LeaderBoardPosition = ({
  image,
  position,
  containerStyle,
}: leaderboardPositionProps) => {
  return (
    <View className={`${containerStyle} relative items-center `}>
      <View className="absolute -top-4  z-10 bg-[#CC4A17] w-8 h-8 justify-center items-center  rounded-full ">
        <Text className="text-white font-bold">{position}</Text>
      </View>
      <View className="border border-[#CC4A17] rounded-full h-full w-full">
        <Image resizeMode="cover" source={image} className="h-full w-full" />
      </View>
      <View className="text-center">
        <Text className="text-white text-base">Username</Text>
      </View>
    </View>
  );
};

export default LeaderBoardPosition;
