import React from 'react';

// компонент макета, использующий только фрагменты

const FragmentLayout = () => {
    return (
        <>
        <header>
            <h1>My React Lab 02</h1>
        </header>
        <main>
            <p>Контент внутри фрагмента без лишних div-оберток.</p>
        </main>
        <footer>
            <p>2026 Лабортная работа</p>
        </footer>
        </>
    );
};

export default FragmentLayout;
