import React, {useState} from 'react';
import { WORKOUTS } from '../shared/workouts';
import {FlatList, ScrollView, StyleSheet, TextInput, View, Text} from 'react-native';
import Header from '../componets/Header';
import RenderWorkouts from '../features/workouts/RenderWorkouts';
import RNPickerSelect from 'react-native-picker-select';

const WorkoutDirectoryScreen = () => {
    const [data, setData] = useState(WORKOUTS);
    const [filter, setFilter] = useState('');

    const filterWorkoutsByCategory = (workouts, selectedCategory) => {
        // If selectedCategory is empty, return all workouts
        if (!selectedCategory) {
          return workouts;
        }
      
        // Filter workouts based on the selected category
        return workouts.filter((workout) =>
          workout.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );
    };
  
    const handleFilter = (text) => {
      setFilter(text);
  
      const filterData = WORKOUTS.map((dayWorkout) => {
        const workouts = dayWorkout.workouts || [];

        return {
            ...dayWorkout,
            workouts: filterWorkoutsByCategory(workouts, text)
          };
      });
  
      setData(filterData);
    };
  
    const categories = [
      { label: 'All Categories', value: 'All Categories' },
      { label: 'Upper Body', value: 'Upper Body' },
      { label: 'Lower Body', value: 'Lower Body' },
      { label: 'Full Body', value: 'Full Body' },
    ];
  
    return (
      <ScrollView style={styles.view}>
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.mainTitle}</Text>
              <FlatList
              {...console.log(data)}
                data={item.workouts}
                keyExtractor={(workout) => workout.id.toStrin()}
                // renderItem={({item: workout}) => (<RenderWorkouts workout={workout} />)}
                renderItem={({ item: workout}) => (
                  <View key={workout.id}>
                    <Text>{workout.name}</Text>
                    <Text>{workout.set}</Text>
                    <Text>{workout.category}</Text>
                  </View>
                )}
                />
            </View>
          )}
        />
      </ScrollView>
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
