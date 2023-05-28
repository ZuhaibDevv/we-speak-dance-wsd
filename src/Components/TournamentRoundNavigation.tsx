import React from 'react';
import { Pressable, StyleSheet, View, ScrollView } from 'react-native';
import { COLORS } from '../Utils/Constants/themeSetting';
import { TextBig } from './Common/CustomText';

const TournamentRoundNavigation = (props: any) => {
  const {id, selected, title, handleTabNavigation} = props;
  return (
    <View>
      <Pressable
        onPress={() => handleTabNavigation(id)}
        key={id}
        className={`${
          selected === id ? 'border-[#CC4A17]' : 'border-[#666664]'
        } border-b-2 items-center pr-5`}>
        <TextBig
          bold
          color={selected === id ? COLORS.orange : COLORS.placeholderColor}>
          {title}
        </TextBig>
      </Pressable>
    </View>
  );
};

export default TournamentRoundNavigation;

const styles = StyleSheet.create({});
