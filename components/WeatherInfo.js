import React from 'react'
import { View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function WeatherInfo(props) {

  if (props.currentWeather && props.location) {
    let img = props.currentWeather.weather[0].icon;
    console.log(img)
    let city = props.currentWeather.name;
    let description = props.currentWeather.weather[0].description;
    let temp = Math.floor(props.currentWeather.main.temp);
    let humidity = Math.floor(props.currentWeather.main.humidity);
    let wind = Math.floor(props.currentWeather.wind.speed);
    let high = Math.floor(props.currentWeather.main.temp_max);
    let low = Math.floor(props.currentWeather.main.temp_min);

    return (
      <View style={styles.container}>
        <View style={styles.mainInfo}>
          <Text style={styles.city}>{city}</Text>
          <Text style={styles.description}>{`${description}`}</Text>
          <Image source={{uri: `https://openweathermap.org/img/wn/${img}@4x.png`}} style={styles.image}/>
          <Text style={styles.temp}>{`${temp} °F`}</Text>
        </View>
        <View style={styles.moreInfoContainer}>
          <View style={styles.moreInfoRow}>
            <View style={[styles.moreInfoItem, styles.topItem]}>
              <Ionicons name="water" size={30} color="black" />
              <Text>Humidity</Text>
              <Text>{humidity} %</Text>
            </View>
            <View style={[styles.moreInfoItem, styles.rightItem, styles.topItem]}>
              <Feather name="wind" size={30} color="black" />
              <Text>Wind</Text>
              <Text>{wind} mph</Text>
            </View>
          </View>
          <View style={styles.moreInfoRow}>
            <View style={styles.moreInfoItem}>
              <Feather name="sun" size={24} color="black" />
              <Text>High</Text>
              <Text>{high} °F</Text>
            </View>
            <View style={[styles.moreInfoItem, styles.rightItem]}>
              <FontAwesome name="snowflake-o" size={24} color="black" />
              <Text>Low</Text>
              <Text>{low} °F</Text>
            </View>
          </View>
        </View>
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
    // justifyContent: 'center',
    width: '100%',
    // backgroundColor: 'dodgerblue',
    flex: 1,
  },
  mainInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'dodgerblue',
    flex: 1,
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
  },
  moreInfoContainer: {
    // flex: 1,
    height: 125,
    // backgroundColor: 'green',
    backgroundColor: 'dodgerblue',
    width: '100%'
  },
  moreInfoRow: {
    width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    // borderBottom: '1px solid black'
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
  },
  moreInfoItem: {
    width: '50%',
    // backgroundColor: 'orange',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  rightItem: {
    borderLeftColor: 'black',
    borderLeftWidth: 1,
  },
  topItem: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }

});

