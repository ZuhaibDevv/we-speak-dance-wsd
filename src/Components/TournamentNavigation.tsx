import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {COLORS} from '../Utils/Constants/themeSetting';
import {TextBig} from './Common/CustomText';

const TournamentNavigation = (props: any) => {
  const {id, selected, title, handleTabNavigation} = props;
  return (
    <Pressable
      onPress={() => handleTabNavigation(id)}
      key={id}
      className={`${
        selected === id ? 'border-[#CC4A17]' : 'border-[#666664]'
      } border-b-2 flex-1 items-center h-9`}>
      <TextBig
        bold
        color={selected === id ? COLORS.orange : COLORS.placeholderColor}>
        {title}
      </TextBig>
    </Pressable>
  );
};

export default TournamentNavigation;

const styles = StyleSheet.create({});
