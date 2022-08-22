import React from 'react'
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

export const App = () => {
  return(
    <SafeAreaView>
    {/* // <HolaMundoScreen/>
    //<CounterScreen/> */}
    <BoxObjectModelScreen/>
    </SafeAreaView>
  )
}