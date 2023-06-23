import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>E-Prescrib</Text>
      <StatusBar style="auto" />
      <Button
        title="Voie Rapide"
        color="red"
        tintColor="lightblue"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    marginTop: '10%',
  },
});
