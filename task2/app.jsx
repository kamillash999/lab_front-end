import { useState } from 'react';
import './App.css'; 

function App() {
 // ---ДАННЫЕ---
  // Подсветка
  const [isHighlighted, setIsHighlighted] = useState(false);
  // Счетчик
  const [count, setCount] = useState(0);

  // --- ФУНКЦИИ ---
  // Используем camelCase 
  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  // --- ОТОБРАЖЕНИЕ ---
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      
      {/* Секция 1: Декларативная подсветка */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Lab 1.1: Declarative Toggle</h2>
        <button onClick={toggleHighlight}>
          Toggle Highlight
        </button>
        {/* Класс зависит от значения переменной state (isHighlighted) */}
        <p className={isHighlighted ? "highlight" : ""}>
          Этот текст меняется декларативно (React).
        </p>
      </section>

      <hr />

      {/* Секция 2: Счетчик */}
      <section>
        <h2>Lab 1.2: Counter</h2>
        <h3>Current Count: {count}</h3>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={incrementCount}>Increment (+)</button>
          <button onClick={decrementCount}>Decrement (-)</button>
        </div>
      </section>

    </div>
  );
}

export default App;