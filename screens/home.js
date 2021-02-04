import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Modal, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import FlatButton from '../shared/button';
import { Ionicons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function Home(){
    // state set the modal visible true;
    const [modalVisible, setModalVisible] = useState(false);
    // state for set image
    const [image, setImage] = useState(null);
    // if the Button Pressed then modal visible set to true
    const handler = () =>{
        //console.log('clicked');
        setModalVisible(true);
    }

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            //const { camStatus } = await ImagePicker.requestCameraPermissionsAsync();
            //const { camStatus } = await Permissions.getAsync(Permissions.CAMERA);
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            
            //console.log(status);
            //console.log(camStatus);
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

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
    
    return(
        
            <ImageBackground source={require('../assets/images/home_bg.png')} style={styles.bgImage}>

                <Modal 
                visible={modalVisible}
                presentationStyle = 'pageSheet'
                animationType = 'slide'>
                    <View style={styles.modalContent}>
                        <Text>Hello from the modal</Text>
                        <Ionicons 
                          name="md-close-circle-sharp"
                          size={48} 
                          color="#E72D44"
                          onPress = { ()=> setModalVisible(false)}
                          style = { styles.closeIcon}/>
                          {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
                          <FlatButton text="Upload Image" onPress={pickImage}></FlatButton>
                          <FlatButton text="Take Image" onPress={takeImage}></FlatButton>
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
        //padding: 20,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        position: 'absolute',
        top: 20,
        right: 20,
    }
    
    
})