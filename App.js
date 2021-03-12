import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo.js';
import Screen1 from './components/Screen1.js';
import Screen2 from './components/Screen2.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WeatherApi from './WeatherApi.js';

const Stack = createStackNavigator();

const ThemeContext = React.createContext();


export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null)
  const [units, setUnits] = useState('imperial')

  useEffect(() => {
    getLocation();
  }, [])

  async function getLocation() {
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      const BASE_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=${units}&appid=${WeatherApi.key}`;


      const response = await fetch(BASE_WEATHER_URL);

      const result = await response.json()

      if (response.ok) {
        setCurrentWeather(result)
      } else {
        setErrorMsg(result.message)
      }
    } catch (error) {
      console.log('ERROR: ', error)
    }

  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* <Stack.Screen name="Screen1" component={Screen1} > */}
        <Stack.Screen name="Screen1">
          {() => <WeatherInfo currentWeather={currentWeather} location={location}/>}
        </Stack.Screen>
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
{/* <WeatherInfo currentWeather={currentWeather} location={location}/> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
