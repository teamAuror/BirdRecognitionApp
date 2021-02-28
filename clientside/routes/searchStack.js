import { createStackNavigator } from 'react-navigation-stack';
import Search from '../screens/search';
import Header from '../shared/header';
import React from 'react';


const screens = {
    Search: {
        screen: Search,
        navigationOptions: ({ navigation }) =>{
            return {
                headerTitle : () => <Header navigation={navigation} title= "Search" />
            }
        }
    }
}

const SearchStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#fff', height: 100 }
    }
});

export default SearchStack;