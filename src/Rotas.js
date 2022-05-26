import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './Home';
import { Details } from './Pokedetails'

export const Rotas = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Screen name='Details' component={Details} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  )
};