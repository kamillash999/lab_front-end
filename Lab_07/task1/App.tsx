import React, { useState, Suspense, lazy } from 'react';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';

// Ленивая загрузка компонента 
const LazySlowComponent = lazy(() => import('./components/SlowComponent/SlowComponent'));

export const App = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Оптимизация загрузки</h1>
      <button 
        onClick={() => setShowComponent(true)}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Загрузить тяжелый блок
      </button>

      <div style={{ marginTop: '20px' }}>
        {showComponent && (
          /* Suspense показывает fallback, пока грузится чанк  */
          <Suspense fallback={<LoadingSpinner />}>
            <LazySlowComponent />
          </Suspense>
        )}
      </div>
    </div>
  );
};