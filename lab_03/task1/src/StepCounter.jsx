import React, { useState } from 'react';

// Lab 3.1: Компонент StepCounter
// Принимает props для начального значения и шага 
// useState для хранения текущего числа.
// history массив всех предыдущих значений

function StepCounter({ initialValue = 0, step = 1 }) {
    const [count, setCount] = useState (initialValue);
    const [history, setHistory] = useState([]);
    const [operationCount, setOperationCount] = useState (0);

    const updateCount = (direction) => {
        const newCount = direction ==='increment' ? count + step : count - step;

        setCount(newCount);
        setHistory((prev) => [...prev, newCount]);
        setOperationCount((prev) => prev + 1);
    };

    // reset которая сбрасывает всё к начальным значениям
    const handleReset = () => {
        setCount(initialValue);
        setHistory([]);
        setOperationCount(0);
    };

    return (
        <div style={{ border: '1px solid black', margin: '20px', padding: '20px'  }}>
        <h2>Counter (Step: {step})</h2>
        <h1>{count}</h1>
        
        <div>
            <button onclick={() => updateCount('decrement')}>- Decrement</button>
            <button onClick={() => uddateCount('increment')} style={{ margin: '0 10px'}}>+ Increment</button>
            <button onClick={handleReset}>Reset</button>
        </div>

        <div>
            <p>Total Operations: {operationCount}</p>
            <p>History (Last 5):</p>
            <ul>
                {history.slice(-5).map((val, index) => (
                    <li key={index}>{val}</li>
                ))}
            </ul>
        </div>
    </div>
    );
}

export default StepCounter;