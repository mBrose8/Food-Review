import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { useContext, useEffect, useState, Component } from 'react'
import Teste from '../components/Teste'
import { Context, Provider } from '../context/authContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../api'
import Logo from '../../assets/images/Logo.png'



const Home = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const onScreenLoad = async () => {
      const pets =  await api.get('/user/findpet')
    console.log(pets)
    }
    onScreenLoad();
  }, [])

  return (
    <h1>Home</h1>,
    <Image styles={styles.image} source={require('../../assets/images/doghome.png')}/>
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
  image:{
    width:200,
    height:200
  }



})

const buttonstyle = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
})

export default Home