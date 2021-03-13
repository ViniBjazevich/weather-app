import React, { useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WeatherContext } from '../App.js'

export default function DisplayLocation(props) {
  const context = useContext(WeatherContext);
  return (
    <TouchableOpacity style={styles.row} onPress={() => {
      context.setPickedLocation(props.city);
      props.navigation.navigate('Weather');
    }}>
      <Text style={styles.text}>{props.city}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: 'black',
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    width: '90%',
    borderWidth: 1,
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
