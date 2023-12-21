import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {colors} from '../Global/style'
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import SearchScreen from '../screens/SearchScreen';
import Header from '../components/Header';

const ClientTabs = createBottomTabNavigator();


export default function RootClientTabs(){

    return(
        <ClientTabs.Navigator
            screenOptions={{
            tabBarActiveTintColor: colors.buttons,
            tabBarStyle: {
                
            }
        }}
                >
            <ClientTabs.Screen 
                name ="HomeScreen"
                component ={HomeScreen}
                options ={
                    {
                        headerShown: false,
                        tabBarLabel : "Trang chủ",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='home'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                           

                        )
                        
                    }
                }

            />


            <ClientTabs.Screen 
                name ="SearchScreen"
                component ={SearchScreen}
                options ={
                    {
                        tabBarLabel : "Tìm Kiếm",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='search'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />



        <ClientTabs.Screen 
                name ="MyOrdersScreen"
                component ={MyOrdersScreen}
                options ={
                    {
                        tabBarLabel : "Đơn Hàng Của Tôi",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='view-list'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />



        <ClientTabs.Screen 
                name ="MyAccount"
                component ={MyAccountScreen}
                options ={
                    {
                        tabBarLabel : "Tài Khoản",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='person'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />


   


        </ClientTabs.Navigator>
    )
}