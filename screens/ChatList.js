import React from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native'
import ChatListItem from '../components/ChatListItem'
import colors from '../constants/colors'
import {IconButton, Icon} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';

const ChatList = ({navigation}) => {
    return (
        <View style={styles.container}>
        <ScrollView>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             <ChatListItem navigation={navigation}/>
             
        </ScrollView>    
        <IconButton style={styles.fab} onPress={()=>{alert("hello")}} icon={<Icon as={<MaterialIcons name='message' />} color="#FFF" size='sm'  />} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : colors.main
    },
    fab:{
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor:colors.green2,
        borderRadius:50,
        paddingBottom:17,
        paddingLeft:17,
        paddingRight:17,
        paddingTop:17,
    }
})

export default ChatList
