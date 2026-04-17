import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

// Простой компонент-заглушка для состояния загрузки
export const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      {/* ActivityIndicator — это встроенный спиннер в React Native */}
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>Загрузка компонента...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
});