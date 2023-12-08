import React, {useState} from 'react'
import {ScrollView, Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Header from '../componets/Header';

function AboutScreen ()  {
    const [nameText, setNameText] = useState('');
    const [feedBackText, setFeedbackText] = useState(''); 

    const handelNameText = (inputText) => {
        setNameText(inputText)
    }

    const handelFeedBackText = (inputText) => {
        setFeedbackText(inputText)
    }

    function handelSubmit () {
        console.log('Feedback was submitted')
        nameText = '';
        feedBackText = '';
    }
  return (
    <ScrollView style={styles.view}>
        <Header />
        <View>
            <Text style={styles.text}>My name is Angelina. I have been attending the gym for a few years 
                now and I am at a point where I think I can help those just 
                starting out.
            </Text>
            <Text style={styles.text}>Please feel free to send me some feedback 
                or reach out if you have any questions! 
            </Text>
            <Text style={styles.text}>Happy Gaining!! </Text>
        </View>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth,}}/>
        <View>
            <Text style={styles.text} >Name:</Text>
            <TextInput placeholder='Name' value={nameText} onChangeText={handelNameText}></TextInput>
            <Text style={styles.text}>FeedBack:</Text>
            <TextInput placeholder='Feedback' value={feedBackText} onChangeText={handelFeedBackText}></TextInput>
            <Button onPress={() => handelSubmit} title='Submit'>Submit</Button>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "black",
        textC: '#AD4BDA'
    },
    text: {
        fontSize: 15,
        color: '#AD4BDA',
        textAlign: 'center'
    }
})

export default AboutScreen

