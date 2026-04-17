import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Описываем типы для пропсов 
interface ProfileProps {
  name: string;
  major: string;
  imageUrl: string;
}

export const ProfileCard = ({ name, major, imageUrl }: ProfileProps) => {
  return (
    <View style={styles.card}>
      {/* Компонент Image требует объект с uri */}
      <Image source={{ uri: imageUrl }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.majorText}>{major}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // Располагаем элементы в ряд
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000', // Тень для iOS
    elevation: 4,        // Тень для Android
    alignItems: 'center',
    marginVertical: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40, // Круглое фото
  },
  info: {
    marginLeft: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  majorText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});