import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { useContext, useEffect, useState, Component } from 'react'
import Teste from '../components/Teste'
import { Context, Provider } from '../context/authContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../api'
import DogHome from '../../assets/images/doghome.png'



const Home = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const onScreenLoad = async () => {
      const pets = await api.get('/user/findpet')
      console.log(pets)
    }
    onScreenLoad();
  }, [])

  return (
    <View style={styles.container}>
      <Image
                source={DogHome}
                style={styles.image}
                resizeMode="contain"
            />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d4e0ff"
  },
  text: {
    fontSize: 30
  },
  image: {
    width: 400,
    height: 400
  }



})

export default Home