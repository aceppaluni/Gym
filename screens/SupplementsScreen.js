import React from 'react';
import {ScrollView, Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';
import Header from '../componets/Header';
import nutropic from '../assets/download.jpg'

const SupplementsScreen = () => {
  return (
    <ScrollView style={styles.view}>
        <Header />
        <View>
            <Text style={styles.topText}>Supplements</Text>
        </View>
        <Card containerStyle={styles.second}>
          <Card.Image source={nutropic} style={styles.image} />
          <Text style={styles.text}>This is one of my favorite suplements! Taking just two of these 
            really gave me the pump I was looking for. I combined this product with the
            non-stym pre0workout from bucked up and created the ultimate pre-workout cocktail. 
          </Text>
        </Card>
        <Card containerStyle={styles.second}>
          <Card.Image source={nutropic} style={styles.image} />
          <Text style={styles.text}>This is one of my favorite suplements! Taking just two of these 
            really gave me the pump I was looking for. I combined this product with the
            non-stym pre0workout from bucked up and created the ultimate pre-workout cocktail. 
          </Text>
        </Card>
        <Card containerStyle={styles.second}>
          <Card.Image source={nutropic} style={styles.image} />
          <Text style={styles.text}>This is one of my favorite suplements! Taking just two of these 
            really gave me the pump I was looking for. I combined this product with the
            non-stym pre0workout from bucked up and created the ultimate pre-workout cocktail. 
          </Text>
        </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  topText: {
    color: '#AD4BDA',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 4
  },
  view: {
    backgroundColor: "black",
    textC: '#AD4BDA'
  },
  second: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "black",
    borderColor: '#AD4BDA',
    margin: 2,
    display: 'flex',
    
  },
  image: {
    maxWidth: 100,
    height: 100,
    flexWrap: 'wrap'
  },
  text: {
    color: '#AD4BDA',
    fontSize: 16,
    margin: 9,
  }
})

export default SupplementsScreen
