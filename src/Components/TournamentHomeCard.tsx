import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { tournamentHomeImage } from '../Assets/Images'

const TournamentHomeCard = (props:any) => {
    const {handleCardPress} = props
  return (
    <TouchableOpacity onPress={handleCardPress} className='mr-2'>
      <Image source={tournamentHomeImage}/>
    </TouchableOpacity>
  )
}

export default TournamentHomeCard

const styles = StyleSheet.create({})
