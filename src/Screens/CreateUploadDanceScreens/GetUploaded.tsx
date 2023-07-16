import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import {
  TextNormal,
  TextHuge,
  TextSmaller,
  TextSmall,
  TextBig,
} from '../../Components/Common/CustomText';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../Utils/Constants/themeSetting';
import {BackButton, LoginBackground} from '../../Assets/Images';
import {Switch} from 'react-native-paper';
import AuthButton from '../../Components/AuthButton/AuthButton';

const GetUploaded = ({navigation}:any) => {
  const [description, setDescription] = useState('');
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View className="flex-1 bg-[#1d1d1b]">
      <ImageBackground source={LoginBackground} className="flex-1">
        <View className="h-full flex justify-between px-3">
          <View className="pt-[15%]">
            <View className="w-full flex flex-row items-center">
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: wp(10),
                }}>
                <Image source={BackButton} />
              </TouchableOpacity>
              <Text className="text-white text-xl w-[80%] text-center">
                Get Uploaded
              </Text>
            </View>
            <View className="mt-[8%]">
              <TextNormal color={COLORS.white}>Description</TextNormal>
              <TextInput
                multiline={true}
                numberOfLines={7}
                onChangeText={(txt: string) => setDescription(txt)}
                value={description}
                className="text-white border border-[#808080] bg-[#d9d9d91a] rounded-[7px] mt-[3%]"
              />
            </View>
            <View className="mt-[8%]">
              <TextNormal color={COLORS.white}>Contest Length</TextNormal>
              <View className="flex flex-row mt-4">
                <View className="flex flex-row items-center">
                  <TextNormal color={COLORS.white}>Days</TextNormal>
                  <TextInput
                    onChangeText={txt => setDays(txt)}
                    value={days}
                    className="text-white border border-[#808080] bg-[#d9d9d91a] rounded-[7px] ml-2 w-[80px]"
                  />
                </View>
                <View className="flex flex-row items-center ml-6">
                  <TextNormal color={COLORS.white}>Hours</TextNormal>
                  <TextInput
                    onChangeText={txt => setHours(txt)}
                    value={hours}
                    className="text-white border border-[#808080] bg-[#d9d9d91a] rounded-[7px] ml-2 w-[80px]"
                  />
                </View>
              </View>
            </View>
            <View className="mt-[8%]">
              <View className="flex flex-row justify-between text-white border border-[#808080] bg-[#d9d9d91a] rounded-[7px] p-4">
                <TextNormal color={COLORS.white}>
                  Post as an Open Challenge
                </TextNormal>
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color="#C52C00"
                />
              </View>
              <View className="flex flex-row justify-between text-white border border-[#808080] bg-[#d9d9d91a] rounded-[7px] p-4 mt-4">
                <TextNormal color={COLORS.white}>
                  Send Direct Challenge
                </TextNormal>
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color="#C52C00"
                />
              </View>
            </View>
          </View>
          <View className="w-[85%] mx-auto">
            <AuthButton text={'Upload'} input1={'sad'} input2={'ad'} navigation={navigation} route="success"/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GetUploaded;
