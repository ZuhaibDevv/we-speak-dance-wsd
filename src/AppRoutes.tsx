import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DanceBattleHome,
  Login,
  SelectMusic,
  Social,
  TournamentDetails,
} from './Screens';
import GetUploaded from './Screens/CreateUploadDanceScreens/GetUploaded';
import RecordBattle from './Screens/CreateUploadDanceScreens/RecordBattle';
import SelectOrganization from './Screens/CreateUploadDanceScreens/SelectOrganization';
import Success from './Screens/CreateUploadDanceScreens/Success';
import LeaderBoardWeekly from './Screens/LeaderBoardScreens/LeaderBoardWeekly/LeaderBoardWeekly';
import LeaderBoardMain from './Screens/LeaderBoardScreens/LeaderboardMain/LeaderBoardMain';
import TournamentFeaturedMain from './Screens/appScreens/Tournament/TournamentFeaturedMain';
import TournamentRounds from './Screens/appScreens/Tournament/TournamentRounds';
import Voting from './Screens/appScreens/Voting/Voting';
import ChangeEmail from './Screens/authScreens/ChangeEmail';
import ChangePassword from './Screens/authScreens/ChangePassword';
import ForgetPassword from './Screens/authScreens/ForgetPassword';
import ForgetPasswordTwo from './Screens/authScreens/ForgetPasswordTwo';
import Signup from './Screens/authScreens/Signup';
import SignupProfile from './Screens/authScreens/SignupProfile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  // widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import CustomIcon from './components/Common/CustomIcon';
import {COLORS} from './Utils/Constants/themeSetting';
import {TextSmaller} from './Components/Common/CustomText';
import {BackButton} from './Assets/Images';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const LeaderBoardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="leaderboard-main"
        component={LeaderBoardMain}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="leaderboard-weekly"
        component={LeaderBoardWeekly}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TournamentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tournament-featured-main"
        component={TournamentFeaturedMain}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tournament-details"
        component={TournamentDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tournament-rounds"
        component={TournamentRounds}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DanceBattleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="dance-battle-home"
        component={DanceBattleHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="voting"
        component={Voting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="select-organization"
        component={SelectOrganization}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="upload-dance"
        component={GetUploaded}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="success"
        component={Success}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="record-battle"
        component={RecordBattle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="select-music"
        component={SelectMusic}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const TABS = [
  {
    id: 1,
    name: 'Home',
    image: BackButton,
    imageFocused: BackButton,
    component: DanceBattleStack,
  },
  {
    id: 2,
    name: 'Ads',
    imageFocused: BackButton,
    image: BackButton,
    component: LeaderBoardStack,
  },
  {
    id: 3,
    name: 'Create Ads',
    image: BackButton,
    imageFocused: BackButton,
    component: TournamentStack,
  },
  // {
  //   id: 4,
  //   name: 'Inbox',
  //   imageFocused: images.inbox,
  //   image: images.inboxGrey,
  //   component: Inbox,
  // },
  // {
  //   id: 5,
  //   name: 'Profile',
  //   imageFocused: images.user,
  //   image: images.userGrey,
  //   component: Profile,
  // },
];

const AdvertiserStack = () => {
  const tabsBar = TABS;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.orange,
        },
      }}>
      {tabsBar.map(tab => (
        <Tab.Screen
          {...tab}
          key={tab.id}
          options={{
            tabBarButton: (props: any) => {
              let focused = props.accessibilityState.selected;
              return (
                <TouchableWithoutFeedback
                  key={tab.id}
                  {...props}
                  style={[...props.style, {backgroundColor: COLORS.white}]}
                  onPress={() => {
                    props.onPress();
                  }}>
                  <View
                    style={[...props.style, {bottom: hp(0.5)}]}
                    key={tab.id}>
                    <Image
                      source={focused ? tab.imageFocused : tab.image}
                      // size={tab.name == 'Create Ads' ? wp(20) : wp(6.5)}
                      resizeMode="stretch"
                      // disabled
                      // onPress={() => {
                      //   props.onPress();
                      // }}
                    />
                    <TextSmaller
                      textStyle={focused ? styles.labelFocused : styles.label}>
                      {tab.name}
                    </TextSmaller>
                  </View>
                </TouchableWithoutFeedback>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: '300',
  },
  labelFocused: {
    fontWeight: '600',
  },
  tabBar: {
    backgroundColor: '#f0f0f0',
  },
});

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="social"
        component={Social}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup-profile"
        component={SignupProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forget-password"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forget-password-two"
        component={ForgetPasswordTwo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="change-email"
        component={ChangeEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="change-password"
        component={ChangePassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppRoutes = () => {
  const accessToken = false;
  return !accessToken ? (
    <AuthStack />
  ) : (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="auth"
        component={AuthStack}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="advertiser"
        component={AdvertiserStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tournament-featured-main"
        component={TournamentFeaturedMain}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tournament-details"
        component={TournamentDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="leaderboard-main"
        component={LeaderBoardMain}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="leaderboard-weekly"
        component={LeaderBoardWeekly}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="voting"
        component={Voting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tournament-rounds"
        component={TournamentRounds}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="select-organization"
        component={SelectOrganization}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="upload-dance"
        component={GetUploaded}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="success"
        component={Success}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="record-battle"
        component={RecordBattle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="select-music"
        component={SelectMusic}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
