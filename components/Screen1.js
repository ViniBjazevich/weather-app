import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Screen1({navigation}) {
  /*
  TODO: display a list of all locations you are able to see the weather from
  You also need to be able to press that component and be brought to there specific weather page
  */
  return (
    <View>
      <Text>Screen 1</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Weather')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
