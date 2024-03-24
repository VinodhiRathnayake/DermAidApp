import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

function PredictionRecordsScreen(props) {
  const [diagnosisMap, setDiagnosisMap] = useState([]); // Use an array initially
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("diagnosisData");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          // Check if data is an array before setting state
          if (Array.isArray(parsedData)) {
            setDiagnosisMap(parsedData);
          } else {
            console.warn("Invalid data format in AsyncStorage");
          }
        }
      } catch (error) {
        console.error("Error retrieving data:", error);
      } finally {
        setRefreshing(false); // Stop refreshing after data is retrieved
      }
    };

    getData();
  }, []);

  const handleDelete = async (item) => {
    try {
      // Update local state immediately
      setDiagnosisMap(diagnosisMap.filter((record) => record.id !== item.id));

      await AsyncStorage.removeItem("diagnosisData");
      console.log("Item removed from storage successfully");
    } catch (error) {
      console.error("Error removing item from storage:", error);
      // Handle deletion failure (optional)
    }
  };

  return (
    <Screen>
      <AppHeader title="PREDICTION RECORDS" />
      <FlatList
        data={diagnosisMap}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={`Disease: ${item.predictedLabel}`}
            subTitle={`Date: ${item.dateString}`}
            subTitle2={`Time: ${item.timeString}`}
            image={item.photo && { uri: `data:image/jpg;base64,${item.photo}` }}
            imageStyle={styles.image}
            style={styles.infoContainer}
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
