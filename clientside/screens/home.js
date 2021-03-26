import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Modal, Image, StatusBar, Dimensions, ActivityIndicator } from 'react-native';
// import { globalStyles } from '../styles/globalStyles';
import FlatButton from '../shared/button';
import { Ionicons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';
// import base64 from 'react-native-base64';
import Avatar from '../assets/images/Avatar1.png';


let deviceHeight = Dimensions.get('window').height;

export default function Home(){

    //avatar uri
    const avatarURI = Image.resolveAssetSource(Avatar).uri;

    // state set the modal visible true;
    const [modalVisible, setModalVisible] = useState(false);

    // state for set image
    const [image, setImage] = useState(avatarURI);

    // if the Button Pressed then modal visible set to true
    const handler = () =>{
        setModalVisible(true); 
    }
    // Bird Name
    const[birdName, setBirdName] = useState("Bird Name");

    //Bird SC Name
    const[birdSCName, setBirdSCName] = useState("Scientific Name");

    // Bird Location
    const[location, setLocation] = useState("Location");

    // for activityIndicator
    const[isLoaded, setIsLoaded] = useState(false);
    const[isAnimate, setIsAnimate] = useState(false);

   

    
    
    
    
    // requiring Camera roll and Media Library Permission while redirecting to Home Screen
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') { // checking the Platform whether App or Web
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(); // setting the Permission Status
            
            // If the user do not grant the permission, Then is Alert msg will display
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      // Pick an image from media library
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({ // launch the media library
          mediaTypes: ImagePicker.MediaTypeOptions.Images, // type of media (Only Images)
          allowsEditing: true, // allows to edit ( ex: When user wants to crop image)
          aspect: [4, 3], // image ratio
          quality: 1, // quantity for uploading
          base64: true, // to convert the image to base64 format
        });
    
        console.log(result);
        setIsAnimate(true);
    
        if (!result.cancelled) {
          uploadImage(result.base64); // sending the image to backend
          setImage(result.uri);
          console.log(result.uri);
          setModalVisible(false);
        }
      };

      // Take image from Camera
      const takeImage = async () =>{
        let result = await ImagePicker.launchCameraAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: false,
         aspect: [4, 3],
         quality: 1,
         base64: true,
       });

       setIsAnimate(true);
       console.log(result);
    
        if (!result.cancelled) {
          uploadImage(result.base64);
          setImage(result.uri);
          setModalVisible(false);
        }

     }

     /* creating the method for send the image uri as base64 */
     async function uploadImage(str){
        try{
          await fetch('http://192.168.8.100:5000/classification',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              image: str,
            }),
          });
          getBirdDetails();
        }catch(e){
          console.log(e);
        }
     }


     // getting bird's informations from backend
     async function getBirdDetails(){
       try {
         let response = await fetch('http://192.168.8.100:5000/bird'); // home must be change to current route
         let responseJSON = await response.json();
         setBirdName( responseJSON.bird); // name must be change to correct key
         setBirdSCName(responseJSON.birdScName);
         setLocation(responseJSON.location);
         setIsLoaded(true)
         console.log( responseJSON.bird) 
         setIsAnimate(false);
       } catch (error) {
         console.log(error);
       }
     }
     

    
    return(
            
            <ImageBackground source={require('../assets/images/home_bg.png')} style={styles.bgImage}>

              {/* to show status bar in dark */}
              <StatusBar barStyle="dark-content" /> 

              {/* when user click 'Find Bird' this modal will popup for upload and take image*/}
                <Modal 
                visible={modalVisible}
                presentationStyle = 'pageSheet'
                animationType = 'slide'
                >
                    <View style={styles.modalContent}>
                        {/* icon for close the modal if needed */}
                        <Ionicons 
                          name="md-close-circle-sharp"
                          size={48} 
                          color="#E72D44"
                          onPress = { ()=> setModalVisible(false)}
                          style = { styles.closeIcon}/>
                          <View style={styles.btnHolder}>
                            <FlatButton text="Upload Image" onPress={pickImage} ></FlatButton>
                            <FlatButton text="Take Image" onPress={takeImage}  ></FlatButton>
                          </View>
                         
                    </View>
                </Modal>

                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={{ width: 200, height: 150, justifyContent: 'center', alignItems: 'center', marginBottom: 20, borderRadius: 15 }}/>
                    <Text style={styles.birdName}>{ birdName }</Text>
                    <Text style={styles.birdSCName}>{ birdSCName } </Text>
                    <Text style={styles.birdData}> { location }</Text>
                </View>
                <View style={styles.indicatorContainer}>
                <ActivityIndicator 
                    size = "large"
                    color = "#E72D44"
                    animating = { isAnimate }
                  />
                </View>
                <FlatButton text='Find Bird' onPress={handler} />
            </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,

    },
    imageContainer: {
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
    bgImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        
        
    },
    closeIcon: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    btnHolder:{
      width: 300,
      height: 300,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    indicatorContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    birdData : {
      marginTop: 15,
      color: '#E72D44',
      fontSize: 18,
      fontFamily: 'poppins-regular',
    },
    birdName: {
      color: '#E72D44',
      fontSize: 18,
      fontFamily: 'poppins-bold',
    },
    birdSCName: {
      color: '#E72D44',
      fontSize: 18,
      textDecorationLine: 'underline',
      fontStyle: 'italic',
      fontFamily: 'poppins-italic',
    }
   
    
    
})