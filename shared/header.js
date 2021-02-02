import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// custom header for Application
export default function Header({ navigation, title }){

    const openMenu = () =>{
        navigation.openDrawer();
    }

    return(
        <View style={styles.header}>
            <MaterialIcons name="menu" size={34} color="#E72D44" onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/images/hummingbird.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {

    },
    header: {
        minWidth: '100%',
        minHeight: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'pacifico-regular',
        fontWeight: '200',
        fontSize: 30,
        color: '#E72D44',

    },
    icon:{
        position: 'absolute',
        left: 16,
    },
    headerImage:{
        width: 26,
        height: 26,

    },
    headerTitle: {
        flexDirection: 'row-reverse'
    }
});