import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function Home(){
    return(
        <View style={globalStyles.container}>
            <Text>Home Page</Text>
        </View>
    );
}