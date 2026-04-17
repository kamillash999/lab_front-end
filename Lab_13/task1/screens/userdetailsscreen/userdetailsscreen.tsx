import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const UserDetailsScreen = ({ route }: any) => {
  // Извлекаем параметры из route.params 
  const { userId, userName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Детали профиля</Text>
      <View style={styles.card}>
        <Text style={styles.info}>ID студента: {userId}</Text>
        <Text style={styles.info}>Имя: {userName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { padding: 15, backgroundColor: '#fff', borderRadius: 10, elevation: 3 },
  info: { fontSize: 18, marginVertical: 5 }
});