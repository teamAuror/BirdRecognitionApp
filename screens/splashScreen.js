import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function SplashScreen(){
    return(
        <View style={styles.container} >
            <Image source={require('../assets/images/logo.png')} style={styles.image} />
            <Text style={styles.text} >Team Aurora</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: 300,
        height: 206.25,
    },
    text: {
        fontFamily: 'indie-flower',
        fontSize: 20,
        color: '#eee'
    }
});