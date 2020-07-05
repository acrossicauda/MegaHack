import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Stack = createStackNavigator();

import Testes from './src/pages/Testes';

export default function Routes() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>

       <BrowserRouter>
            <Switch>
                <Route path="/teste" exact component={Testes} />
            </Switch>
       </BrowserRouter>

        
    );
}