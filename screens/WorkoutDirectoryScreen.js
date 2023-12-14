import React, {useState} from 'react';
import { WORKOUTS } from '../shared/workouts';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import Header from '../componets/Header';
import RenderWorkouts from '../features/workouts/RenderWorkouts';
import RNPickerSelect from 'react-native-picker-select';

const WorkoutDirectoryScreen = () => {
    const [data, setData] = useState(WORKOUTS);
    const [filter, setFilter] = useState('');

    const filterWorkoutsByCategory = (workouts, selectedCategory) => {
        switch (selectedCategory) {
            case 'Upper Body' : return workouts.filter((workout) =>  workout.category.toLowerCase().includes('Upper Body')
            );
            case 'Lower Body': return workouts.filter((workout) => workout.category.includes('Lower Body')
            );
            case 'Full Body': return workouts.filter((workout) => workout.category.includes('Full Body')
            );
            default:
        }
        return workouts
    }

    // const filterWorkoutsByCategory = (workouts, selectedCategory) => {
    //     // If selectedCategory is empty, return all workouts
    //     if (!selectedCategory) {
    //       return workouts;
    //     }
      
    //     // Filter workouts based on the selected category
    //     return workouts.filter((workout) =>
    //       workout.category.includes(selectedCategory)
    //     );
    // };

    const handleFilter = (text) => {
        setFilter(text)
        setData(filterWorkoutsByCategory(WORKOUTS, text))

        // const filterData = WORKOUTS.map((dayWorkout) => {
        //    const workouts = dayWorkout.workouts || [];
        //     const filteredWorkouts = filterWorkoutsByCategory(workouts, text);

        //     return {
        //         ...dayWorkout,
        //         workouts: filteredWorkouts
        //     };
        // });
        // console.log('Selected:',filterData)
        // setData(filterData)

    }
  
    // const handleFilter = (text) => {
    //     console.log('Selected Category: ', text)
    //   setFilter(text);
  
    //   const filterData = WORKOUTS.map((dayWorkout) => {
    //     const workouts = dayWorkout.workouts || [];

    //     return {
    //         ...dayWorkout,
    //         workouts: filterWorkoutsByCategory(workouts, text)
    //     };
    //   });
    //   console.log("Filtered data", filterData)
    //   setData(filterData);
    // };
  
    const categories = [
      { label: 'All Categories', value: 'All Categories' },
      { label: 'Upper Body', value: 'Upper Body' },
      { label: 'Lower Body', value: 'Lower Body' },
      { label: 'Full Body', value: 'Full Body' },
    ];
  
    return (
      <View style={styles.view}>
        <Header />
        <RNPickerSelect
        value={filter}
          onValueChange={(value) => handleFilter(value)}
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
