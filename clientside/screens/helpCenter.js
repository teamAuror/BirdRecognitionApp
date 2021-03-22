import React from 'react';
import { StyleSheet, View, Text, ImageBackground , Linking, Button, ScrollView} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function helpCenter(){
    return(
        
        <ImageBackground source={require('../assets/images/about_bg.png')} style={globalStyles.bgImageContainer}>
            <ScrollView>
            <View style={styles.view}>
            <Text style={styles.qTypeTxt}>General Questions</Text>
                <Text style={styles.quesTxt}>
                    What is BirdO ?
                </Text>
                <Text style={styles.helpTxt}>
                    BirdO is the number 1 app for bird identification. It can identify birds by their snaps. 
                    it taps into hundreds of records within our database to find out what bird it is that you 
                    most likely encountered in the vicinity of where you saw the bird. 
                </Text>
                <Text style={styles.quesTxt}>
                    How does BirdO works ?
                </Text>
                <Text style={styles.helpTxt}>
                    BirdO will provide you with factual information about the bird you just encountered which 
                    are collected from reliable and recognized information points on the internet.
                </Text>
                <Text style={styles.quesTxt}>
                    How do i contact BirdO ?
                </Text>
                <Text style={styles.helpTxt}>
                    You can contact us by,
                    {/*<Button onPress={()=>Linking.openURL('mailto:support@birdo.net?subject=SendMail&body=Descreption')}
                     title="support@birdo.net"/>*/}
                    
                </Text>
                <Text style={styles.quesTxt}>
                    Do i need an internet connection to use BirdO ?
                </Text>
                <Text style={styles.helpTxt}>
                    Yes you have to have a working internet connection to download and use the BirdO.
                </Text>
                <Text style={styles.qTypeTxt}>Technical Questions</Text>
                <Text style={styles.quesTxt}>
                    What are  the system requirements to run the BirdO app ?
                </Text>
                <Text style={styles.helpTxt}>
                    ios:
                    Android:
                </Text>
                <Text style={styles.quesTxt}>
                    Camera won't focus / stay blurry ?
                </Text>
                <Text style={styles.helpTxt}>
                    Some devices may have problems focusing on near objects with shorter distances. 
                    Try to hold your device with some distance then you can get more results. 
                </Text>
                <Text style={styles.quesTxt}>
                    Camera screen stays black 
                </Text>
                <Text style={styles.helpTxt}>
                    Restart your device.
                    Remove third party camera apps.
                </Text>
                <Text style={styles.quesTxt}>

                </Text>
                <Text style={styles.helpTxt}>
                    
                </Text>

            </View>
            </ScrollView>
            
           
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
        marginBottom: 10,
      },
      quesTxt:{
        fontSize: 14,
        fontWeight:'bold',
        fontFamily: 'nunito-regular',
        marginBottom: 10,
      }
      ,
      qTypeTxt:{
        fontSize: 24,
        fontWeight:'bold',
        fontFamily: 'nunito-regular',
        marginBottom: 20,
      },
      view : {
          padding: 20,
      }
});