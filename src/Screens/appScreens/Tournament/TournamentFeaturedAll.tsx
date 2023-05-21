import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import TournamentFeaturedCard from '../../../Components/TournamentFeaturedCard'
import { divider } from '../../../Assets/Images';

const TournamentFeaturedAll = () => {
    const handleImagePress = () => {};
  return (
    <ScrollView className='group gap-4 mt-1'>

    <View className="flex items-center justify-center gap-2">
      <ScrollView showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5].map((img: any, id: any) => (
            <View key={id}>
                <TournamentFeaturedCard handleImagePress={handleImagePress} />
          </View>
        ))}
      </ScrollView>
    </View>

  </ScrollView>
  )
}

export default TournamentFeaturedAll

const styles = StyleSheet.create({})