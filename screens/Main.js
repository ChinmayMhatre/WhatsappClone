import React from 'react'
import {  StatusBar,TouchableOpacity } from 'react-native';
import { VStack, HStack, Button, IconButton, Icon, Text, Center, Box, Tabs } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

const Main = () => {
    return ( 
        <>
            <StatusBar backgroundColor="#0F1F22" />
            {/* <Box safeAreaTop backgroundColor="#6200ee" /> */}
            <HStack bg='#232F35' px={1} py={1} justifyContent='space-between' alignItems='center'>

                <HStack space={4} alignItems='center'>
                    <Text color="#A4ABAC" fontSize={20} px={2} fontWeight="600" >WhatsApp</Text>
                </HStack>

                <HStack space={1}>
                    <IconButton icon={<Icon as={<MaterialIcons name='search' />}
                    color="#A4ABAC" size='md'  />} />
                    <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='md' color="#A4ABAC" />} />
                </HStack>
            </HStack>
                <Tabs isFitted defaultIndex="1" colorScheme="teal" >
                <Tabs.Bar bg = "#232F35" >
                    <Tabs.Tab accessibilityLabel = "camera" >
                        <TouchableOpacity>  
                            <Icon as={<MaterialIcons name='photo-camera' />} size='sm' color="#A4ABAC" />
                        </TouchableOpacity>
                    </Tabs.Tab>
                    
                    <Tabs.Tab accessibilityLabel = "chats" >Chats</Tabs.Tab>
                    <Tabs.Tab accessibilityLabel = "chats" >Status</Tabs.Tab>
                    <Tabs.Tab accessibilityLabel = "chats" >Calls</Tabs.Tab>
                </Tabs.Bar>   
                <Tabs.Views>
                    <Tabs.View >Camera</Tabs.View>
                    <Tabs.View>One</Tabs.View>
                    <Tabs.View>Two</Tabs.View>
                    <Tabs.View>Three</Tabs.View>
                </Tabs.Views>
                </Tabs>
            
        </>

        
    )
}

export default Main
