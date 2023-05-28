import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { IconAvatar, IconVote, RoundImage, Trophy } from '../Assets/Images';

const TournamentRoundCard = () => {
  return (
    <View
      className="flex flex-row justify-between  ml-5 items-center mb-4"
      style={{width: widthPercentageToDP(90)}}>
      <View className="flex flex-row items-center flex-wrap relative ">
        <Image
          source={RoundImage}
          style={{borderRadius: 10, width: 50, height: 75}}
        />
        <Image source={IconAvatar} className="absolute top-4 left-7" />
        <Image source={Trophy} className="absolute top-12 left-9" />
        <Text className="text-white font-bold ml-5">Vandana</Text>
      </View>
      <View>
        <Image source={IconVote} style={{width: 40, height: 40}} />
      </View>
      <View>
        <View className="flex flex-row items-center flex-wrap relative ">
          <Text className="text-white font-bold mr-5">Vandana</Text>
          <Image
            source={RoundImage}
            style={{borderRadius: 10, width: 50, height: 75}}
          />
          <Image source={IconAvatar} className="absolute top-4 right-7" />
          <Image source={Trophy} className="absolute top-12 right-9" />
        </View>
      </View>
    </View>
  );
};

export default TournamentRoundCard;

const styles = StyleSheet.create({});
