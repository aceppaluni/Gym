import React, {useState} from 'react';
import { WORKOUTS } from '../shared/workouts';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import Header from '../componets/Header';
import RenderWorkouts from '../features/workouts/RenderWorkouts';
import RNPickerSelect from 'react-native-picker-select';

const WorkoutDirectoryScreen = () => {
    const [data, setData] = useState(WORKOUTS);
    const [filterChoice, setFilterChoice] = useState('');

    // const handelFilter = (text) => {
    //     setFilterChoice(text)

    //     const filteredData = WORKOUTS.map((dayWorkout) => {
    //         const workouts = dayWorkout.slice(0);

    //         const filteredWorkouts = workouts.filter((workout) => workout.category.toLowerCase().includes(text.toLowerCase())
    //         );
    //         return [dayWorkout[0], ...filteredWorkouts]
    //     })
        
    //     // const filteredData = WORKOUTS.filter((workout) => workout.category.includes(text));
    //     console.log(filteredData)
    //     setData(filteredData)
      
    // }

    const filterWorkoutsByCategory = (array, category) => {
        let filteredWorkouts = [];
        for(let i = 0; i < array.length; i ++) {
            for (let j = 0; j < array.length; j ++ ) {
                if(array[i][j].category === category) {
                    filteredWorkouts.push(array[i][j])
                }
            }
        }
        filteredWorkouts(WORKOUTS, 'Full Body')
        //return filteredWorkouts
    }
  
    // const handelFilter = (text) => {
    //     console.log('Selected Category: ', text)
    //     //setFilter();
        
    //     let filterData = WORKOUTS.filter((dayWorkout) => {
    //         const workouts = dayWorkout.workouts || [];
            
    //         return {
    //             ...dayWorkout,
    //              : filterWorkoutsByCategory(workouts, text)
    //         };
    //     });

    //   console.log("Filtered data", filterData)
    //   setData(filterData);
    // }; 

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
          onValueChange={(text) =>{ setFilterChoice(text), filterWorkoutsByCategory(text)}}
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
            data={data} 
            renderItem={({item: workout}) => (<RenderWorkouts item={workout} key={workout.id} />)} 
            keyExtractor={workout => workout.id}
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
