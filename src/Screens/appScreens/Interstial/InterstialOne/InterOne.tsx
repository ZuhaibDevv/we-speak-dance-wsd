import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {LoginBackground, BtnCheckIcon} from '../../../../Assets/Images';
import MovesPickup from '../../../../Components/DanceMovesPickup/MovesPickup';
import React from 'react';

const InterOne = () => {
  return (
    <SafeAreaView className="h-full w-full flex bg-[#1d1d1b] justify-end">
      <Image source={LoginBackground} className="h-full w-full absolute" />
      <View className="h-[85%] flex justify-between px-5">
        {/* Dance Moves Component Here */}
        <MovesPickup>
          <Text className="text-[#FFFFFF] text-[18.5px] font-bold text-center">
            Pick some new dance styles to follow!
          </Text>
          {/* Button Container */}
          <View className="mt-5">
            <View className="flex flex-row justify-evenly mt-5">
              <TouchableOpacity className="flex flex-row items-center bg-[#ffffff1a] px-3 py-2 rounded-[6px] border border-[#BAF1BD]">
                <Image source={BtnCheckIcon} />
                <Text className="text-[#BAF1BD] ml-3">Cumbia</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#ffffff1a] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Samba</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#ffffff1a] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Coco</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-evenly mt-5">
              <TouchableOpacity className="flex flex-row items-center bg-[#ffffff1a] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Upbeat</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#ffffff1a] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Carimbo</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#ffffff1a] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Coco</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-evenly mt-5">
              <TouchableOpacity className="flex flex-row items-center bg-[#ffffff1a] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Cacuria</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#ffffff1a] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Jongo</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#ffffff1a] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Afro</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-evenly mt-5">
              <TouchableOpacity className="flex flex-row items-center bg-[#ffffff1a] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Minimal</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#ffffff1a] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Lambada</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#ffffff1a] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Lundu</Text>
              </TouchableOpacity>
            </View>
            <View className="mt-5 flex items-center">
              <TouchableOpacity className="bg-[#ffffff1a] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Bellydance</Text>
              </TouchableOpacity>
            </View>
          </View>
        </MovesPickup>
        <View className="pb-10">
          {/* Stepper Here */}

          <TouchableOpacity className='bg-[#333331] rounded-[7.5px] py-3'>
             <Text className='color-[#ffffff66] text-center text-[17.5px] font-bold'>Follow Dance Styles</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InterOne;