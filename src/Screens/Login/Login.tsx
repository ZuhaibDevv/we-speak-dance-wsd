import { StyleSheet, Text, View, Image, Keyboard, StatusBar, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { LoginBackground, Logo, BackButton } from '../../Assets/Images'
import { AuthHeader } from '../../Components'
import AuthButton from '../../Components/AuthButton/AuthButton';

const Login = ({navigation}:any) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <View className='bg-[#1d1d1b] h-full flex  px-2 '>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={"dark-content"}
        translucent={true} />
      <View className='flex h-full '>
        <Image className='absolute  w-screen h-screen' source={LoginBackground} />
        <AuthHeader middleText='Login' rightText='Signup' secondTextRoute="signup" navigation={navigation}/>

        <View className=' justify-between flex-1'>
          <View className='flex gap-3 mt-0'>
            <View className='items-center mb-3'>
              <Image source={Logo} style={{width: 200, height:100}}/>
            </View>
            <View >
              <TextInput
                label="Email"
                textColor='#fff'
                className='bg-transparent w-full text-white'
                outlineColor='#fff'
                activeOutlineColor='#ffffffb3'
                mode='outlined'
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
            <View >
              <TextInput
                label="Password"
                textColor='#fff'
                className='bg-transparent w-full text-white'
                outlineColor='#fff'
                activeOutlineColor='#ffffffb3'
                mode='outlined'
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </View>
            <Pressable className='flex text-left items-end' onPress={()=> navigation.navigate("forget-password")}>
              <Text className='text-gray-300 text-base text-left'>Forgot Password</Text>
            </Pressable>
          </View>


          <TouchableOpacity className='z-50' onPress={()=>navigation.navigate('dance-battle-home')}>
              <AuthButton text="Login" input1={email} input2={password} navigation={navigation} route="dance-battle-home"/>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})