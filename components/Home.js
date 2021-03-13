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
  const [locationsList, setLocationsList] = useState(['Current Location'])
  let array = ['Current Location']
  /*
  TODO: display a list of all locations you are able to see the weather from
  You also need to be able to press that component and be brought to there specific weather page
  */

  function submit() {
    console.log(text)
    setLocationsList((prev) => prev.concat([text]))
    onChangeText(() => '')
  }

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
              onChangeText={text => onChangeText(text)}
              value={text}
              placeholder="City"
            />
            <TouchableOpacity style={styles.submit} onPress={() => {
              setModalVisible(!modalVisible);
              submit();
            }}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.plus} onPress={() => setModalVisible(true)}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
      {/* Locations start here! */}
      {locationsList.map((name, key) => {
        return <DisplayLocation navigation={navigation} city={name} key={key}/>
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
    backgroundColor: 'black',
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
    backgroundColor: 'black',
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
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
    height: 240,
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
    backgroundColor: 'black',
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
  },
  submit: {
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    position: 'absolute',
    display: 'flex',
    bottom: 20,
    right: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 20,
  }
})
