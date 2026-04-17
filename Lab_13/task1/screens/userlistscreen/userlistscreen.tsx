import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export const UserListScreen = ({ navigation }: any) => {
  // Данные, которые мы хотим передать
  const user = { id: '777', name: 'Камилла Шайкенова' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список пользователей</Text>
      <Button 
        title="Посмотреть мой профиль"
        // Передаем объект вторым аргументом 
        onPress={() => navigation.navigate('Details', { 
          userId: user.id, 
          userName: user.name 
        })} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 }
});