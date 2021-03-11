import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Bottom() {
  return (
    <View style={styles.container}>
      <Text>Bottom</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 2,
    width: '100%'
  }
})
