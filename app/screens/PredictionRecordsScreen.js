import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

function PredictionRecordsScreen(props) {
  // State for prediction records (using a Map)
  const [diagnosisMap, setDiagnosisMap] = useState(new Map());
  // State for refreshing
  const [refreshing, setRefreshing] = useState(false);

  // Function to handle message deletion
  const handleDelete = (message) => {
    // Update the map by deleting the item with the matching ID
    setDiagnosisMap(
      new Map([...diagnosisMap].filter(([key]) => key !== message.id))
    ); // Preserve existing data
  };

  useEffect(() => {
    // Retrieve data from Async Storage on component mount
    const getData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("diagnosisData");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setDiagnosisMap(new Map(parsedData)); // Convert back to a Map
        }
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    };

    getData();
  }, []);

  return (
    <Screen>
      <AppHeader title="PREDICTION RECORDS" />
      {/* Render predictions from Map */}
      <FlatList
        data={Array.from(diagnosisMap.values())} // Convert values to an array
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={`Disease: ${item.predictedLabel}`} // Use retrieved label
            subTitle={`Date: ${item.dateString}`}
            subTitle2={`Time: ${item.timeString}`}
            image={
              item.photo && {
                uri: `data:image/jpg;base64,${item.photo}`, // Use retrieved photo
              }
            }
            imageStyle={styles.image}
            style={styles.infoContainer}
            // onPress={() => console.log("Message selected", item)}

            // Delete action for list item
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
      />
    </Screen>
  );
}

// Styling (unchanged)
const styles = StyleSheet.create({
  container: {},
  infoContainer: {
    paddingVertical: 20,
    borderRadius: 25,
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
});

export default PredictionRecordsScreen;
