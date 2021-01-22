import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import FlatButton from '../shared/button';

export default function Home(){
    const handler = () =>{
        console.log('clicked')
    }
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>

            </View>
            
                <FlatButton text='Find Bird' onPress={handler} />
            
        </View>
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
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        
    },
    
    
})