import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';

// Создаем стек навигации
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Главная' }} 
        />
        {/* Здесь можно добавить DetailsScreen по аналогии */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}