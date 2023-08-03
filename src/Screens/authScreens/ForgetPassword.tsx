import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import {AuthHeader} from '../../Components';
import {LoginBackground} from '../../Assets/Images';
import AuthButton from '../../Components/AuthButton/AuthButton';
import {TextInput} from 'react-native-paper';

export default function ForgetPassword({navigation}: any) {
  const [email, setEmail] = useState<string>('');
  return (
    <View className="flex h-full bg-[#1d1d1b]">
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor="#CC4A17"
        // barStyle={'dark-content'}
      />
      <ImageBackground source={LoginBackground} className="flex-1 h-screen">
        <View className="flex-1 p-2 ">
          <AuthHeader middleText="Forgot Password" rightText="Sign Up" />
          <View className="flex-1 justify-between">
            <View className='mt-8'>
              <TextInput
                label="Email"
                textColor="#fff"
                className="bg-transparent w-full text-white"
                outlineColor="#fff"
                activeOutlineColor="#ffffffb3"
                mode="outlined"
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
            <TouchableOpacity className='z-50' onPress={()=>navigation.navigate('forget-password-two')}>
              <AuthButton text="Reset Password" input1={email} navigation={navigation} route="forget-password-two"/>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
