import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Header from '../shared/header';
import React from 'react';
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="BirdO" />,
            }
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#fff', height: 100 }
    }
});

export default HomeStack;