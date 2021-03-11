import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Top from './components/Top.js';
import WeatherInfo from './components/WeatherInfo.js';
import Bottom from './components/Bottom.js';
import WeatherAPIKey from './API_KEYS.js';

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

      const BASE_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=${units}&appid=${WeatherAPIKey}`


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
    <View style={styles.container}>
      <Top />
      <WeatherInfo currentWeather={currentWeather} location={location}/>
      <Bottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
