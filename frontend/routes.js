import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Testes from './src/pages/Testes';

export default function Routes() {

    const Stack = createStackNavigator();

    return (
       <BrowserRouter>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>

            <Switch>
                <Route path="/teste" exact component={Testes} />
            </Switch>
       </BrowserRouter>

        
    );
}