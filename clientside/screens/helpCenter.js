import React from 'react';
import { StyleSheet, View, Text, ImageBackground , Linking, Button} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function helpCenter(){
    return(
        
        <ImageBackground source={require('../assets/images/about_bg.png')} style={globalStyles.bgImageContainer}>
            
            <View>
                <h2>General Questions</h2>
                <Text style={styles.helpTxt}>
                    <b>What is BirdO ?</b>
                    BirdO is the number 1 app for bird identification. It can identify birds by their snaps. 
                    it taps into hundreds of records within our database to find out what bird it is that you 
                    most likely encountered in the vicinity of where you saw the bird. 
                </Text>
                <Text style={styles.helpTxt}>
                    <b>How does BirdO works ?</b>
                    BirdO will provide you with factual information about the bird you just encountered which 
                    are collected from reliable and recognized information points on the internet.
                </Text>
                <Text style={styles.helpTxt}>
                    <b>How do i contact BirdO ?</b>
                    You can contact us by,
                    <Button onPress={()=>Linking.openURL('mailto:support@birdo.net?subject=SendMail&body=Descreption')}
                     title="support@birdo.net"/>
                    
                </Text>
                <Text style={styles.helpTxt}>
                    <b>Do i need an internet connection to use BirdO ?</b>
                    Yes you have to have a working internet connection to download and use the BirdO.
                </Text>
                <h2>Technical Questions</h2>
                <Text style={styles.helpTxt}>
                    <b>What are  the system requirements to run the BirdO app ?</b>
                    ios:
                    Android:
                </Text>
                <Text style={styles.helpTxt}>
                    <b>Camera won't focus / stay blurry</b>
                    Some devices may have problems focusing on near objects with shorter distances. 
                    Try to hold your device with some distance then you can get more results. 
                </Text>
                <Text style={styles.helpTxt}>
                    <b>Camera screen stays black</b>
                    Restart your device.
                    Remove third party camera apps.
                </Text>
                <Text style={styles.helpTxt}>
                    
                </Text>

            </View>
            
           
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
      imgContainer:{
        margin: 50,
        width: 200,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
       
      },
      helpTxt:{
        fontSize: 14,
        fontFamily: 'nunito-regular',
      }
});
