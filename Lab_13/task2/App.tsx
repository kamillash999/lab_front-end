import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

// Простые заглушки для экранов (в реальном проекте вынеси их в папки)
const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Главная страница</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Настройки приложения</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#e91e63' }}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Главная' }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Настройки' }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}