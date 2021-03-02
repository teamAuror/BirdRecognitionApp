import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Modal, Image, StatusBar, Dimensions } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import FlatButton from '../shared/button';
import { Ionicons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


let deviceHeight = Dimensions.get('window').height;

export default function Home(){
    // state set the modal visible true;
    const [modalVisible, setModalVisible] = useState(false);

    // state for set image
    const [image, setImage] = useState(null);

    // if the Button Pressed then modal visible set to true
    const handler = () =>{
        setModalVisible(true); 
    }
    
    
    
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
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

      // Take image from Camera
      const takeImage = async () =>{
        let result = await ImagePicker.launchCameraAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: false,
         aspect: [4, 3],
         quality: 1,
       });

       console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }

     }

     /* creating the method for send the image uri as base64 */

    
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
                          
                          {/* the image getting from user */}
                        {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
                    </View>
                </Modal>

                <View style={styles.imageContainer}>

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
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        borderStyle: 'dashed',
        backgroundColor: 'transparent',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        
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
    }
   
    
    
})