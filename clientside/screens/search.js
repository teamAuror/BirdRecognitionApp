import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput } from 'react-native';


export default function Search(){
    
    return(
        <ImageBackground source={require('../assets/images/search_bg.jpg')} style={styles.bgImage}>
            <View style={styles.bg}>
                
                <View style={styles.inputHolder}>
                    <TextInput 
                    style={styles.txtInput}
                    placeholder="Enter Bird Name"
                    onChangeText={(text) => console.log(text)}/>
                </View>
                <View style={styles.listHolder}>
                <Text style={styles.txt}>Search Screen</Text>
                </View>
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
    txt: {
        padding: 10,
        margin: 10,
    },
    txtInput: {
        textAlign: 'center',
        width: 240,
        height: 60,
        backgroundColor: '#fff',
        fontSize: 24,
        padding: 10,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#757575',
    },
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    inputHolder: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listHolder: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
