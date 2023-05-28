import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import { Login } from './Screens'
import Signup from './Screens/authScreens/Signup'
import { StatusBar } from 'react-native/Libraries/Components/StatusBar/StatusBar'
import SignupProfile from './Screens/authScreens/SignupProfile'
import ForgetPassword from './Screens/authScreens/ForgetPassword'
import ForgetPasswordTwo from './Screens/authScreens/ForgetPasswordTwo'
import ChangeEmail from './Screens/authScreens/ChangeEmail'
import ChangePassword from './Screens/authScreens/ChangePassword'
import {Social} from './Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  Dance,
  Leaderboard,
  LeaderboardWeekly,
  DanceBattleHome,
  TournamentDetails,
} from './Screens';
import TournamentFeaturedMain from './Screens/appScreens/Tournament/TournamentFeaturedMain'
import LeaderBoardMain from './Screens/LeaderBoardScreens/LeaderboardMain/LeaderBoardMain'
import Voting from './Screens/appScreens/Voting/Voting'
import TournamentRounds from './Screens/appScreens/Tournament/TournamentRounds'
import LeaderBoardWeekly from './Screens/LeaderBoardScreens/LeaderBoardWeekly/LeaderBoardWeekly'


const Stack = createNativeStackNavigator()

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="social" component={Social} options={{headerShown: false}}/>
      <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="signup" component={Signup} options={{headerShown: false}}/>
      <Stack.Screen name="signup-profile" component={SignupProfile} options={{headerShown: false}}/>
      <Stack.Screen name="forget-password" component={ForgetPassword} options={{headerShown: false}}/>
      <Stack.Screen name="forget-password-two" component={ForgetPasswordTwo} options={{headerShown: false}}/>
      <Stack.Screen name="change-email" component={ChangeEmail} options={{headerShown: false}} />
      <Stack.Screen name="change-password" component={ChangePassword} options={{headerShown: false}}/>
      <Stack.Screen name="dance-battle-home" component={DanceBattleHome} options={{headerShown: false}}/>
      <Stack.Screen name="tournament-featured-main" component={TournamentFeaturedMain} options={{headerShown:false}}/>
      <Stack.Screen name="tournament-details" component={TournamentDetails} options={{headerShown: false}}/>
      <Stack.Screen name="leaderboard-main" component={LeaderBoardMain} options={{headerShown:false}}/>
      <Stack.Screen name="leaderboard-weekly" component={LeaderBoardWeekly} options={{headerShown:false}}/>
      <Stack.Screen name="voting" component={Voting} options={{headerShown:false}}/>
      <Stack.Screen name="tournament-rounds" component={TournamentRounds} options={{headerShown:false}}/>


      
    </Stack.Navigator>
  )
}




export default AppRoutes;


