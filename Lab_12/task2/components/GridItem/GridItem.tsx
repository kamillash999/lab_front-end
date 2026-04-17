import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface GridProps {
  title: string;
  size: number;
}

export const GridItem = ({ title, size }: GridProps) => {
  return (
    <View style={[styles.box, { width: size, height: size }]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#e3f2fd',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2196f3',
  },
  text: {
    color: '#0d47a1',
    fontWeight: 'bold',
  },
});