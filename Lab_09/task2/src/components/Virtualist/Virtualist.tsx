import { useState, useMemo, useCallback } from "react";
// Импорт компонента FixedSizeList для списков с фиксированной высотой строки 
import { FixedSizeList as List } from "react-window";
import { generateItems, Item } from "../../utils/generateItems";

export function VirtualList() {
  const [filter, setFilter] = useState("");
  
  // Кэшируем генерацию 10,000 элементов 
  const items = useMemo(() => generateItems(10000), []);

  // Фильтрация данных на основе ввода пользователя 
  const filteredItems = useMemo(() => {
    if (!filter) return items;
    return items.filter(item => 
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Стабильная ссылка на обработчик изменения фильтра 
  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  // Внутренний компонент для отрисовки одной строки 
  // Важно: аргумент style ОБЯЗАТЕЛЕН для позиционирования элемента 
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const item = filteredItems[index];
    
    return (
      <div style={style} className="list-item-container">
        <div style={{ borderBottom: '1px solid #eee', padding: '10px', height: '100%' }}>
          <h4>{item.title}</h4>
          <p style={{ fontSize: '0.8rem', color: '#666' }}>{item.category}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="virtual-list-wrapper">
      <input 
        type="text" 
        placeholder="Search items..." 
        value={filter} 
        onChange={handleFilterChange}
        style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
      />
      <div style={{ marginBottom: '10px' }}>
        Showing {filteredItems.length} of {items.length} items [cite: 349]
      </div>

      {/* Настройка компонента List  */}
      <List
        height={500}              // Высота видимого окна 
        itemCount={filteredItems.length} // Общее количество элементов 
        itemSize={80}               // Высота одной строки в пикселях 
        width={"100%"}              // Ширина контейнера 
      >
        {Row} 
      </List>
    </div>
  );
}

