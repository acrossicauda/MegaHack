import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './Home';

const Stack = createStackNavigator();

export default function Menu()  {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                {/*<Stack.Screen name="Details" component={DetailsScreen} />*/}
            </Stack.Navigator>
        </NavigationContainer>

    );
}