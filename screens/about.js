import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles'; 


export default function About(){
    return(
        <View style={globalStyles.container}>
            <Text>About Page</Text>
        </View>
    );
}