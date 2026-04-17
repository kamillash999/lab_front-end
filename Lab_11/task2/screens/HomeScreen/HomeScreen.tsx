import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Добро пожаловать в Lab 11!</Text>
      <Button 
        title="Открыть детали" 
        onPress={() => navigation.navigate('Details')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Занимает весь экран
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});