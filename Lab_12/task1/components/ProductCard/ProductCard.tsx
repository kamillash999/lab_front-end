import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

// Компонент карточки, который подстраивается под экран
export const ProductCard = () => {
  // Получаем ширину экрана
  const { width } = useWindowDimensions();
  
  // Если ширина больше 500, считаем, что это широкий экран (Landscape)
  const isWide = width > 500;

  return (
    <View style={[styles.card, isWide ? styles.row : styles.column]}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }} 
        style={isWide ? styles.imageLarge : styles.imageSmall} 
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Умные часы</Text>
        <Text style={styles.description}>
          Адаптивный дизайн помогает этой карточке выглядеть хорошо везде.
        </Text>
        <Text style={styles.price}>99 000 ₸</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    margin: 10,
    elevation: 5, // Тень для Android
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  imageSmall: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  imageLarge: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 10,
    flexShrink: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: '#666',
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '600',
  },
});