import {View, Text} from 'react-native';
import React from 'react';

interface DanceProps {
  children:Object
}

const MovesPickup = ({children}:any) => {
  return (
    <View>
        {children}
    </View>
  );
};

export default MovesPickup;