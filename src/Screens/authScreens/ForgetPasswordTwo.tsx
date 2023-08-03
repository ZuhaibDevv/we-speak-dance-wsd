import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {ForgetPasswordImage, LoginBackground} from '../../Assets/Images';
import {AuthHeader} from '../../Components';
import AuthButton from '../../Components/AuthButton/AuthButton';

export default function ForgetPasswordTwo({navigation}:any) {
  return (
    <View className="flex h-full bg-[#1d1d1b]">
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor="#CC4A17"
        barStyle={'dark-content'}
      />
      <ImageBackground source={LoginBackground} className="flex h-screen ">
        <View className="flex-1 p-2">
          <AuthHeader middleText="Forgot Password" rightText="Sign Up" />
          <View className="flex-1 justify-between">
            <View className="flex-1 group gap-3 items-center justify-center">
              <View>
                <Image source={ForgetPasswordImage} />
              </View>
              <View>
                <Text className="text-white font-semibold text-xl">
                  Email has been sent!
                </Text>
              </View>
              <View>
                <Text className="text-gray-500 text-center text-base">
                  New password sent to{' '}
                  <Text className="text-white"> lax@wsd.com</Text> Please check
                  you inbox and click on the link to reset your password
                </Text>
              </View>
            </View>
            <AuthButton text="Back to Login" navigation={navigation} route="forget-password-two"/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
