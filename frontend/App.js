// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import Routes from './src/routes';


function App() {
  return (
    <Routes />
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//import React, { useState } from 'react';
import React from 'react';

import './global.css';

import Routes from './routes';

function App() {
    // Array [valor, funcaoDeAtualizacao]
    //const [counter, setCounter] = useState(0);
    //setCounter(counter + 1);
    // <button onClick={increment}>Incrementar</button>

    return (
        <Routes />
    );
}

export default App;
