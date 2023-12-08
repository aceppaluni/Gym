import React from 'react';
import {ScrollView, View, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import Header from '../componets/Header';


function WorkoutDirectoryScreen ()  {

    return (
        <ScrollView style={styles.view}>
            <Header />
            <View>
                <Tile style={styles.tile} title='UPPER BODY WORKOUTS' titleStyle={{color: '#AD4BDA' }} featured ></Tile>
            </View>
            <View style={{margin: 5}}></View>
            <View>
                <Tile style={styles.tile} title='LOWER BODY WORKOUTS' titleStyle={{color: '#AD4BDA' }} featured></Tile>
            </View>
            <View style={{margin: 5}}></View>
            <View>
                <Tile style={styles.tile} title='FULL BODY WORKOUTS' titleStyle={{color: '#AD4BDA' }} featured></Tile>
            </View>
        </ScrollView>
    )
}

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
