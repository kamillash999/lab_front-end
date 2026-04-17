import React from 'react';
import { View, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { GridItem } from './components/GridItem/GridItem';

export default function App() {
  const { width } = useWindowDimensions();
  
  // Считаем колонки: 2 для узких экранов, 4 для широких
  const columns = width > 600 ? 4 : 2;
  const spacing = 10;
  // Математика для ровной сетки 
  const itemSize = (width - (spacing * (columns + 1))) / columns;

  const items = Array.from({ length: 10 }, (_, i) => `Блок ${i + 1}`);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {items.map((item, idx) => (
          <GridItem key={idx} title={item} size={itemSize} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingTop: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Обязательно для сетки
  },
});