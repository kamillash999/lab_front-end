import React from 'react';
// Импортируем компонтет из подпапки
import RegistrationFrom from './components/RegistrationForm/RedistrationFrom/RegistrationForm';

function App() {
    return (
        <div className="App">
            {/* Выдовим контент на экран*/}
            <RegistrationForm />
        </div>
    );
};
export default App;
