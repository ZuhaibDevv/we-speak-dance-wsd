import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  StatusBar,
  Pressable,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {LoginBackground, Logo, BackButton} from '../../Assets/Images';
import {AuthHeader} from '../../Components';
import AuthButton from '../../Components/AuthButton/AuthButton';

const Signup = ({navigation}:any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="bg-[#1d1d1b] h-full flex  px-2 ">
        <StatusBar
          animated={true}
          backgroundColor="#CC4A17"
          barStyle={'dark-content'}
          translucent={true}
        />
        <ImageBackground source={LoginBackground} className="fle-1 h-full ">
          <AuthHeader middleText="Login" rightText="Signup" />

          <View className=" justify-between flex-1">
            <View className="flex gap-3 mt-12">
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
                  onChangeText={text => setPassword(text)}
                />
              </View>
            </View>

           
           
           <View>
            <Text className='text-gray-500 mb-5'>By submitting, you agree to our <Text className='text-white'>Terms and Conditions</Text> and <Text className='text-white'>Privacy Policy.</Text></Text>
           
              <AuthButton input1={email} input2={password} navigation={navigation} route="dance-battle-home" text="Sign up"/>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
