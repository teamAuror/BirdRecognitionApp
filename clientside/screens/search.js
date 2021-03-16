import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, Modal } from 'react-native';
import FlatButton from '../shared/button';
import { Ionicons } from '@expo/vector-icons'; 


export default function Search(){

    const [modalVisible, setModalVisible] = useState(false);

    const handler = () =>{
        setModalVisible(true); 
    }
    
    return(
        
        <ImageBackground source={require('../assets/images/search_bg.jpg')} style={styles.bgImage}>

        <Modal
        visible={modalVisible}
        presentationStyle = 'pageSheet'
        animationType = 'slide'>
            <View style={styles.modal}>
                    <Ionicons 
                          name="md-close-circle-sharp"
                          size={48} 
                          color="#E72D44"
                          onPress = { ()=> setModalVisible(false)}
                          style = { styles.closeIcon}/>
                <Text>Here the Form to tag location</Text>
            </View>
        </Modal>



            <View style={styles.bg}>
                
                <View style={styles.inputHolder}>
                    <TextInput 
                    style={styles.txtInput}
                    placeholder="Enter Bird Name"
                    onChangeText={(text) => console.log(text)}/>
                </View>
                <View style={styles.listHolder}>
                <Text style={styles.txt}>Data Will Appear Here</Text>
                </View>
                <View style={styles.buttonHolder}>
                    <FlatButton text="Find Bird Species" onPress={ () => console.log("Pressed!")}/>
                </View>
                <View style={styles.location}>
                    <Text style={styles.tagLocation} onPress={ handler }>Tag Location ?</Text>
                </View>
            </View>

        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    txt: {
        padding: 10,
        margin: 10,
    },
    txtInput: {
        textAlign: 'center',
        width: 240,
        height: 40,
        backgroundColor: '#fff',
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#757575',
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    inputHolder: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listHolder: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonHolder: {
        position: 'absolute',
        bottom: 15,
    },
    location: {
        position: 'absolute',
        top: 5,
        right: -50,
    },
    tagLocation: {
        color: '#E72D44',
        fontSize: 18,
        fontFamily: 'indie-flower',
        textDecorationLine: 'underline',
        
    },
    closeIcon: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    modal : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})
