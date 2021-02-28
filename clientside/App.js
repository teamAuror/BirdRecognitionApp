import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';

// loding custom fonts for project
const getFonts = () => Font.loadAsync({
  'indie-flower': require('./assets/fonts/IndieFlower-Regular.ttf'),
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'pacifico-regular': require('./assets/fonts/Pacifico-Regular.ttf'),
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf')
});
    


export default function App() {

  

  const [fontsLoaded, setFontsLoaded] = useState(false);
  // if fonts not loaded then startAsync method for call the getFonts
  // after the loading fonts, setFontsLoaded to true
  // if error occured, show the error
  if(!fontsLoaded){
    return(
      <AppLoading     
       startAsync={getFonts}
       onFinish={()=> setFontsLoaded(true)}
       onError={() => console.warn}
      /> 
    );
  }else{
    return (
      // if fontsLoaded then to Navigator
      <Navigator />
    );
  }
 
}

