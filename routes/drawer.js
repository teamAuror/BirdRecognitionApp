import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import CustomDrawer from '../screens/customDrawer';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    },
    
    
},
{
    initialRouteName: 'Home',
    contentComponent: CustomDrawer,
    contentOptions: {
        activeTintColor: '#E72D44',
        labelStyle: {
            fontSize: 18,
            fontFamily: 'poppins-regular',
            fontWeight: '200',
            marginLeft: 25,
        }
    }
});

export default createAppContainer(RootDrawerNavigator);