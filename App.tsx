import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import AppRoutes from './src/AppRoutes';
import { NavigationContainer } from '@react-navigation/native';


function App(): JSX.Element {
  return (
    // <NavigationContainer>
    <SafeAreaView >
      <AppRoutes />
    </SafeAreaView>
    // </NavigationContainer>
  );
}



export default App;
