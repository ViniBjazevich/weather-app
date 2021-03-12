import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Screen1({navigation}) {
  return (
    <View>
      <Text>Screen 1</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
