import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatList from '../screens/ChatList';
const Stack = createStackNavigator();


const RootNavigator = () => {
    return (
       
            <Stack.Navigator
            initialRouteName="ChatRoom"
            >
                <Stack.Screen
                name="ChatRoom"
                component={ChatList}
                options={{
                headerShown:false
                }}
                 />
            </Stack.Navigator>
        
    )
}

export default RootNavigator
