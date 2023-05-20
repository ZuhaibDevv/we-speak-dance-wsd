
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Login, Dance, Leaderboard} from './Screens';
import Signup from './Screens/authScreens/Signup'
import SignupProfile from './Screens/authScreens/SignupProfile'
import ForgetPassword from './Screens/authScreens/ForgetPassword'
import ForgetPasswordTwo from './Screens/authScreens/ForgetPasswordTwo'
import ChangeEmail from './Screens/authScreens/ChangeEmail'
import ChangePassword from './Screens/authScreens/ChangePassword'

const AppRoutes = () => {
  return (
    <SafeAreaView className="flex   h-full ">
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <Leaderboard />
    </SafeAreaView>
  );
};

export default AppRoutes;

const styles = StyleSheet.create({});
