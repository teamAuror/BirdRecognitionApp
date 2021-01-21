import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Dimentions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';


export default function CustomDrawer(props){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
            </View>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container:{

    },
    logo: {
        width: 200,
        height: 137.5,
    },
    imageContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    
});
