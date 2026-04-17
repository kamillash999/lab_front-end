import React from 'react';

// Компонент, который мы будем подгружать лениво
const SlowComponent = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
      <h3>Я загрузился лениво!</h3>
      <p>Этот контент не был в основном бандле приложения.</p>
    </div>
  );
};

export default SlowComponent; // Обязательно default export для React.lazy