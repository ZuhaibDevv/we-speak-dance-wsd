import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import AppRoutes from './src/AppRoutes';

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
