import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {LoginBackground, Logo, BackButton} from '../../Assets/Images';
import CheckBox from '@react-native-community/checkbox';
import AuthButton from '../../Components/AuthButton/AuthButton';

export default function SignupProfile() {
  const [username, setUsername] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <ScrollView className="flex h-full bg-[#1d1d1b]">
      <StatusBar
        animated={true}
        backgroundColor="#1d1d1b"
        barStyle={'dark-content'}
        translucent={true}
      />
      <ImageBackground source={LoginBackground} className="flex h-screen ">
        <View className="flex-1 p-2">
          <View className="flex items-center justify-center">
            <Text className="text-white font-medium text-base leading-5">
              Sign up
            </Text>
          </View>
          <View className="justify-center items-center">
            <Text className="text-white">
              Upload your own photo or use one of ours.
            </Text>
          </View>
          <View className="flex-1 justify-between">
            <View className="flex gap-3 mt-12">
              <View>
                <TextInput
                  label="username"
                  textColor="#fff"
                  className="bg-transparent w-full text-white"
                  outlineColor="#fff"
                  activeOutlineColor="#ffffffb3"
                  mode="outlined"
                  value={username}
                  onChangeText={text => setUsername(text)}
                />
              </View>
              <View>
                <TextInput
                  label="location"
                  textColor="#fff"
                  className="bg-transparent w-full text-white"
                  outlineColor="#fff"
                  activeOutlineColor="#ffffffb3"
                  mode="outlined"
                  value={location}
                  onChangeText={text => setLocation(text)}
                />
              </View>
              <View className="flex flex-row items-center">
                <CheckBox
                  value={checked}
                  disabled={false}
                  onValueChange={newValue => {
                    setChecked(newValue);
                  }}
                />
                <Text className="text-white">Don't show your location</Text>
              </View>
            </View>
            <View>
                <AuthButton input1={username} input2={location} text="Create profile and get dancing!"/>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
