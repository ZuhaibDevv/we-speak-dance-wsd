import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {LeaderBoardHeader, LeaderBoardPosition} from '../../../Components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {IconAvatar2} from '../../../Assets/Images';

const LeaderBoardMain = ({navigation}:any) => {
  return (
    <View className="flex-1 px-4  bg-[#1d1b1b]">
      <LeaderBoardHeader middleText="Leaderboard" rightText="" />
      <View
        className="bg-white h-[1px] opacity-5"
        style={{marginTop: hp('6%')}}></View>
      <TouchableOpacity onPress={() => navigation.navigate('leaderboard-weekly')}
        className="border rounded-lg border-[#CC4A17] relative"
        style={{marginTop: hp('4%'), height: hp('18%')}}>
        <View className="absolute w-full h-full opacity-10 bg-white "></View>
        <Text className="font-bold text-white text-center text-xl ">
          Weekly
        </Text>

        <View
          style={{height: hp('14%'), bottom: hp('-7%')}}
          className=" absolute w-full flex-row justify-evenly">
          <LeaderBoardPosition
            image={IconAvatar2}
            position={'2ND'}
            containerStyle={'h-20 w-20'}
          />
          <LeaderBoardPosition
            image={IconAvatar2}
            position={'1ST'}
            containerStyle={'h-28 w-28 bottom-4'}
          />
          <LeaderBoardPosition
            image={IconAvatar2}
            position={'3RD'}
            containerStyle={'h-20 w-20'}
          />
        </View>
      </TouchableOpacity>

      <View
        className="border rounded-lg border-[#CC4A17] relative"
        style={{marginTop: hp('14%'), height: hp('18%')}}>
        <View className="absolute w-full h-full opacity-10 bg-white "></View>
        <Text className="font-bold text-white text-center text-xl ">
          All Time
        </Text>

        <View
          style={{height: hp('14%'), bottom: hp('-7%')}}
          className=" absolute w-full flex-row justify-evenly">
          <LeaderBoardPosition
            image={IconAvatar2}
            position={'2ND'}
            containerStyle={'h-20 w-20'}
          />
          <LeaderBoardPosition
            image={IconAvatar2}
            position={'1ST'}
            containerStyle={'h-28 w-28 bottom-4'}
          />
          <LeaderBoardPosition
            image={IconAvatar2}
            position={'3RD'}
            containerStyle={'h-20 w-20'}
          />
        </View>
      </View>
    </View>
  );
};

export default LeaderBoardMain;
