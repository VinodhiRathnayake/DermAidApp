import React, { useState } from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen';
import AppHeader from '../components/AppHeader';
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import colors from "../config/colors";

  const initialMessages = [
    {
      id: 1,
      title: "ECZEMA",
      description: "20-12-2023",
      time: "9.40 pm",

      image: require("../assets/DermAidlogo.jpg"),
    },
    {
      id: 2,
      title: "HIVES",
      description: "20-12-2023",
      time: "9.40 pm",
      image: require("../assets/DermAidlogo.jpg"),
    },
    {
        id: 3,
        title: "aaa",
        description: "20-12-2023",
        time: "9.40 pm",
        image: require("../assets/DermAidlogo.jpg"),
      },
      {
        id: 4,
        title: "Skin",
        description: "20-12-2023",
        time: "9.40 pm",
        image: require("../assets/DermAidlogo.jpg"),
      },
      {
        id: 5,
        title: "Pox",
        description: "20-12-2023",
        time: "9.40 pm",
        image: require("../assets/DermAidlogo.jpg"),
      },
  ];
  

function PredictionRecordsScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
  
    const handleDelete = (message) => {
      // Delete the message from messages
      setMessages(messages.filter((m) => m.id !== message.id));
    };
  
  return (
    <Screen>
        <AppHeader title="PREDICTION RECORDS"/>
        <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={`Disease: ${item.title}`}
            subTitle={`Date: ${item.description}`}
            subTitle2={`Time: ${item.time}`}
            image={item.image}
            imageStyle={styles.image}
            style={styles.infoContainer}
            // onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}

       
      />

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  infoContainer:{
    paddingVertical: 20,
    borderRadius:25,
    
 },
 imageStyle:{
    width:200,
    height:200,
 
 }
});

export default PredictionRecordsScreen;