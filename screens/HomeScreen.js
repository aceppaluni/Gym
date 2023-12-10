import React from 'react'
import {ScrollView, Text, View, StyleSheet } from 'react-native'
import {Image} from 'react-native'
import HomeImage from '../assets/working-out-fitness-model-sport-wallpaper-preview.jpg';
import Header from '../componets/Header';

function HomeScreen () {
  return (
    <ScrollView style={styles.view}>
      <Header />
        <View style={styles.view}>
            <Text style={styles.text}>Welcome</Text>
            <Text style={styles.text}>We are happy your here</Text>
            <Text style={styles.text}>I threw this together as a project for myself 
              and as a guide for those looking to start their gym journey. 
            </Text>
            <Text style={styles.text}>Here you can find programs, supplements and more!</Text>
            <Text style={styles.text}>Lets make those gains!!</Text>
        </View>
        <View style={styles.imageView}>
          <Image source={HomeImage} style={styles.image} />
        </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  view: {
    backgroundColor: "black",
    textC: '#AD4BDA'
  },
  text: {
    color: '#AD4BDA',
    textAlign: 'center',
    fontSize: 18,
    padding: 6,
  },
  imageView: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    margin: 'auto',
  },
  image: {
    //alignItems: 'center',
    justifyContent: 'flex-end',
    width: '150%',
    margin: 'auto',
  }
})
