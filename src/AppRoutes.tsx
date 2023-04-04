import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Login } from './Screens'
import {Social} from './Screens'

const AppRoutes = () => {
  return (
    <SafeAreaView className='flex h-ful'>
     {/* <Login /> */}
     <Social/>
    </SafeAreaView>
  )
}

export default AppRoutes

const styles = StyleSheet.create({})