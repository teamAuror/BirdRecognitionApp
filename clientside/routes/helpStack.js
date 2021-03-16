import { createStackNavigator } from 'react-navigation-stack';
import HelpCenter from '../screens/helpCenter';
import Header from '../shared/header';
import React from 'react';

const screens = {
    About: {
        screen: HelpCenter,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Help Center" />,
            }
        }
    }
}

const HelpStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#fff', height: 100 }
    }
});

export default  HelpStack;