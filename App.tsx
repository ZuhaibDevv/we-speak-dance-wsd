import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import AppRoutes from './src/AppRoutes';


function App(): JSX.Element {
  return (
    <SafeAreaView >
      <AppRoutes />
    </SafeAreaView>
  );
}



export default App;
