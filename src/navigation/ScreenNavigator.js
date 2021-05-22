import React from "react"
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from '../screens/Login'

const ScreenNavigator = createStackNavigator(

    {
        LoginScreen:{
           screen:Login
        }


    },
    {
        initialRouteName:'LoginScreen',
        defaultNavigationOptions:{

        }
    }


)

export default createAppContainer(ScreenNavigator)