import React from 'react'
import { View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native'

export default function WeatherInfo(props) {
  if (props.currentWeather && props.location) {
    let img = props.currentWeather.weather[0].icon;
    let city = props.currentWeather.name;
    let description = props.currentWeather.weather[0].description;
    let temp = Math.floor(props.currentWeather.main.temp);
    return (
      <View style={styles.container}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.description}>{`${description}`}</Text>
        <Image source={{uri: `https://openweathermap.org/img/wn/${img}@4x.png`}} style={styles.image}/>
        <Text style={styles.temp}>{`${temp} °F`}</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // backgroundColor: 'green',
    flex: 3
  },
  image: {
    height: 200,
    width: 200,
  },
  city: {
    fontSize: 35,
    marginBottom: 10
  },
  temp: {
    fontSize: 40
  },
  description: {
    fontSize: 22,
    textTransform: 'capitalize'
  }

});

