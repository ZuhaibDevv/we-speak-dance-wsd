import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import TournamentFeaturedMain from './src/Screens/appScreens/Tournament/TournamentFeaturedMain';
import Voting from './src/Screens/appScreens/Voting/Voting';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#1d1d1d"
        barStyle={'dark-content'}
        translucent={true}
      />
      {/* <AppRoutes /> */}
      {/* <TournamentHome/> */}
      {/* <TournamentFeaturedMain/> */}
      <Voting/>
    </NavigationContainer>
  );
}

export default App;
