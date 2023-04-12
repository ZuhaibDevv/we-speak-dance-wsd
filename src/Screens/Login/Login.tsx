import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { LoginBackground, Logo, BackButton } from '../../Assets/Images';
import { AuthHeader } from '../../Components';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="bg-[#1d1d1b] flex flex-1 h-full">
        <ImageBackground
          source={LoginBackground}
          resizeMode="cover"
          className=" h-full flex-1 px-4  ">
          <AuthHeader middleText="Login" rightText="Signup" />
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }} className=" flex-1  ">
            <View className="flex flex-1 gap-3 mt-12">
              <View className="items-center mb-3">
                <Image source={Logo} />
              </View>
              <View>
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

              <View>
                <TextInput
                  label="Password"
                  textColor="#fff"
                  className="bg-transparent w-full text-white"
                  outlineColor="#fff"
                  activeOutlineColor="#ffffffb3"
                  mode="outlined"
                  value={password}
                  onChangeText={text => setEmail(password)}
                />
              </View>
            </View>

            <View className="bg-[#333331] h-12 justify-center rounded-lg mb-5">
              <Text className="text-center text-[#ffffff66] text-base font-bold ">
                Log In
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({});
