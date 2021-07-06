import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../constants/colors'
import { Text} from 'react-native';
import { VStack, HStack, Button, IconButton, Icon, Center, Box, Tabs } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import MainNavigator from './MainNavigator'
import ChatScreen from '../screens/ChatScreen'
const Stack = createStackNavigator();


const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            
            >
                <Stack.Screen
                name="Home"
                component={MainNavigator}
                options={{
                headerStyle:{
                    backgroundColor: colors.header,
                    shadowOpacity:0,
                    elevation:0
                },
                headerTintColor:colors.headerText,
                headerTitleAlign:"left",
                headerTitle:"WhatsApp",
                headerRight : ()=>(
                    <HStack space={1}>
                        <IconButton icon={<Icon as={<MaterialIcons name='search' />}
                        color="#A4ABAC" size='md'  />} />
                        <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='md' color="#A4ABAC" />} />
                    </HStack>
                )
                }}
                 />
                <Stack.Screen
                name="ChatRoom"
                component={ChatScreen}
                 />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator
