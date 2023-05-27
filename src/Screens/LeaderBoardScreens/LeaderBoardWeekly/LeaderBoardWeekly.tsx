import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  LeaderBoardHeader,
  LeaderBoardPosition,
  LeaderboardEveryOne,
  LeaderboardFriends,
} from '../../../Components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Pressable} from 'react-native';

const LeaderBoardWeekly = () => {
  const [tab, setTab] = useState(1);
  return (
    <View className="flex-1 px-4  bg-[#1d1b1b] ">
      <LeaderBoardHeader middleText="Weekly" rightText="" />
      <View className="  flex-row justify-between" style={styles.tabBar}>
        <Pressable
          onPress={() => setTab(1)}
          className={` flex-1 justify-center ${
            tab === 1
              ? 'border-b  border-[#CC4A17]'
              : 'border-white border-b-0.5 '
          }`}>
          <Text
            className={`text-center  font-bold ${
              tab === 1 ? 'text-[#CC4A17] text-lg' : 'text-white  opacity-40'
            } `}>
            Friends
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setTab(2)}
          className={` flex-1 justify-center ${
            tab === 2
              ? 'border-b  border-[#CC4A17]'
              : 'border-white border-b-0.5 '
          }`}>
          <Text
            className={`text-center  font-bold ${
              tab === 2 ? 'text-[#CC4A17] text-lg' : 'text-white  opacity-40'
            } `}>
            Everyone
          </Text>
        </Pressable>
      </View>

      {tab === 1 && <LeaderboardFriends />}
      {tab === 2 && <LeaderboardEveryOne />}
    </View>
  );
};

export default LeaderBoardWeekly;

const styles = StyleSheet.create({
  tabBar: {
    height: hp('5%'),
    marginTop: hp('3%'),
  },
});
