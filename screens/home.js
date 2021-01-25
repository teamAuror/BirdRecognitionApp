import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import FlatButton from '../shared/button';

export default function Home(){
    const handler = () =>{
        console.log('clicked');
    }
    return(
        
            <ImageBackground source={require('../assets/images/home_bg.png')} style={styles.bgImage}>
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
        borderColor: '#eee',
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
    }
    
    
})