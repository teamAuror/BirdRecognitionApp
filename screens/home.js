import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function Home(){
    return(
        <View style={[styles.container, {transform: [{ translateY: -100 }]}]}>
            <View style={styles.imageContainer}>

            </View>
            
                <Button title= 'Click Me' style={styles.btn} />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    imageContainer: {
        width: 300,
        height: 300,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 4,
        backgroundColor: 'red',
        
    },
    btn: {
        position: 'absolute',
        bottom: 100,
    }
    
})