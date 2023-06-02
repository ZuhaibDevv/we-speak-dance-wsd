import React, {useState} from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../Utils/Constants/themeSetting';
import {
  TextNormal,
  TextHuge,
  TextSmaller,
  TextSmall,
  TextBig,
} from '../../Components/Common/CustomText';
import SearchBar from '../../Components/Common/SearchBar';
import {LoginBackground, MusicIcon, MusicPlayIcon} from '../../Assets/Images';

const SelectMusic = () => {
  const [search, setSearch] = useState('');

  return (
    <View className="flex-1 bg-[#1d1d1b]">
      <ImageBackground source={LoginBackground} className="flex-1">
        <ScrollView className="px-2" stickyHeaderIndices={[0]}>
          <SearchBar
            search={search}
            setSerch={setSearch}
            placeholder="Search something..."
            placeholderColor="rgba(255, 255, 255, 0.6)"
          />

          <View className="my-[1%]">
            <TextHuge center semiBold color={COLORS.orange}>
              Select Music
            </TextHuge>
            <TextSmall center semiBold color={COLORS.grey}>
              New songs added daily !
            </TextSmall>
          </View>
          <ScrollView>
            <View className="my-[1%] px-3 py-[1%]">
              <TextBig bold color={COLORS.white}>
                Top Tracks
              </TextBig>
              {/* Top Tracks */}
              <View className="w-full">
                <View className="flex flex-row w-full justify-between flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => (
                    <View key={i} className="w-[47%] mt-[1%]">
                      <View className="flex flex-row items-center">
                        <Image source={MusicIcon} />
                        <View className="ml-[8%]">
                          <TextBig color={COLORS.white}>Tek Time</TextBig>
                          <TextSmall color={COLORS.grey}>MadD3E</TextSmall>
                        </View>
                        <Image
                          source={MusicPlayIcon}
                          className="ml-auto mt-[30%]"
                        />
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
            <View className="my-[1%] px-2 py-[1%]">
              <TextBig bold color={COLORS.white}>
                Battle Anthem
              </TextBig>
              {/* Top Tracks */}
              <View className="w-full">
                <View className="flex flex-row w-full justify-between flex-wrap">
                  {[1, 2, 3, 4, 5, 6].map((e, i) => (
                    <View key={i} className="w-[47%] mt-[1%]">
                      <View className="flex flex-row items-center">
                        <Image source={MusicIcon} />
                        <View className="ml-[8%]">
                          <TextBig color={COLORS.white}>Tek Time</TextBig>
                          <TextSmall color={COLORS.grey}>MadD3E</TextSmall>
                        </View>
                        <Image
                          source={MusicPlayIcon}
                          className="ml-auto mt-[30%]"
                        />
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
            <View className="my-[1%] px-2 py-[1%]">
              <TextBig bold color={COLORS.white}>
                Just Added
              </TextBig>
              {/* Top Tracks */}
              <View className="w-full">
                <View className="flex flex-row w-full justify-between flex-wrap">
                  {[1, 2, 3, 4, 5, 6].map((e, i) => (
                    <View key={i} className="w-[47%] mt-[1%]">
                      <View className="flex flex-row items-center">
                        <Image source={MusicIcon} />
                        <View className="ml-[8%]">
                          <TextBig color={COLORS.white}>Tek Time</TextBig>
                          <TextSmall color={COLORS.grey}>MadD3E</TextSmall>
                        </View>
                        <Image
                          source={MusicPlayIcon}
                          className="ml-auto mt-[30%]"
                        />
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SelectMusic;
