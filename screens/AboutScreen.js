import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import Header from "../componets/Header";
import Photo from "../assets/self.jpg";
import * as MailComposer from "expo-mail-composer";

function AboutScreen() {
  const [nameText, setNameText] = useState("");
  const [feedBackText, setFeedbackText] = useState("");

  const handelNameText = (inputText) => {
    setNameText(inputText);
  };

  const handelFeedBackText = (inputText) => {
    setFeedbackText(inputText);
  };

  function handelSubmit() {
    console.log("Feedback was submitted");
    nameText = "";
    feedBackText = "";
  }

  const sendMail = () => {
    MailComposer.composeAsync({
      recipients: ["aceppaluni@aol.com"],
      subject: "",
      body: "Hi Angelina, ",
    });
  };
  return (
    <ScrollView style={styles.view}>
      <Header />
      <View style={styles.viewOne}>
        <Image source={Photo} style={styles.photo} />
        <Text style={styles.text}>
          My name is Angelina. I have been attending the gym for a few years now
          and I am at a point where I think I can help those just starting out.
        </Text>
        <Text style={styles.text}>
          Please feel free to send me some feedback or reach out if you have any
          questions!
        </Text>
        <Text style={styles.text}>Happy Gaining!! </Text>
      </View>
      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={styles.viewTwo}>
        <Text
          style={{
            fontSize: 18,
            paddingTop: 10,
            paddingBottom: 2,
            color: "#AD4BDA",
          }}
        >
          Name:
        </Text>
        <TextInput
          placeholder="Name"
          value={nameText}
          onChangeText={handelNameText}
          editable
          multiline
          numberOfLines={50}
          maxLength={30}
          style={styles.textInput}
        ></TextInput>
        <Text
          style={{
            fontSize: 18,
            paddingTop: 10,
            paddingBottom: 2,
            color: "#AD4BDA",
          }}
        >
          FeedBack:
        </Text>
        <TextInput
          value={feedBackText}
          onChangeText={handelFeedBackText}
          editable
          multiline
          numberOfLines={50}
          maxLength={30}
          style={styles.textInput}
        ></TextInput>
        <Pressable onPress={() => handelSubmit} style={styles.button}>
          <Text style={styles.buttonTxt}>Submit</Text>
        </Pressable>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            paddingTop: 10,
            paddingBottom: 2,
            color: "#AD4BDA",
          }}
        >
          Email me with questions!
        </Text>
        <Pressable onPress={() => sendMail()} style={styles.button}>
          <Text style={styles.buttonTxt}>Email</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "black",
    color: "#AD4BDA",
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
    color: "#AD4BDA",
    textAlign: "center",
    paddingTop: 10,
  },
  textInput: {
    color: "white",
    backgroundColor: "#312C2C",
    paddingBottom: 80,
  },
  photo: {
    maxWidth: 150,
    height: 150,
    borderRadius: 40,
    marginRight: "auto",
    marginLeft: "auto",
  },
  emailText: {
    colo: "#AD4BDA",
  },
  button: {
    backgroundColor: "gray",
    color: "white",
    borderRadius: 4,
    justifyContent: "center",
    backgroundColor: "#AD4BDA",
    paddingVertical: 12,
    paddingHorizontal: 12,
    margin: 10,
  },
  buttonTxt: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
});

export default AboutScreen;
