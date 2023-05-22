import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../Utils/Constants/themeSetting';
import { TextBig } from './CustomText';

const CustomHeader = (props: any) => {
  const {title, iconSource1, iconSource2} = props;
  return (
    <View className="flex flex-row justify-between items-center p-2">
      <TouchableOpacity>
        <Image source={iconSource1} />
      </TouchableOpacity>

      <TextBig bold color={COLORS.white}>
        {title}
      </TextBig>

      <TouchableOpacity>
        <Image source={iconSource2} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
