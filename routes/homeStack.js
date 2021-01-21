import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'BirdO',
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#fff', height: 100 }
    }
});

export default HomeStack;