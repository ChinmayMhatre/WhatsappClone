import React,{useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity, Image } from 'react-native'
import { HStack, Avatar, VStack, Divider,Modal, Button,  } from 'native-base'
import colors from '../constants/colors'

const ChatListItem = ({navigation}) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
         <Modal isOpen={showModal}  mt={40} size="md" onClose={() => setShowModal(false)}>
        <Modal.Content style={styles.modalContent}>
        
          <Modal.Body style={styles.modalBody}>
          <Image
            source={{
                uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
            }}
            style={styles.modalImage}
          />
          </Modal.Body>
          <Modal.Footer style={styles.footer} bgColor={colors.header}>
            <Text>hello</Text>
            <Button.Group space={2}>
              <Button>LEARN MORE</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>


        <HStack space = {4} px={4} alignItems="center" py={2}>
        <TouchableOpacity
            onPress={() => setShowModal(true)}
        >
            <Avatar
                size="lg"
                source={{
                uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
                }}
            >
            image
            </Avatar>
        </TouchableOpacity>

        
            <TouchableOpacity onPress={()=>navigation.navigate("ChatRoom")}>
                <VStack space = {1}>
                    <HStack width="79%" alignItems="center" justifyContent="space-between">
                        <Text style = {styles.userHeading} >User Name</Text>
                        <Text style={styles.date}>7/5/21</Text>
                    </HStack>
                    <Text style = {styles.message} >Hey! how are you?</Text>
                    <Divider width="79%" height={0.4} bgColor={colors.header} />
                </VStack>
            </TouchableOpacity>
        </HStack>
        </>
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
        marginBottom:8
    },
    footer:{
        width:"100%"
    },
  
    modalContent:{
        paddingLeft:0,
        paddingTop:0,
        marginTop:0,
        marginBottom:"auto"
    },
    modalBody:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        paddingRight:0,
        paddingBottom:0
    },
    modalImage:{
        width:"100%",
        margin:0,
        height:300
    }
})

export default ChatListItem
