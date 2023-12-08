import React from 'react';
import {Text, View, StyleSheet, Image } from 'react-native'
import muscle from '../assets/muscle.jpg'

const Header = () => {
  return (
    <View style={styles.view}>
        <Image source={muscle} style={styles.image}></Image>
        <Text style={styles.text}>GYM Guide U</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
        //width: '100%',
        //height: '200%'
        margin: '10%',
        display: 'flex',
        flexDirection:'row'
        //justifyContent: 'flex-end'
    },
    image: {
        width: '20%',
        height: '50%',
    },
    text:{
        color: '#AD4BDA',
        fontSize: 20,

        //textAlign: 'center'
    }
})

export default Header
