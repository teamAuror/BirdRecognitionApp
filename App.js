import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';


const getFonts = () => Font.loadAsync({
  'indie-flower': require('./assets/fonts/IndieFlower-Regular.ttf'),
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'pacifico-regular': require('./assets/fonts/Pacifico-Regular.ttf'),
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
});
    


export default function App() {

  

  const [fontsLoaded, setFontsLoaded] = useState(false);
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
      <Navigator />
    );
  }
 
}

