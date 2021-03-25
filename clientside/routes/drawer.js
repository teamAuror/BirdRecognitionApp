import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import CustomDrawer from '../screens/customDrawer';
import SplashScreen from '../screens/splashScreen';
import SearchStack from './searchStack';
import HelpStack from './helpStack';

const RootDrawerNavigator = createDrawerNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions: {
            header: null,
            drawerLabel: () => null
        }
    },
    Home: {
        screen: HomeStack,
    },
    Search: {
        screen: SearchStack,
    },
    HelpCenter : {
        screen: HelpStack,
        navigationOptions: {
            drawerLabel: () => "Help"
        }
    }, 
    About: {
        screen: AboutStack,
    }
    
    
},
{
    initialRouteName: 'Splash',
    contentComponent: CustomDrawer,
    contentOptions: {
        activeTintColor: '#E72D44',
        labelStyle: {
            fontSize: 18,
            fontFamily: 'poppins-regular',
            fontWeight: '200',
            marginLeft: 25,
            
        },
        
    },
    
});

export default createAppContainer(RootDrawerNavigator);