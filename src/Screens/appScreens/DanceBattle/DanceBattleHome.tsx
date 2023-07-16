import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
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
import {TextNormal} from '../../../Components/Common/CustomText';
import {COLORS} from '../../../Utils/Constants/themeSetting';
import { PlayIcon } from '../../../Assets/Images';

const DanceBattleHome = ({navigation}: any) => {
  const [tab, setTab] = useState(1);
  const [enableVote, setEnableVote] = useState(false);

  const onTournamentPress = () => {
    navigation.navigate('tournament-featured-main');
  };


  return (
    <View className="flex-1   bg-[#1d1b1b] relative">
      <DanceBattleHeader
        onPress={onTournamentPress}
        middleText={'Dance Battle'}
        containerStyle={'px-4'}
      />
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
              <TouchableOpacity style={styles.battle}  onPress={() => setEnableVote(true)}>
                <View
                  style={styles.voteButton}
                  className="absolute z-10"
                 >
                  <Image source={IconVote} />
                </View>

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
                        <Text className="text-white text-xs px-[4%]  ">
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
              </TouchableOpacity>
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

      <View className="absolute bottom-0 w-full flex flex-row bg-[#1d1b1b]">
        <View className="flex flex-1 flex-row px-8 py-5 justify-between items-center text-center">
          <View>
            <Pressable onPress={()=>navigation.navigate('select-organization')} className="bg-[#CC4A17] w-[100] h-10 justify-center items-center rounded-md">
              <TextNormal color={COLORS.white} bold>
                Join Battle
              </TextNormal>
            </Pressable>
          </View>

          <View>
            <Pressable disabled={!enableVote && true} onPress={() => navigation.navigate('voting')} className={`${enableVote ? 'bg-[#CC4A17]' : 'bg-[#a4390f]'} w-[100] h-10 justify-center items-center rounded-md`}>
              <TextNormal color={COLORS.white} bold>
                Vote
              </TextNormal>
            </Pressable>
          </View>

          <View>
            <Pressable onPress={() => navigation.navigate('leaderboard-main')} className="bg-[#CC4A17] w-[50] h-[50] justify-center items-center rounded-full">
              <Image source={PlayIcon}/>
            </Pressable>
          </View>
        </View>
      </View>
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
    // fontFamily: 'BeausiteClassicTrial-R',
  },
});
