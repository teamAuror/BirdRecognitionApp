import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

export default function Search(){
    return(
        <ImageBackground source={require('../assets/images/search_bg.jpg')} style={styles.bgImage}>
            <View>
                <Text>Search Screen</Text>
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
})