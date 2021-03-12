import React, { useState } from 'react';
import DisplayLocation from './DisplayLocation'
import { StyleSheet, Text, View, Button, TouchableOpacity, Modal, Alert, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Home({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState("");
  let array = ['Current Location', 'Los Angeles']
  /*
  TODO: display a list of all locations you are able to see the weather from
  You also need to be able to press that component and be brought to there specific weather page
  */
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity
              style={styles.modalX}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Feather name="x" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.modalText} >Enter city name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="City"
            />
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.plus} onPress={() => setModalVisible(true)}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
      {/* Locations start here! */}
      {array.map((name) => {
        return <DisplayLocation navigation={navigation} city={name}/>
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    flex: 1,
    alignItems: 'center'
  },
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
  plus: {
    position: 'absolute',
    right: 40,
    bottom: 30,
    backgroundColor: '#4b4b4b',
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'white',
    zIndex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    height: 300,
    width: '80%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
    fontSize: 20
  },
  modalX: {
    position: 'absolute',
    right: 20,
    top: 15,
    backgroundColor: '#4b4b4b',
    height: 40,
    width: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    zIndex: 1
  },
  modalText: {
    marginTop: 30,
    marginBottom: 10,
    width: '90%',
    fontSize: 20
  }
})
