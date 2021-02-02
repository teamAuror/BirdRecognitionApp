import React from 'react';
import { StyleSheet, View, Text, ImageBackground, SafeAreaView, Image, ScrollView} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function About(){
    return(
        
        <ImageBackground source={require('../assets/images/about_bg.png')} style={globalStyles.bgImageContainer}>
            
            <View>
      <Text style={styles.aboutTxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
           specimen book.</Text>
      <SafeAreaView style={styles.scrollcontainer}>
        <ScrollView 
        horizontal={true}
        >
          <View style={styles.imgContainer}>
            <Image source= {require('../assets/images/pamudu.jpg')} style = {styles.imge} />
            <Text style={styles.txtName}>Pamudu Prabathiya</Text>
            <Text style={styles.txtPos}>Team Leader</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image source= {require('../assets/images/ruchira.jpg')} style = {styles.imge} />
            <Text style={styles.txtName}>Ruchira Nishan</Text>
            <Text style={styles.txtPos}>Team Member</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image source= {require('../assets/images/shenal.jpg')} style = {styles.imge} />
            <Text style={styles.txtName}>Shenal Fernando</Text>
            <Text style={styles.txtPos}>Team Member</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image source= {require('../assets/images/pasan.jpg')} style = {styles.imge} />
            <Text style={styles.txtName}>Pasan Jayasinghe</Text>
            <Text style={styles.txtPos}>Team Member</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image source= {require('../assets/images/vajith.jpg')} style = {styles.imge} />
            <Text style={styles.txtName}>Vajith Chamuditha</Text>
            <Text style={styles.txtPos}>Team Member</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image source= {require('../assets/images/tharindu.jpg')} style = {styles.imge} />
            <Text style={styles.txtName}>Tharindu Weerasinghe</Text>
            <Text style={styles.txtPos}>Team Member</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
            
           
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    scrollcontainer: {
        //flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      },
      imge:{
        marginTop: 20,
        marginBottom: 10,
        width: 100,
        height: 100,
        borderRadius: 50,
      },
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
      aboutTxt:{
        margin: 30,
        fontSize: 18,
        fontFamily: 'nunito-regular',
      },
      txtName:{
          fontSize: 14,
          fontFamily: 'poppins-bold',
      },
      txtPos: {
          fontSize: 12,
          fontFamily: 'poppins-regular',
      }
});
