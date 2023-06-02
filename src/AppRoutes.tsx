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
  SelectMusic,
} from './Screens';
import GetUploaded from './Screens/CreateUploadDanceScreens/GetUploaded';
import Success from './Screens/CreateUploadDanceScreens/Success';
import RecordBattle from './Screens/CreateUploadDanceScreens/RecordBattle';

const AppRoutes = () => {
  return (
    <SafeAreaView className="flex h-full ">
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      {/* <TournamentDetails /> */}
      {/* <SelectMusic /> */}
      {/* <GetUploaded /> */}
      {/* <Success/> */}
      <RecordBattle />
    </SafeAreaView>
  );
};

export default AppRoutes;

const styles = StyleSheet.create({});
