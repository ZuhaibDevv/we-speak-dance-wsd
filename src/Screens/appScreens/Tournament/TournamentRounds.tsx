import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  BackButton,
  LoginBackground,
  TournamentRoundDivider,
} from '../../../Assets/Images';
import { TextBig, TextNormal } from '../../../Components/Common/CustomText';
import TournamentRoundCard from '../../../Components/TournamentRoundCard';
import TournamentRoundHeaderCard from '../../../Components/TournamentRoundHeaderCard';
import TournamentRoundNavigation from '../../../Components/TournamentRoundNavigation';
import { COLORS } from '../../../Utils/Constants/themeSetting';
import { useNavigation } from '@react-navigation/native';

let NAVIGATIONBARDATA = [
  {id: 0, title: 'Prelims'},
  {id: 1, title: 'Round1'},
  {id: 2, title: 'Round2'},
  {id: 3, title: 'Round3'},
];

let ROUNDDATA = [
  {
    text1: 'Complete! 32 Dancer Moved On',
    text2: `Check Result Against your Vote ${'\n'} Tap below`,
  },
  {
    text1: '32 of 64 Dancers Advanced',
    text2: `Round 1 / 08:59:03`,
  },
  {
    text1: '16 of 32 Dancers Advanced',
    text2: `Round 2 / 03:59:03`,
  },
  {
    text1: '9 of 16 Dancers Advanced',
    text2: `After Round 2 Gets End`,
  },
];

const TournamentRounds = () => {
  const [selected, setSelected] = useState(0);
  const navigation = useNavigation()

  const handleTabNavigation = (id: number) => {
    setSelected(id);
  };

  return (
    <SafeAreaView className="flex flex-1 bg-[#1d1d1b]">
      <ImageBackground source={LoginBackground} className="h-full">
        <View className="flex flex-row  justify-around h-7 items-center mt-2 ml-2">
          <Pressable className="mr-2" onPress={() => navigation.goBack()}>
            <Image source={BackButton} />
          </Pressable>

          <ScrollView horizontal>
            {NAVIGATIONBARDATA.map((navigationData, id) => (
              <TournamentRoundNavigation
                key={id}
                id={id}
                title={navigationData.title}
                selected={selected}
                handleTabNavigation={handleTabNavigation}
                navigationBarData={NAVIGATIONBARDATA}
              />
            ))}
          </ScrollView>
        </View>

        <View className="mt-4">
          <TournamentRoundHeaderCard
            text1={ROUNDDATA[selected].text1}
            text2={ROUNDDATA[selected].text2}
          />
        </View>

        <View className="relative">
          <View className="flex items-center justify-center">
            <Image
              source={TournamentRoundDivider}
              className="absolute -top-[30]"
            />
          </View>
        </View>
        {(selected == 0 || selected == 1 || selected == 2) && (
          <ScrollView showsVerticalScrollIndicator={false}>
            {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
              <TournamentRoundCard key={i} />
            ))}
          </ScrollView>
        )}

        {selected == 3 && (
          <View className="flex justify-center items-center">
            <TextBig color={COLORS.orange} bold>
              Waiting To Start
            </TextBig>
            <TextNormal color={COLORS.white}>
              {'Check back when \n the Round begin'}
            </TextNormal>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TournamentRounds;

const styles = StyleSheet.create({});
