import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { BackButton, crossIcon } from '../../Assets/Images';

const SearchBar = (props: any) => {
  const {
    search,
    setSearch,
    placeholder,
    IconName,
    placeholderColor,
    searchIcon,
    onPressNavigation,
  } = props;

  const navigation = useNavigation();
  return (
    <View style={styles.container} className="px-2">
      <Pressable
        onPress={() => navigation.goBack()}
        style={{alignItems: 'center', justifyContent: 'center', width: wp(10)}}>
        <Image source={BackButton} />
      </Pressable>

      <View className="flex-1 flex-row items-center justify-center bg-[#363431] ml-3 rounded-md p-2">
        <TextInput
          value={search}
          onChangeText={txt => setSearch(txt)}
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
        />
        {searchIcon ? (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: wp(10),
            }}
            onPress={onPressNavigation}>
            <Image source={searchIcon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: wp(10),
            }}>
            <Image source={crossIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginVertical: hp(1),
    flexDirection: 'row',
    height: hp(5),
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  textInput: {
    // backgroundColor: 'red',
    height: '100%',
    flex: 1,
    // width: '75%',
    // paddingHorizontal: wp(3),
  },
});
