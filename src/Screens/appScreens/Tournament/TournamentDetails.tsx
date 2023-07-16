import {Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  IconAvatar,
  LoginBackground,
  tournamentFeaturedImage,
} from '../../../Assets/Images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../../Utils/Constants/themeSetting';
import {
  TextNormal,
  TextHuge,
  TextSmaller,
  TextSmall,
  TextBig
} from '../../../Components/Common/CustomText';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ScrollView} from 'react-native';
import TournamentDetailsHeaderCard from '../../../Components/TournamentDetailsHeaderCard';

const TournamentDetails = ({navigation}:any) => {
  
  const handleRound = () => {
    navigation.navigate('tournament-rounds')
  }

  return (
    <View className="h-full bg-[#1d1d1b]">
      <ImageBackground source={LoginBackground} className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false} className="px-4 ">
          <View style={styles.topSection}>
            <TournamentDetailsHeaderCard/>
          </View>
          <View className="my-[3%]">
            <TextNormal center color={COLORS.lightgrey}>
              Voting Ends in
            </TextNormal>
            <TextHuge
              center
              className={'text-[50px] font-extrabold text-white text-center '}
              color={COLORS.white}>
              08:56:32
            </TextHuge>
          </View>
          <View className="bg-gray-700 h-0.5 my-[1%]"></View>
          <View className="my-[4%] flex-row justify-between items-center">
            <TextSmall color={COLORS.grey}>Dancers(96)</TextSmall>
            <View className=" flex-row ">
              {[1, 2, 3, 4, 5].map((e, i) => (
                <View className=" right-0" key={i}>
                  <Image source={IconAvatar} />
                </View>
              ))}
            </View>
          </View>
          <View className="bg-gray-700 h-0.5 my-[1%]"></View>
          <View className="flex-row justify-between items-center">
            <View>
              <TextSmall color={COLORS.grey}>Round Length</TextSmall>
              <TextHuge color={COLORS.white}>2 DAYS</TextHuge>
            </View>
            <View>
              <TextSmall color={COLORS.grey}>Ends</TextSmall>
              <TextHuge color={COLORS.white}>APR 19</TextHuge>
            </View>
          </View>
          <View className="bg-gray-700 h-0.5 my-[1%]"></View>
          <View className="my-[2%] flex-row justify-between">
            <TextSmall color={COLORS.grey}>Tourney Songs</TextSmall>
            <View>
              <TextBig className={'text-xl font-extrabold text-white'}>
                STILL G
              </TextBig>
              <TextSmaller color={COLORS.grey}>MADd3e</TextSmaller>
            </View>
          </View>
          <ScrollView className="h-full">
            <View>
              {["Prelims", "Round1", "Round2", "Round3"].map((e, i) => (
                <TouchableOpacity
                  style={styles.blueBox}
                  key={i}
                  onPress={handleRound}
                  className=" rounded-lg -z-10 bg-cyan-200 p-2">
                  <TextHuge color={COLORS.black}>{e}</TextHuge>
                  <TextNormal color={COLORS.orange}>
                    Complete 64 Dancers advance{' '}
                  </TextNormal>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TournamentDetails;

const styles = StyleSheet.create({
  topSection: {
    marginTop: hp('5%'),
  },
  blueBox: {
    height: hp('14%'),
    marginVertical: hp('1%'),
  },
});
