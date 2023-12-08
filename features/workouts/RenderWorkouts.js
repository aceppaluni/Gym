import { Card, SocialIcon, Tile } from 'react-native-elements';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import React from 'react'
import Header from '../../componets/Header';
import { WORKOUTS } from '../../shared/workouts';

const RenderWorkouts = () => {

  const [mondayUpperBody, tuesdayLowerBody, wednesdayFullBody, thursdayUpperBody, fridayLowerBody] = WORKOUTS;

  const renderDayWorkouts = (dayWorkouts) => {
    return (
      <View>
        {Array.isArray(dayWorkouts) && dayWorkouts.map((exercise, index) => (
        <View key={index}>
        <Card>
          <Text style={styles.mainCard}>{exercise.mainTitle}</Text>
          <Card.Title>{exercise.name}</Card.Title>
          <Text>{exercise.set}</Text>
        </Card>
        </View>
        ))}
      </View>
    )
  }

  return (
    <ScrollView>
      {renderDayWorkouts(mondayUpperBody)}
      {renderDayWorkouts(tuesdayLowerBody)}
      {renderDayWorkouts(wednesdayFullBody)}
      {renderDayWorkouts(thursdayUpperBody)}
      {renderDayWorkouts(fridayLowerBody)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: '#AD4BDA',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  mainCard: {
    textAlign: 'center',
    justifyContent: "center",
    fontSize: 20,
  }
})

export default RenderWorkouts
