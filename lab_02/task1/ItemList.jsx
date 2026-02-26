import React from 'react';

const ItemList = () => {
    // массив данных (минимум 3 элемента)
    const fruitItems = [
        {id: 1, name: "Apple"},
        {id: 2, name: "Orange"},
        {id: 3, name: "Mango"}
    ];

    return (
        <ul>
            {/* использование .map() с обязательным ключом key */}
            {fruitItems.map((item) => (
                <li key={item.id}>{item.name}
                </li>
            ))}
        </ul>
    );
};
export default ItemList;