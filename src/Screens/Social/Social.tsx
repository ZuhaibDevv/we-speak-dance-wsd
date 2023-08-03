import React from 'react';
import {
  View,
  Text,
  // SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
} from 'react-native';
import {
  SocialImgBg,
  SocialPageLogo,
  GoogleIcon,
  FbIcon,
} from '../../Assets/Images';
import LinearGradient from 'react-native-linear-gradient';

const Social = ({navigation}:any) => {
  return (
    <View className="bg-[#1d1d1b] h-full flex">
      {/* <View className="h-[90%] w-full px-4 my-auto">
      <ImageBackground source={SocialImgBg}s
       className=' h-full w-full'>
      </ImageBackground>  
      </View> */}
      <View className="flex h-full">
        {/* BACKGROUND IMAGE */}
        <Image source={SocialImgBg} className="w-full h-[80%] absolute top-4" />

        {/* CONTENT SECTION*/}
        {/* MAIN__VIEW */}
        <View className="h-[80%] my-auto flex justify-between">
          {/* Inner__View 1 */}
          <View className="flex items-center pt-5">
            <Image source={SocialPageLogo} className="object-contain" style={{width: 250, height:100}}/>
            <View className="flex justify-center mt-0">
              <Text className="text-[#ffffff99] text-center text-base">
                Dance with the best and
              </Text>
              <Text className="text-[#ffffff99] text-center text-base">
                dance for the planet
              </Text>
            </View>
          </View>
          {/* Inner__View 1*/}

          {/* Inner__View 2 */}
          <View className="px-5">
            <Text className="text-[#FFFFFF] text-center text-base">
              Sign up with your socials
            </Text>
            <View className="flex flex-row justify-between my-4">
              <TouchableOpacity className="flex flex-row items-center justify-center py-3 w-[46%] rounded-md bg-[#ffffff1a]">
                <Image source={FbIcon} />
                <Text className="text-[#FFFFFF] ml-3 font-bold text-[15px]">
                  Facebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row items-center justify-center py-3 w-[46%] rounded-md bg-[#ffffff1a]">
                <Image source={GoogleIcon} />
                <Text className="text-[#FFFFFF] ml-3 font-bold text-[15px]">
                  Google
                </Text>
              </TouchableOpacity>
            </View>
            <Text className="text-[#ffffff99] text-center mb-5">or</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
              <LinearGradient
               colors={['#CC4A17', '#C52C00']} 
               className='rounded-[6px] py-3'>
                <Text 
                className="text-[#FFFFFF] text-base text-center font-bold">Signup with email</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View className='mt-5'>
              <Text className='text-[#ffffff99] text-center'>
                Already have an account?
                <Pressable onPress={()=>navigation.navigate("login")}>
               <Text className='text-[#FFFFFF] font-bold'>  Log in</Text>
               </Pressable>
              </Text>
            </View>
          </View>
          {/* Inner__View 2 */}
        </View>
      </View>
    </View>
  );
};

export default Social;
