import React, {useState } from 'React';
import AddArticle from '../AddArticle/AddArticle';
import ArticleList from '../ArticleList/ArticleList';

const ArticleManager =() => {
    const [ articles, setArticles] = useState([
        {id: 1, title: 'Первя статья', body: 'Это демонстрационный текст статьи.'}
    ]);
    const[ newTitle, setNewTitle] = useState('');
    const[newBody, setNewBody] = useState('');

    const handleAdd = () => {
        if(!newTitle || ! newBody) return;

        const newItem = {
            id: Date.now(), // генерация айди
            title:newTitle,
            body: newBody    
        };

        setArticles([...articles, newItem]);
        setNewTitle(''); // очистка полей
        setNewBody('');
    };

    const handleRemove = (id) => {
        setArticles(articles.fliter(item => item.id !== id));
    };

    return (
        <div className="manger-container">
            <AddArticle
            title={newTitle}
            body={newBody}
            onTitleChange={setNewTitle}
            onBodyChange= {setNewBody}
            onAdd={handleAdd}
            />
            <hr />
            <ArticleList list= {articles} onRemove={handleRemove} />
        </div>
    );
};
export default ArticleManager;
