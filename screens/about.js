import React from 'react';
import { StyleSheet, View, Text, ImageBackground} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function About(){
    return(
        
        <ImageBackground source={require('../assets/images/about_bg.png')} style={globalStyles.bgImageContainer}>
            
                <Text style={styles.text}>About Screen</Text>
            
           
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    text: {
        margin: 20,
    }
});
