import { StyleSheet, Text, View, Image, Keyboard, StatusBar, Pressable, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { LoginBackground, Logo, BackButton } from '../../Assets/Images'
import { AuthHeader } from '../../Components'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <SafeAreaView className='bg-[#1d1d1b] h-full flex px-2 '>
      {/* <StatusBar
        animated={true}
        backgroundColor="#1d1d1d"
        barStyle={"dark-content"}
        translucent={true} /> */}
      <View className='flex h-full '>
        <Image className='absolute  w-screen h-screen' source={LoginBackground} />
        <AuthHeader middleText='Login' rightText='Signup' />

        <View className=' justify-between flex-1'>
          <View className='flex gap-3 mt-12'>
            <View className='items-center mb-3'>
              <Image source={Logo} />
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
                onChangeText={text => setEmail(password)}
              />
            </View>
          </View>


          <View className='bg-[#333331] h-12 justify-center rounded-lg mb-5'>
            <Text className='text-center text-[#ffffff66] text-base font-bold '>Log In</Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})