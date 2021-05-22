import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenNavigator from './src/navigation/ScreenNavigator'
import React from "react"
export default function App(){


  return(
    <ScreenNavigator/>
  )

}
