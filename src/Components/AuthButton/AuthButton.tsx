import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

interface buttonProps {
  input1?: String;
  input2?: String;
  text?: String
  navigation?: any
  route?: String;
}

export default function AuthButton(props: buttonProps) {
  return (
    <Pressable onPress={()=>props.navigation.navigate(props.route)} className={`${props.input1 && props.input2 !== "" ? 'bg-[#CC4A17]' : 'bg-[#333331]'} h-12 justify-center rounded-lg mb-[10%]`}>
      <Text className={`text-center ${
        props.input1 && props.input2 !== '' ? 'text-white' : 'text-[#ffffff66]'
      } text-lg font-bold `}>
      {props.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
