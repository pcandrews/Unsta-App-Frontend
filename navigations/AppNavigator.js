import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Notification: NotificationsScreen,
});
const NotificationNavigator = createStackNavigator({
  Notification: NotificationsScreen,
});
const HomeSideMenu = createDrawerNavigator({
  Home: HomeNavigator,
  Notificaciones: NotificationNavigator 
});
const AppNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Home: HomeSideMenu,
  },
  {
    initialRouteName: 'Login'
  }
);



export default createAppContainer(AppNavigator);