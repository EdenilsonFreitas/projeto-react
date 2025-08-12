import { Redirect } from 'expo-router';
import { View, Text, StyleSheet, Alert } from 'react-native';

import {Button} from '../components/button';

export default function Index() {
    function handMessage() {
         Alert.alert("Ola", "Edenilson Freitas")

    }
    return (
      <View style={styles.container}>
        <Text style ={styles.title}>Ola!, Edenilson!</Text>

       <Button onPress={handMessage} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        padding: 32,
        justifyContent: "center",
    },

    title: {
    color: "#819986ff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
