import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  // Данные пользователя для отображения
  const userData = {
    name: "Камилла Шайкенова",
    bio: "Студентка Almaty Management University. Изучаю мобильную разработку на React Native.",
    avatar: "https://via.placeholder.com/150"
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Контейнер для аватара */}
      <View style={styles.header}>
        <Image 
          source={{ uri: userData.avatar }} 
          style={styles.profileImage} 
        />
        <Text style={styles.userName}>{userData.name}</Text>
      </View>

      {/* Секция описания */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioTitle}>О себе:</Text>
        <Text style={styles.bioText}>{userData.bio}</Text>
      </View>
    </ScrollView>
  );
}

// Стили через StyleSheet (Ch. 12, p. 260)
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Делаем фото круглым
    borderWidth: 3,
    borderColor: '#0066cc',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#333',
  },
  bioContainer: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 5, // Тень для Android
  },
  bioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
});