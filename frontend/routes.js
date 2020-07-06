import React from 'react';
import { StyleSheet } from 'react-native';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Alert from './src/pages/Alert';
//import Menu from './src/pages/Menu';
import Home from './src/pages/Home';


export default function Routes() {
    // document.getElementsByTagName('body')
    return (
       <BrowserRouter>
            <Switch>
                 <Route path="/" exact component={Home} />
                 <Route path="/teste" component={Alert} />
            </Switch>
       </BrowserRouter>

        
    );
}