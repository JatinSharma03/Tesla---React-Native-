import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Carlist from './components/carslist';
import Header from './components/header';

export default function App() {
  const item = {
    name: 'Model S',
    tagline: 'Starting at $69,420',
    taglineCTA: 'Touchless Delivery',
    image:"ModelS.jpeg",
  }
  return (
    <View style={styles.container}>

      <Header/>

      {/* <Carlist/> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    width:"100vw",
    height:"100vh",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
