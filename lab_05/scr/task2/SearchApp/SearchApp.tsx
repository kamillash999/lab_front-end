import React, { useState } from 'react';
import { User } from '../../task1/types';
import { UserCard } from '../../task1/components/UserCard/UserCard';

const INITIAL_USERS: User[] = [
  { name: 'Ivan', email: 'ivan@example.com', age: 25 },
  { name: 'Maria', email: 'maria@example.com', age: 30 },
  { name: 'Alex', email: 'alex@example.com', age: 19 },
  { name: 'Olga', email: 'olga@example.com', age: 28 },
  { name: 'Dmitry', email: 'dmitry@example.com', age: 34 }
];

export const SearchApp = () => {
  // Типизация состояний через Generics
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_USERS);

  // Обработчик изменения инпута
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = INITIAL_USERS.filter(user => 
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  // Обработчик клика (очистка)
  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSearchTerm('');
    setFilteredUsers(INITIAL_USERS);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Поиск пользователей</h2>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleSearch} 
        placeholder="Введите имя..." 
      />
      <button onClick={handleClear} style={{ marginLeft: '10px' }}>Очистить</button>

      <div style={{ marginTop: '20px' }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <UserCard key={index} user={user}>
              <p>Дополнительная информация о пользователе {user.name}</p>
            </UserCard>
          ))
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
    </div>
  );
};