import React from 'react';
import {SafeAreaView,StatusBar, Text} from 'react-native';
import AppRoutes from './src/AppRoutes';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#1d1d1d"
        barStyle={'dark-content'}
        translucent={true}
      />
      <AppRoutes />
    </SafeAreaView>
  );
}

export default App;
