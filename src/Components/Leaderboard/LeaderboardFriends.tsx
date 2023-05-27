import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LeaderboardFriends = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-[#C83A0A]" style={styles.mainText}>
        GET CONNECTED
      </Text>
      <Text style={styles.descText}>
        You dont have any Friend in Weekly leaderboard yet.
      </Text>
    </View>
  );
};

export default LeaderboardFriends;

const styles = StyleSheet.create({
  mainText: {
    fontSize: hp('8%'),
    fontFamily: 'FormulaCondensed-Bold',
  },
  descText: {
    textAlign: 'center',
    width: wp('50%'),
    fontSize: hp('2%'),
    color: '#fff',
    marginBottom: hp('1%'),
  },
});
