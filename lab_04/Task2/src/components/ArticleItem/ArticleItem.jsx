import React, { useState } from 'react';

const ArticleItem = ({ article, onClickRemove }) => {
  // Локальное состояние для раскрытия текста
  const [isOpened, setIsOpened] = useState(false);

  const onClickToggle = (e) => {
    e.preventDefault();
    setIsOpened(!isOpened); // Переключение видимости 
  };

  return (
    <li>
      <a href={`#${article.id}`} onClick={onClickToggle}>
        {article.title}
      </a>
      {/* Кнопка удаления использует ID из пропсов */}
      <button onClick={() => onClickRemove(article.id)}>x</button> [cite: 140]
      
      <p style={{ display: isOpened ? 'block' : 'none' }}>
        {article.summary}
      </p>
    </li>
  );
};

export default ArticleItem;