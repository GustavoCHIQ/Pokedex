import * as React from 'react';
import { StatusBar } from 'react-native';
import { Rotas } from './Rotas';

export default function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent />
      <Rotas />
    </React.Fragment>
  )
}