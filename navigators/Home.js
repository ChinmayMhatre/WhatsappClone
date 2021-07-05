import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Text} from 'react-native'
import ChatRoom from '../screens/ChatList';
import ChatListStack from './ChatListStack'
import Status from '../screens/Status';
import Calls from '../screens/Calls';
import {  StatusBar,TouchableOpacity } from 'react-native';
import colors from "../constants/colors"
import { VStack, HStack, Button, IconButton, Icon, Center, Box, Tabs } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { color } from 'jimp';

const Tab = createMaterialTopTabNavigator();

const MainNavigator = () => {
    return (
        <>
            <StatusBar backgroundColor={colors.main} />
           
                        <Tab.Navigator 
                        initialRouteName="Chats"
                        tabBarOptions={{
                            showIcon :true,
                            inactiveTintColor:colors.headerText,
                            activeTintColor:colors.green,
                            indicatorContainerStyle:{
                                backgroundColor:colors.header
                            },
                            style:{
                                backgroundColor:colors.header,
                                paddingVertical:4,
                                elevation:0
                            },
                            indicatorStyle:{
                                height:4,
                                backgroundColor:colors.green
                            },
                            labelStyle:{
                                fontWeight:"bold"
                            }
                        }} >
                            <Tab.Screen
                            options={{
                                tabBarIcon :()=>(<Icon as={<MaterialIcons name='photo-camera' />} size='sm' color={colors.headerText} />) ,
                                tabBarLabel : ()=> null
                            }}
                             name="Camera" component={ChatListStack} />
                            <Tab.Screen name="Chats" component={ChatListStack} />
                            <Tab.Screen name="Status" component={Status} />
                            <Tab.Screen name="Calls" component={Calls} />
                        </Tab.Navigator>
            
            
        </>
        

    )
}

export default MainNavigator
