import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import SignInWelcomeScreen from '../screens/AuthScreen/SignInWelComeScreen';
import SignInScreen from '../screens/AuthScreen/SignInScreen'
import HomeScreen from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';
import DrawerNavigator from './DrawerNavigator';
import RestaurantMapScreen from '../screens/RestaurantMapScreen';
const Auth = createStackNavigator();

export function AuthStack(){
    return(
        <Auth.Navigator>
             <Auth.Screen 
                        name ="SignInWelcomeScreen"
                        component = {SignInWelcomeScreen}
                        options ={{
                            headerShown: false,
                            ...TransitionPresets.RevealFromBottomAndroid
                        }}
                    />

                    <Auth.Screen 
                        name ="SignInScreen"
                        component = {SignInScreen}
                        options ={{
                            headerShown: false,
                            ...TransitionPresets.RevealFromBottomAndroid
                        }}
                    />  
                    <Auth.Screen 
                        name ="DrawerNavigator"
                        component = {DrawerNavigator}
                        options ={{
                            headerShown: false,
                            ...TransitionPresets.RevealFromBottomAndroid
                        }}
                    />  
                     <Auth.Screen 
                        name ="RestaurantMapScreen"
                        component = {RestaurantMapScreen}
                        options ={{
                            headerShown: false,
                            ...TransitionPresets.RevealFromBottomAndroid
                        }}
                    />  


          
                   
                   
        </Auth.Navigator>
    )
}