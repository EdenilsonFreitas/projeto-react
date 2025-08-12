import { Redirect } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
    return (
      <View style={styles.container}>
        <Text style ={styles.title}>Estou aprendo muito com o react native!</Text>
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
