import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginBackground, searchIcon } from '../../../Assets/Images';
import SearchBar from '../../../Components/Common/SearchBar';
import TournamentNavigation from '../../../Components/TournamentNavigation';
import { COLORS } from '../../../Utils/Constants/themeSetting';
import TournamentFeaturedAll from './TournamentFeaturedAll';
import TournamentFeaturedInner from './TournamentFeaturedInner';
import TournamentFeaturedMyTourneys from './TournamentFeaturedMyTourneys';

const TournamentFeaturedMain = ({navigation}:any) => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(0);

  let navigationBarData = [
    {id: 0, title: 'Featured'},
    {id: 1, title: 'My Tourneys'},
    {id: 2, title: 'All'},
  ];
  const handleImagePress = () => {};

  const handleTabNavigation = (id: number) => {
    setSelected(id);
  };

  const handleDetailNavigation = () => {
    navigation.navigate('tournament-details')
  }
  return (
    <SafeAreaView className="flex flex-1 bg-[#1d1d1b]">
      <ImageBackground source={LoginBackground} className="h-full">
        <SearchBar
          placeholder="Find People, Dancefights, hashtags"
          search={search}
          setSearch={setSearch}
          placeholderColor={COLORS.placeholderColor}
          searchIcon={searchIcon}
          onPressNavigation = {handleDetailNavigation}
        />

        <View className="flex flex-row justify-around">
          {navigationBarData.map((navigationData, id) => (
            <TournamentNavigation
              key={id}
              id={id}
              title={navigationData.title}
              selected={selected}
              handleTabNavigation={handleTabNavigation}
            />
          ))}
        </View>
        {selected === 0 && <TournamentFeaturedInner onPress={handleDetailNavigation}/>}

        {selected === 1 && <TournamentFeaturedMyTourneys/>}

        {selected === 2 && <TournamentFeaturedAll onPress={handleDetailNavigation}/>}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TournamentFeaturedMain;

const styles = StyleSheet.create({});
