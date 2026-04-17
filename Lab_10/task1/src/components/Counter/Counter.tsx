import { useState } from 'react';

// Простой компонент для демонстрации тестов
export function Counter() {
  const [count, setCount] = useState(0);

  // Обработчики в стиле camelCase
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Счетчик: <span data-testid="count-value">{count}</span></h1>
      <button onClick={handleIncrement}>Добавить</button>
      <button onClick={handleDecrement}>Убрать</button>
    </div>
  );
}