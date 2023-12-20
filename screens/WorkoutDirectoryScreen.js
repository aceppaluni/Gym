import React, {useState} from 'react';
import { WORKOUTS } from '../shared/workouts';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from '../componets/Header';
import RenderWorkouts from '../features/workouts/RenderWorkouts';
import RNPickerSelect from 'react-native-picker-select';

const WorkoutDirectoryScreen = () => {
    const [data, setData] = useState(WORKOUTS);
    const [filterChoice, setFilterChoice] = useState('');

    const filterWorkoutsByCategory = (selectedDay) => {
        try {
            console.log('Selected Day:', selectedDay);
      
            const filteredData = selectedDay
              ? WORKOUTS.filter((workout) => workout.day === selectedDay)
              : WORKOUTS;
      
            console.log('Filtered Data:', filteredData);
      
            setData(filteredData);
          } catch (error) {
            console.error('Error filtering workouts:', error);
        }
        
    }

    const handelFilter = (text) => {
        console.log('Selected Day', text)
        setFilterChoice(text)
        filterWorkoutsByCategory(text)
    }; 

    const daysOfWeek = [
        {label: 'Monday', value: 'Monday'},
        {label: 'Tuesday', value: 'Tuesday'},
        {label: 'Wednesday', value: 'Wednesday'},
        {label: 'Thursday', value: 'Thursday'},
        {label: 'Friday', value: 'Friday'}
    ]
  
    return (
      <View style={styles.view}>
        <Header />
        <RNPickerSelect
        value={filterChoice}
          onValueChange={(text) => handelFilter(text)}
          items={daysOfWeek}
          placeholder={{
            label: 'Filter By Category...',
            value: '',
          }}
          style={{
            inputAndroid: {
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              margin: 10,
              padding: 10,
            },
            inputIOS: {
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              margin: 10,
              padding: 10,
            },
          }}
        />
        <FlatList 
            style={styles.view}
            data={data} 
            renderItem={({item: workout}) => <RenderWorkouts  filteredData={[workout]} />} // brackets ensure what is coming back is an array 
            keyExtractor={(workout) => workout.id.toString()}
        />
      </View>
    );
};
  

const styles = StyleSheet.create({
    view: {
        backgroundColor: "black",
        color: 'pink'
    },
    tile: {
        color: '#AD4BDA',
        textAlign: 'center',
        backgroundColor: 'pink',
        border: '1px solid pink',
        fontSize: 15,
    },
})

export default WorkoutDirectoryScreen;