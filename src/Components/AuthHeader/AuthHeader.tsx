import { Text, View, Image } from 'react-native'
import React from 'react'
import { BackButton } from '../../Assets/Images'

interface HeaderProps {
    middleText: string,
    rightText: string
}

const Header = ({
    middleText,
    rightText
}: HeaderProps) => {
    return (
        <View className='flex flex-row justify-between items-center my-2'>
            <View><Image source={BackButton} /></View>
            <View>
                <Text className='text-white text-base leading-5 font-medium'>{middleText}</Text>
            </View>
            <View>
                <Text className='text-white text-base leading-5 font-bold'>{rightText}</Text>
            </View>
        </View>
    )
}

export default Header

