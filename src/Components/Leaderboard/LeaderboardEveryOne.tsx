import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LeaderBoardPosition from '../LeaderBoardPosition/LeaderBoardPosition';
import {IconAvatar, IconAvatar2} from '../../Assets/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LeaderboardEveryOne = () => {
  return (
    <View className=" flex-1" style={{marginTop: hp('7.5%')}}>
      <View className="flex flex-row justify-between ">
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

      <ScrollView style={{marginTop: hp('5%')}} showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => (
          <View
            style={styles.userContainer}
            key={i}
            className="flex-row items-center gap-4 ">
            <View className="items-center justify-center bg-[#CC4A17] h-8 w-8 rounded-full ">
              <Text
                style={{fontFamily: 'FormulaCondensed-Bold'}}
                className="text-white text-sm">
                {(i + 3).toString()}
              </Text>
            </View>
            <Image source={IconAvatar} />
            <Text className="text-white">UserName</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LeaderboardEveryOne;

const styles = StyleSheet.create({
  userContainer: {
    marginVertical: hp('3%'),
  },
});
