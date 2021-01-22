import React, { useEffect,} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function SplashScreen({ navigation }){


    useEffect(() => {
       setTimeout(() =>{
           navigation.navigate('Home');
       },5000);
    });
    
    return(
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image 
            source={require('../assets/images/logo.png')}
            style={[styles.box, {
              transform: [{ translateY: -100 }]
            }]}
            
            />
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>Team Aurora</Text>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
      
        
        
      },
      imageView:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
        
      },
      text:{
        fontFamily: 'indie-flower',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        padding: 2,
       
      },
      box:{
        width: 300,
        height: 206.25
      }
});