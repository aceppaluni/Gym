import React from 'react'
import { View, Image, ScrollView, StyleSheet, Text} from 'react-native'
import Header from '../componets/Header';
import barbell from '../assets/barbellpad.jpg'
import wriststraps from '../assets/wriststraps.jpg'
import ethosbelt from '../assets/ethosbelt.jpg'

const EquipmentScreen = () => {
  return (
    <ScrollView style={styles.view}>
        <Header />
        <Text style={styles.text}>Barbell Pad</Text>
        <View style={styles.imageView}>
            <Image source={barbell} style={styles.image}/>
        </View>
        <Text style={styles.text}>Wrist Straps</Text>
        <View style={styles.imageView}>
            <Image source={wriststraps} style={styles.image}/>
        </View>
        <Text style={styles.text}>Lifting Belt</Text>
        <View style={styles.imageView}>
            <Image source={ethosbelt} style={styles.image}/>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    // imageView: {
    //     display: 'flex',
    //     justifyContent: 'flex-end',
    //     backgroundColor: 'black',
    //     margin: 'auto',
    // },
    image: {
        //alignItems: 'center',
        //justifyContent: 'flex-end',
        width: '90%',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
        //margin: 'auto',
    },
    text: {
        color: '#AD4BDA',
        textAlign: 'center',
        fontSize: 18,
        padding: 8,
    },
    view: {
        backgroundColor: "black",
    },
})

export default EquipmentScreen
