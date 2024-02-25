import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import * as Sharing from 'expo-sharing';
import Screen from '../components/Screen';
import AppHeader from '../components/AppHeader';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native'; 



function PredictionScreen(props) {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [photo, setPhoto] = useState();
    const navigation = useNavigation();


    useEffect(() => {
        (async () => {
          const cameraPermission = await Camera.requestCameraPermissionsAsync();
          const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
          setHasCameraPermission(cameraPermission.status === "granted");
          setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
        })();
      }, []);
    
      if (hasCameraPermission === undefined) {
        return <Text>Requesting permissions...</Text>
      } else if (!hasCameraPermission) {
        return <Text>Permission for camera not granted. Please change this in settings.</Text>
      }
    
      let takePic = async () => {
        let options = {
          quality: 1,
          base64: true,
          exif: false
        };
    
        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
      };
    
      if (photo) {
        let scanPic = () => {
          // Navigate to result screen after scanning
          navigation.navigate('Result');
          setPhoto(undefined);
        };


        let savePhoto = () => {
          MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
            setPhoto(undefined);
          });
        };

        return (
            <Screen style={styles.container}>
            <SafeAreaView style={styles.container}>
              <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
              <View style={styles.buttons}>
              <Button title="Scan" onPress={scanPic} />
              {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
              <Button title="Discard" onPress={() => setPhoto(undefined)} />
              </View>
            </SafeAreaView>
            </Screen>
          );
        }
    
        return (
            <Screen style={styles.container}>
                 <AppHeader title="NEW PREDICTION" />
            <Camera style={styles.container} ref={cameraRef}>
              <View style={styles.buttonContainer}>
                <MaterialCommunityIcons name="camera" size={35} onPress={takePic} />
              </View>
              <StatusBar style="auto" backgroundColor="transparent" translucent={true} />
            </Camera>
            </Screen>
          );
        }
        

        const styles = StyleSheet.create({
            container: {
              flex: 1,
              // alignItems: 'center',
              justifyContent: 'center',
             
            },
            buttonContainer: {
              backgroundColor: '#fff',
              position: 'absolute',
              bottom: 20, 
              alignSelf: 'center',
              padding: 10,
              borderRadius: 50,
            },
            buttons: {
           
              paddingVertical: -50, // Adjust the vertical padding to reduce the height
    paddingHorizontal: 10, // Adjust the horizontal padding if needed
    borderRadius: 10,
              justifyContent: 'center',
            


            },
            preview: {
              alignSelf: 'stretch',
              flex: 1,
             

            }
          });
export default PredictionScreen;