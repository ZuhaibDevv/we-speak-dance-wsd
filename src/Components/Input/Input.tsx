import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';

interface inputProps {
  text: any ,
  setText:any
}

const Input = ({text,setText}:inputProps) => {
  return (
    <TextInput
    label="Email"
    value={text}
    onChangeText={text => setText(text)}
  />
  )
}

export default Input