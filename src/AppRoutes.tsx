import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Login } from './Screens'
import Signup from './Screens/authScreens/Signup'
import { StatusBar } from 'react-native/Libraries/Components/StatusBar/StatusBar'
import SignupProfile from './Screens/authScreens/SignupProfile'

const AppRoutes = () => {
  return (
    <SafeAreaView className='flex h-ful'>
    <SignupProfile />
    </SafeAreaView>
  )
}

export default AppRoutes

const styles = StyleSheet.create({})