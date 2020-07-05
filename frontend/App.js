// import { StatusBar } from 'expo-status-bar';
//import React, { useState } from 'react';
import React from 'react';

import './global.css';
import { StyleSheet } from 'react-native';

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;