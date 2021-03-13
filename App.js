import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo.js';
import Home from './components/Home.js';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WeatherApi from './WeatherApi.js';

const Stack = createStackNavigator();

export const WeatherContext = React.createContext(); //////////////////////////////////


export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null)
  const [units, setUnits] = useState('imperial')
  const [pickedLocation, setPickedLocation] = useState('Current Location');

  useEffect(() => {
    getLocation();
  }, [])

  useEffect(() => {
    if (pickedLocation !== 'Current Location') {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${pickedLocation}&units=${units}&appid=2f9ee2c7fa8bd9e31f63140cfdfe40ea`)
        .then((res) => {
          // console.log('Response from axios: ', res.data);
          setCurrentWeather(res.data)
        })
        .catch((err) => console.log(err))
    } else {
      if(location !== null) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=${units}&appid=${WeatherApi.key}`)
          .then((res) => {
            // console.log('Response from axios: ', res.data);
            setCurrentWeather(res.data)
          })
          .catch((err) => console.log(err))
      }
    }
  }, [pickedLocation])

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
    <WeatherContext.Provider value={{currentWeather, pickedLocation, setPickedLocation}}>
      {console.log(`App --> chosenLocation: ${pickedLocation}`)}
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}>
            {/* {() => <Home />} */}
          </Stack.Screen>
          <Stack.Screen name="Weather">
            {() => <WeatherInfo currentWeather={currentWeather} location={location}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </WeatherContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MyTheme = {
  dark: false,
  colors: {
    primary: 'dodgerblue',
    background: 'rgb(0, 0, 0)',
    card: 'black',
    text: 'white',
    border: 'black',
    notification: 'rgb(255, 69, 58)',
  },
};