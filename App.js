import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main  from './screens/Main.js'
import RootNavigator from './navigators/index.js'

const colors = [
  "#0F1F22",
  "#232F35",
  "#A4ABAC"
]

import {
  NativeBaseProvider
} from 'native-base';


const Stack = createStackNavigator();

 function App() {
  return (
    <NativeBaseProvider>
        <RootNavigator/>
    </NativeBaseProvider>
   
   
  );  
}

export default App



{/* <NavigationContainer>
          <Stack.Navigator
          initialRouteName={Main}
          >
            <Stack.Screen
              name="Main" 
              component={Main} 
              options = {{
                  headerShown:false
                }}
            />
          </Stack.Navigator>
        </NavigationContainer> */}