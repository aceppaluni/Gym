import React, {useState} from 'react';
import { WORKOUTS } from '../shared/workouts';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import Header from '../componets/Header';
import RenderWorkouts from '../features/workouts/RenderWorkouts';
import RNPickerSelect from 'react-native-picker-select';

const WorkoutDirectoryScreen = () => {
    const [data, setData] = useState(WORKOUTS);
    const [filterChoice, setFilterChoice] = useState('');

    const filterWorkoutsByCategory = (filterChoice) => {
        // let filteredWorkouts = [];
        // for(let i = 0; i < WORKOUTS.length; i ++) {
        //     for (let j = 0; j < WORKOUTS[i].length; j ++ ) {
        //         if(WORKOUTS[i][j].category === filterChoice) {
        //             filteredWorkouts.push(WORKOUTS[i][j])
        //         }
        //     }
        // }
        // setData(filteredWorkouts)
        const filteredData = WORKOUTS[1][0].filter((dayWorkouts, index) => {
            // return dayWorkouts.filter((workout) => workout[index].category.toLowerCase().includes(filterChoice.toLowerCase())
            // );
            //return WORKOUTS[1][0].filter((workout) => [workout])
            dayWorkouts
        })
        console.log(filteredData)
        setData(filteredData)
    }

    const handelFilter = (text) => {
        setFilterChoice(text)
        filterWorkoutsByCategory(text)
    }; 

    const categories = [
      { label: 'All Categories', value: '' },
      { label: 'Upper Body', value: 'Upper Body' },
      { label: 'Lower Body', value: 'Lower Body' },
      { label: 'Full Body', value: 'Full Body' },
    ];
  
    return (
      <View style={styles.view}>
        <Header />
        <RNPickerSelect
        value={filterChoice}
          onValueChange={(text) => handelFilter(text)}
          items={categories}
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
            data={data.flat()} 
            renderItem={({item: dayWorkouts}) => <RenderWorkouts data={dayWorkouts} />} 
            keyExtractor={(dayWorkout) => dayWorkout.id}
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

export default WorkoutDirectoryScreen
