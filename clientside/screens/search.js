import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, Modal,
     TouchableWithoutFeedback, Keyboard, Image, ActivityIndicator,
      KeyboardAvoidingView , Alert} from 'react-native';
import FlatButton from '../shared/button';
import { Ionicons } from '@expo/vector-icons'; 
import Avatar from '../assets/images/avatar.png';


export default function Search(){

    //avatar uri
    const avatarURI = Image.resolveAssetSource(Avatar).uri;

    const [modalVisible, setModalVisible] = useState(false);

    const handler = () =>{
        setModalVisible(true); 
    }

    const[isAnimate, setIsAnimate] = useState(false); // for activity indicator
    // to take the inputs from TextInputs
    const[modalBirdName, setModalBirdName] = useState(""); 
    const[modalLocation, setModalLocation] = useState("");
    const[birdName, setBirdName] = useState("");
    const[bird, setBird] = useState("");
    const[scientificName, setScientificName] = useState("");
    const[location, setLocation] = useState("");
    const[image, setImage] = useState(avatarURI); // set the default image to avatar

    /* location tag method */
    async function tagBirdLocation(birdName, birdLocation){
        // check if the values are not null
        if(birdName == "" && birdLocation == ""){
               // alert("Both fields are need to be filled!");
                Alert.alert(
                    "Attention!",
                    "Both fields are need to be filled!",
                    [
                        {
                            text: "OK",
                            onPress: () => console.log("Ok!")
                        }
                    ]
                );
        }else{
             //send birdName, and location with fetch
             setIsAnimate(true);
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
            getSuccess(); // checks whether tag or not
        }
           
    }


    // search method
    async function searchBird(birdName){
        if(birdName == ""){
            //alert("Please enter Bird Name");
            Alert.alert(
                "Attention!",
                "Please enter Bird Name",
                [
                    {
                        text: "OK",
                        onPress: () => console.log("OK!")
                    }
                ]
            );
        }else{
            setIsAnimate(true); // activating the indicator
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
           

            // to get birdDetails back
            getDataFromDatabase();
            
          
           
           
        }
    }

    //fetch data from the database
    async function getDataFromDatabase(){
        try{
            let response = await fetch('http://192.168.8.100:5000/dataFromDB');
            let responseJSON = await response.json();
            console.log( responseJSON); // for debug purposes
            if(responseJSON.bird === ""){
               // alert("No bird Found!");
                Alert.alert(
                    "Attention!",
                    "No bird Found!",
                    [
                        {
                            text: "OK",
                            onPress: () => console.log("OK!")
                        }
                    ]
                );
                //setIsAnimate(false); // after loading set to false
            }else{
                setBird(responseJSON.bird);
                setScientificName(responseJSON.birdScName);
                setLocation(responseJSON.location);
                
            }
            setIsAnimate(false); // after loading set to false
            
            
        }catch(e){
            console.log(e);
        }
    }

    async function getSuccess(){
        try{
            let response = await fetch('http://192.168.8.100:5000/locationSuccess');
            let responseJSON = await response.json();
            console.log(responseJSON);

            if(responseJSON.success == false){
                //alert("No bird Found!");
                Alert.alert(
                    "Attention!",
                    "No bird Found!",
                    [
                        {
                            text: "OK",
                            onPress: () => console.log("OK!")
                        }
                    ]
                );
                setIsAnimate(false);
            }
            setIsAnimate(false);
        }catch(e){
            console.log(e);
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
                                     <ActivityIndicator 
                                        size = "large"
                                        color = "#E72D44"
                                        animating = { isAnimate }
                                     />
                                <View>
                                    
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
            </Modal>


           
                <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
                console.log("keybord dismissed");
                 }}>
                 
                    <View style={styles.bg}>

                    {/* <View style={styles.indicatorContainer}>
                            <ActivityIndicator 
                                size = "large"
                                color = "#E72D44"
                                animating = { isAnimate }
                            />
                    </View> */}
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        keyboardVerticalOffset = "10"
                        >
                        <View style={styles.inputHolder}>
                            <TextInput 
                            style={styles.txtInput}
                            placeholder="Enter Bird Name"
                            onChangeText={(text) => setBirdName(text)}/>
                        </View>
                    </KeyboardAvoidingView>



                        <View style={styles.listHolder}>
                            <Image source={{ uri: image }}  style={{width:200, height:150, justifyContent:'center', alignItems:'center', marginBottom:20 , borderRadius:15 }} />  
                            <Text style={styles.birdData}> { bird } </Text>
                            <Text style={styles.birdSCName}> { scientificName } </Text>
                            <Text style={styles.birdData}> { location } </Text>
                            <ActivityIndicator 
                                size = "large"
                                color = "#E72D44"
                                animating = { isAnimate }
                      />
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
        justifyContent:'space-around',
    },
    inputHolder: {
        width: 'auto',
        height: 'auto',
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
        position: 'relative',
    },
    location: {
        position: 'absolute',
        top: 5,
        right: -20,
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
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#757575',
        backgroundColor: 'rgba(255,255,255,0.8)',
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
    },
    indicatorContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        
      }

})
