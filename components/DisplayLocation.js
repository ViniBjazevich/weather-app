import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function DisplayLocation(props) {
  return (
    <TouchableOpacity style={styles.row} onPress={() => props.navigation.navigate('Weather')}>
      <Text style={styles.text}>{props.city}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#4b4b4b',
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    width: '90%',
    borderWidth: 2,
    borderColor: "#20232a",
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
})
