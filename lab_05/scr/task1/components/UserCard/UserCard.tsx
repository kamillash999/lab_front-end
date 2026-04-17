import React from 'react';
import { User } from '../../types';

// Типизация пропсов карточки
interface UserCardProps {
  user: User;
  isActive?: boolean; // Необязательный пропс
  children: React.ReactNode; // Тип для вложенного контента
}

export const UserCard = ({ user, isActive = true, children }: UserCardProps) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '15px', 
      margin: '10px 0',
      opacity: isActive ? 1 : 0.5 // Визуальное отражение isActive
    }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Возраст: {user.age}</p>
      <div style={{ marginTop: '10px', fontStyle: 'italic' }}>
        {children}
      </div>
    </div>
  );
};