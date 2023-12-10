import React, {useState} from 'react'
import {ScrollView, Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import Header from '../componets/Header';
import Photo from '../assets/self.jpg'

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
        <View style={styles.viewOne}>
            <Image source={Photo} style={styles.photo} />
            <Text style={styles.text}>My name is Angelina. I have been attending the gym for a few years 
                now and I am at a point where I think I can help those just 
                starting out.
            </Text>
            <Text style={styles.text}>Please feel free to send me some feedback 
                or reach out if you have any questions! 
            </Text>
            <Text style={styles.text}>Happy Gaining!! </Text>
        </View>
        <View style={{ borderBottomColor: 'white', borderBottomWidth: StyleSheet.hairlineWidth,}}/>
        <View style={styles.viewTwo}>
            <Text style={{fontSize: 18, paddingTop: 10, paddingBottom: 2, color: '#AD4BDA'}} >Name:</Text>
            <TextInput placeholder='Name' value={nameText} onChangeText={handelNameText} editable multiline numberOfLines={50} maxLength={30} style={styles.textInput}></TextInput>
            <Text style={{fontSize: 18, paddingTop: 10, paddingBottom: 2, color: '#AD4BDA'}} >FeedBack:</Text>
            <TextInput value={feedBackText} onChangeText={handelFeedBackText} editable multiline numberOfLines={50} maxLength={30} style={styles.textInput}></TextInput>
            <Button onPress={() => handelSubmit} title='Submit'>Submit</Button>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "black",
        color: '#AD4BDA'
    },
    viewOne: {
        margin: 10,
        //paddingTop: 5
    },
    viewTwo: {
        //alignItems: 'center'
    },
    text: {
        fontSize: 18,
        color: '#AD4BDA',
        textAlign: 'center',
        paddingTop: 10
    },
    textInput: {
        color: 'white',
        backgroundColor: '#312C2C',
        paddingBottom: 80
    },
    photo: {
        maxWidth: 150,
        height: 150,
        borderRadius: 40,
        marginRight: 'auto',
        marginLeft: 'auto'
    }
})

export default AboutScreen

