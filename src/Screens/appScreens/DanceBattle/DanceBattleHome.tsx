import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DanceBattleHeader} from '../../../Components';
import {
  IconAvatar,
  IconVote,
  SampleBattleImage,
  SampleBattleImage2,
} from '../../../Assets/Images';

const DanceBattleHome = () => {
  const [tab, setTab] = useState(1);
  return (
    <View className="flex-1   bg-[#1d1b1b] ">
      <DanceBattleHeader middleText={'Dance Battle'} containerStyle={'px-4'} />
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
            Vote
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
            Dance Battle
          </Text>
        </Pressable>
      </View>
      {tab === 1 && (
        <ScrollView>
          {[1, 2, 3, 4, 5, 6].map((e, i) => (
            <View key={i} style={styles.battleContainer}>
              <View style={styles.battle}>
                <Pressable style={styles.voteButton} className="absolute z-10">
                  <Image source={IconVote} />
                </Pressable>

                <View className="flex-1 ">
                  <View className="flex-4/5">
                    <Image
                      source={SampleBattleImage}
                      className="w-full   "
                      resizeMode="cover"
                    />
                  </View>
                  <View
                    style={styles.userProfile}
                    className=" flex-1/5 flex-row  items-center gap-2 ">
                    <View>
                      <Image source={IconAvatar} />
                    </View>
                    <View>
                      <Text className="text-white font-bold leading-5 text-lg">
                        vandanaHart
                      </Text>
                      <View className="bg-[#CC4A17] opacity-25 rounded-sm max-w-fit ">
                        <Text className="text-white text-xs px-[4%] max-w-fit ">
                          Health care
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="flex-1 ">
                  <View className="flex-4/5">
                    <Image
                      source={SampleBattleImage2}
                      className="w-full   "
                      resizeMode="cover"
                    />
                  </View>
                  <View
                    style={styles.userProfile}
                    className=" flex-1/5 flex-row  items-center gap-2 ">
                    <View>
                      <Image source={IconAvatar} />
                    </View>
                    <View>
                      <Text className="text-white font-bold leading-5 text-lg">
                        vandanaHart
                      </Text>
                      <View className="bg-[#CC4A17] opacity-25 rounded-sm max-w-fit ">
                        <Text className="text-white text-xs px-[4%] max-w-fit ">
                          Social Empowerment
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{width: wp('95%'), alignSelf: 'center'}}
                className="h-0.5 bg-[#B3261E]"></View>
              <View
                style={{
                  width: wp('70%'),
                  marginTop: hp('2%'),
                  alignSelf: 'center',
                }}
                className="opacity-60">
                <Text style={styles.battleDescription}>
                  Et eveniet quia a quisquam eligendi aspernatur asperiores
                  neque.
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default DanceBattleHome;

const styles = StyleSheet.create({
  tabBar: {
    height: hp('5%'),
    marginTop: hp('3%'),
  },
  battleContainer: {
    height: hp('60%'),
  },
  battle: {
    borderColor: '#B3261E',
    height: hp('50%'),
    flexDirection: 'row',
    position: 'relative',
  },
  voteButton: {
    right: wp('40%'),
    top: hp('15%'),
  },
  userProfile: {
    padding: hp('1%'),
  },
  battleDescription: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'BeausiteClassicTrial-R',
  },
});
