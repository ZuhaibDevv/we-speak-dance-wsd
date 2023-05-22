import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Login,
  Dance,
  Leaderboard,
  LeaderboardWeekly,
  DanceBattleHome,
  TournamentDetails,
} from './Screens';

const AppRoutes = () => {
  return (
    <SafeAreaView className="flex   h-full ">
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <TournamentDetails />
    </SafeAreaView>
  );
};

export default AppRoutes;

const styles = StyleSheet.create({});
