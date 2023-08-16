import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ImageBackground,
  } from 'react-native';
  import React, {useState} from 'react';
  import {AuthHeader} from '../../Components';
  import {LoginBackground} from '../../Assets/Images';
  import AuthButton from '../../Components/AuthButton/AuthButton';
  import {TextInput} from 'react-native-paper';
  
  export default function ChangeEmail() {
    const [email, setEmail] = useState<string>('');
    return (
      <ScrollView className="flex h-full bg-[#1d1d1b]">
        <StatusBar
          animated={true}
          translucent={true}
          backgroundColor="#1d1d1b"
          barStyle={'dark-content'}
        />
        <ImageBackground source={LoginBackground} className="flex h-screen ">
          <View className="flex-1 p-2">
            <AuthHeader middleText="Change Email" rightText={"       "} />
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
              <View>
                <AuthButton text="Change Email" input1={email}/>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({});
  