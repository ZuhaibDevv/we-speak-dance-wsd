import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {LoginBackground, BtnCheckIcon} from '../../Assets/Images';
import MovesPickup from '../../Components/DanceMovesPickup/MovesPickup';
import React from 'react';
import { TextBigger, TextHuge, TextNormal } from '../../Components/Common/CustomText';

const SelectOrganization = ({navigation}:any) => {
    const onTagsPress = () =>{
        navigation.navigate('select-music')
    }
  return (
    <SafeAreaView className="h-full w-full flex bg-[#1d1d1b] justify-end">
      <Image source={LoginBackground} className="h-full w-full absolute" />
      <View className="h-[90%] flex justify-between px-5">
        {/* Dance Moves Component Here */}
        <MovesPickup>
        <TextHuge center color={'#CC4A17'}>
            Planet Solution Organizations
          </TextHuge>
          <View className='mt-2'>

          <TextNormal center bold color={'#666664'}>
            Select and Donate to grow world
          </TextNormal>
          </View>
          {/* Button Container */}
          <View >
            <View className="flex flex-row justify-evenly mt-5">
              <TouchableOpacity onPress={onTagsPress} className="flex flex-row items-center bg-[#CC4A17] px-3 py-2 rounded-[6px]">
                {/* <Image source={BtnCheckIcon} /> */}
                <Text className="text-[#FFFFFF]">Cumbia</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onTagsPress} className="bg-[#CC4A17] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Samba</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onTagsPress} className="bg-[#CC4A17] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Coco</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-evenly mt-5">
              <TouchableOpacity onPress={onTagsPress} className="flex flex-row items-center bg-[#CC4A17] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Upbeat</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onTagsPress} className="bg-[#CC4A17] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Carimbo</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onTagsPress} className="bg-[#CC4A17] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Coco</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-evenly mt-5">
              <TouchableOpacity onPress={onTagsPress} className="flex flex-row items-center bg-[#CC4A17] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Cacuria</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onTagsPress} className="bg-[#CC4A17] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Jongo</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onTagsPress} className="bg-[#CC4A17] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Afro</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-evenly mt-5">
              <TouchableOpacity onPress={onTagsPress} className="flex flex-row items-center bg-[#CC4A17] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Minimal</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onTagsPress} className="bg-[#CC4A17] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Lambada</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onTagsPress} className="bg-[#CC4A17] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Lundu</Text>
              </TouchableOpacity>
            </View>
            <View className="mt-5 flex items-center">
              <TouchableOpacity onPress={onTagsPress} className="bg-[#CC4A17] px-4 py-2 rounded-[6px]">
                <Text className="text-[#FFFFFF]">Bellydance</Text>
              </TouchableOpacity>
            </View>
          </View>
        </MovesPickup>
      </View>
    </SafeAreaView>
  );
};

export default SelectOrganization;