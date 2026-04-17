import React from 'React';
import ReactDOM from 'react-dom/client';
import App from './App.Js';

// находим div с id='root' в  index.html и рандерм туда наше приложение 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);