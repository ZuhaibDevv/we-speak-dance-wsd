import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import TournamentFeaturedMain from './src/Screens/appScreens/Tournament/TournamentFeaturedMain';
import Voting from './src/Screens/appScreens/Voting/Voting';
import { Dance, DanceBattleHome, Leaderboard, LeaderboardWeekly, TournamentDetails } from './src/Screens';
import { DanceBattleHeader, LeaderboardEveryOne } from './src/Components';
import LeaderBoardMain from './src/Screens/LeaderBoardScreens/LeaderboardMain/LeaderBoardMain';
import LeaderBoardWeekly from './src/Screens/LeaderBoardScreens/LeaderBoardWeekly/LeaderBoardWeekly';
import AppRoutes from './src/AppRoutes';
import InterOne from './src/Screens/appScreens/Interstial/InterstialOne/InterOne';


function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#1d1d1d"
        barStyle={'dark-content'}
        translucent={true}
      />
      <AppRoutes />
      {/* <InterOne/> */}
      {/* <TournamentHome/> */}
      {/* <TournamentFeaturedMain/> */}
      {/* <Voting/> */}
      {/* <TournamentDetails/> */}
      {/* <LeaderBoardMain/> */}
      {/* <LeaderBoardWeekly/> */}
      {/* <LeaderboardEveryOne/> */}
      {/* <DanceBattleHome/> */}
      {/* <Dance/> */}
    </NavigationContainer>
  );
}

export default App;
