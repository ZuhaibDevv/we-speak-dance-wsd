import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginBackground, divider } from '../../../Assets/Images';
import { TextBig, TextNormal } from '../../../Components/Common/CustomText';
import SearchBar from '../../../Components/Common/SearchBar';
import TournamentHomeCard from '../../../Components/TournamentHomeCard';
import { COLORS } from '../../../Utils/Constants/themeSetting';

const TournamentHome = () => {
  const [search, setSearch] = useState('');

  const handleImagePress = () => {};
  return (
    <SafeAreaView className="flex flex-1 bg-[#1d1d1b]">
      <ImageBackground source={LoginBackground} className="h-full">
          <SearchBar
            placeholder="Find People, Dancefights, hashtags"
            search={search}
            setSearch={setSearch}
            placeholderColor={COLORS.placeholderColor}
          />
        <ScrollView className='group gap-4 mt-1'>
          <View className="border-[#CC4A17] border-y-2 py-2">
            <View className="px-2 flex flex-row justify-between">
              <TextBig bold color={COLORS.orange}>
                Tournaments
              </TextBig>

              <TouchableOpacity>
                <TextNormal color={COLORS.white}>View All</TextNormal>
              </TouchableOpacity>
            </View>
          </View>

          <View className="px-2">
            <TextBig bold color={COLORS.white}>
              Feature Dance Battle
            </TextBig>
          </View>

          <View className="px-2 gap-2">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5].map((img: any, id: any) => (
                <TournamentHomeCard handleImagePress={handleImagePress} />
              ))}
            </ScrollView>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5].map((img: any, id: any) => (
                <TournamentHomeCard handleImagePress={handleImagePress} />
              ))}
            </ScrollView>
          </View>

          <View className='flex items-center'>
            <Image source={divider}/>
          </View>

          <View className="px-2">
            <TextBig bold color={COLORS.white}>
              Trending Dance Battle
            </TextBig>
          </View>

          <View className="px-2 gap-2">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5].map((img: any, id: any) => (
                <TournamentHomeCard handleImagePress={handleImagePress} />
              ))}
            </ScrollView>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5].map((img: any, id: any) => (
                <TournamentHomeCard handleImagePress={handleImagePress} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TournamentHome;

const styles = StyleSheet.create({});
