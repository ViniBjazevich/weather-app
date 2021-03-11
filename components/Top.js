import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Top() {
  return (
    <View style={styles.container}>
      <Text>YOOOO</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 2,
    width: '100%',
    justifyContent: 'center'
  }
})
