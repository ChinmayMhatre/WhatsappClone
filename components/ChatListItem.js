import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { HStack, Avatar, VStack, Divider } from 'native-base'
import colors from '../constants/colors'

const ChatListItem = () => {
    return (
        <HStack space = {4} px={4} alignItems="center" py={2}>
        <Avatar
            size="lg"
            source={{
            uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
            }}
        >
        image
        </Avatar>
        <VStack space = {1}>
            <HStack width="79%" alignItems="center" justifyContent="space-between">
                <Text style = {styles.userHeading} >User Name</Text>
                <Text style={styles.date}>7/5/21</Text>
            </HStack>
            <Text style = {styles.message} >Hey! how are you?</Text>
            <Divider width="79%" height={0.4} bgColor={colors.header} />
        </VStack>
            
        </HStack>
    )
}

const styles = StyleSheet.create({
    userHeading:{
        color:"#ccc",
        fontSize:17,
        fontWeight:"bold"
    },
    date:{
        color:colors.headerText,
        alignSelf:"flex-end",
        fontSize:12
    },
    message:{
        color: colors.headerText,
        marginBottom:5
    }
})

export default ChatListItem
