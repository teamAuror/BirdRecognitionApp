
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About BirdO',
        }
    }
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#fff', height: 100 }
    }
});

export default  AboutStack;