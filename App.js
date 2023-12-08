import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import WorkoutDirectoryScreen from './screens/WorkoutDirectoryScreen';
import {Icon} from 'react-native-elements'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import RenderWorkouts from './features/workouts/RenderWorkouts';
//import WorkoutInfoScreen from './screens/WorkoutInfoScreen';


const screenOptions =  {
  headerTintColor: '#fff',
  headerStyle: {backgroundColor: '#5637DD'}
  
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />}}/>
        <Tab.Screen name="Directory" component={WorkoutDirectoryScreen} options={{tabBarIcon: ({ color, size }) => <Icon name="list" color={color} size={size} />}}></Tab.Screen>
        
        {/* <Tab.Screen name='WorkoutInfo' component={WorkoutInfoScreen} options={({route}) => ({
          title: route.params.workout.name })}>
        </Tab.Screen> */}

        <Tab.Screen name="About" component={AboutScreen} options={{tabBarIcon: ({ color, size }) => <Icon name="info" color={color} size={size} />}}/>
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
};