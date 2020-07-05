// import { StatusBar } from 'expo-status-bar';
//import React, { useState } from 'react';
import React from 'react';

import { StyleSheet } from 'react-native';

// import Routes from './src/pages/Menu';
import Routes from './routes';

import './global.css';
//import './global.js'; // carregar tudo no js, por que o react nao carrega css

// const AppNavigator = createStackNavigator({
//     Home: { screen: Menu },
// });

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