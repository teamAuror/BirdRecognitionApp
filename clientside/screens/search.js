import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, Modal, TouchableWithoutFeedback, Keyboard, Image} from 'react-native';
import FlatButton from '../shared/button';
import { Ionicons } from '@expo/vector-icons'; 


export default function Search(){

    const [modalVisible, setModalVisible] = useState(false);

    const handler = () =>{
        setModalVisible(true); 
    }

    // to take the inputs from TextInputs
    const[modalBirdName, setModalBirdName] = useState(""); 
    const[modalLocation, setModalLocation] = useState("");
    const[birdName, setBirdName] = useState("");
    const[bird, setBird] = useState("");
    const[scientificName, setScientificName] = useState("");
    const[location, setLocation] = useState("");

    /* location tag method */
    async function tagBirdLocation(birdName, birdLocation){
        // check if the values are not null
        if(birdName == "" && birdLocation == ""){
                alert("Both fields are need to be filled!");
        }else{
             //send birdName, and location with fetch
             try{
                await fetch('http://192.168.8.100:5000/tagLocation', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        birdName: birdName,
                        birdLocation: birdLocation,
                    }),
                });

            }catch(e){
                console.log(e); // print the error in log
            }
        }
           
    }


    // search method
    async function searchBird(birdName){
        if(birdName == ""){
            alert("Please enter Bird Name");
        }else{
            try{
                await fetch('http://192.168.8.100:5000/birdDes', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        birdName: birdName,
                    }),
                });
            }catch(e){
                console.log(e);
            }
        }
    }
    
    return(
        
        
            <ImageBackground source={require('../assets/images/search_bg.jpg')} style={styles.bgImage}>

            <Modal
            visible={modalVisible}
            presentationStyle = 'pageSheet'
            animationType = 'slide'>
                 <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
                console.log("keybord dismissed");
            }}>
                <View style={styles.modal}>
                        <Ionicons 
                            name="md-close-circle-sharp"
                            size={48} 
                            color="#E72D44"
                            onPress = { ()=> setModalVisible(false)}
                            style = { styles.closeIcon}/>
                    {/* <Text>Here the Form to tag location</Text> */}
                    <View style={styles.formStyle}>
                        <TextInput 
                            placeholder = "Enter Bird"
                            style = {styles.modalInput}
                            onChangeText ={ (text) => {setModalBirdName(text)} }
                        />

                        <TextInput 
                            placeholder = "Enter Location"
                            style = {styles.modalInput}
                            onChangeText = { (text) => {setModalLocation(text)} }
                        />

                        <FlatButton text="Tag Location" onPress={ () => tagBirdLocation(modalBirdName, modalLocation)} />
                    </View>
                </View>
                </TouchableWithoutFeedback>
            </Modal>


                <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
                console.log("keybord dismissed");
            }}>
                <View style={styles.bg}>
                    
                    <View style={styles.inputHolder}>
                        <TextInput 
                        style={styles.txtInput}
                        placeholder="Enter Bird Name"
                        onChangeText={(text) => setBirdName(text)}/>
                    </View>
                    <View style={styles.listHolder}>
                    {/* <Text style={styles.txt}>Data Will Appear Here</Text> */}
                    <Image source={}  style={{width:200, height:150, justifyContent:'center', alignItems:'center', marginBottom:20 , borderRadius:15 }} />  
                    <Text style={styles.birdData}> { bird } </Text>
                    <Text style={styles.birdSCName}> { scientificName } </Text>
                    <Text style={styles.birdData}> { location } </Text>
                    </View>
                    <View style={styles.buttonHolder}>
                        <FlatButton text="Find Bird Species" onPress={ () => searchBird(birdName)}/>
                    </View>
                    <View style={styles.location}>
                        <Text style={styles.tagLocation} onPress={ handler }>Tag Location ?</Text>
                    </View>
                </View>
                </TouchableWithoutFeedback>

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
        width: 300,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
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
    },
    formStyle: {
        width: 300,
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    modalInput: {
        textAlign: 'center',
        width: 240,
        height: 40,
        backgroundColor: '#fff',
        padding: 10,
    },
    birdData:{
        marginTop: 15,
        color: '#E72D44',
        fontSize: 18,
        fontFamily: 'poppins-regular',
    },
    birdSCName:{
        color: '#E72D44',
        fontSize: 18,
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        fontFamily: 'poppins-italic',
    }

})
