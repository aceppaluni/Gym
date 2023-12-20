import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import WorkoutDirectoryScreen from './screens/WorkoutDirectoryScreen';
import {Icon} from 'react-native-elements'
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SupplementsScreen from './screens/SupplementsScreen';

const screenOptions =  {
  headerTintColor: '#fff',
  headerStyle: {backgroundColor: '#5637DD'}
  
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} tabBarOptions={{style: {backgroundColor: '#AD4BDA'}}}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ size }) => <Icon name="home" color={'black'} size={size} />}} />
        <Tab.Screen name="Directory" component={WorkoutDirectoryScreen} options={{tabBarIcon: ({  size }) => <Icon name="list" color={'black'} size={size} />}}/>
        <Tab.Screen name="Supplements" component={SupplementsScreen} options={{tabBarIcon: ({  size }) => <Icon name="circle" color={'black'} size={size} />}}/>
        <Tab.Screen name="About" component={AboutScreen} options={{tabBarIcon: ({ size }) => <Icon name="info" color={'black'} size={size} />}}/>
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
};
