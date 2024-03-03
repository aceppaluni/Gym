import { Card } from "react-native-elements";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import React from "react";

const RenderWorkouts = ({ filteredData }) => {
  return (
    <ScrollView style={styles.view}>
      {filteredData.map((workout) => (
        <View key={workout.id}>
          <Text style={styles.text}>{workout.mainTitle}</Text>
          <Card>
            <Card.Title>{workout.name}</Card.Title>
            <Text>{workout.set}</Text>
            {/* <Text>{workout.category}</Text> */}
          </Card>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: "#AD4BDA",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  mainCard: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  view: {
    backgroundColor: "black",
    color: "pink",
  },
});

export default RenderWorkouts;
