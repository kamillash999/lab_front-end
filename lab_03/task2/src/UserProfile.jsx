import React, {useState, useEffect } from 'react';

function UserProfile({userId}) {
    //состояния для данных пользователя, статуттса загрузки и ошибок
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = usestate(null);

    useEffect (() => {
        // создаем AbortController для отмены запроса, если компонент размонтируется
        const controller = new AbortController();
        const signal = controller.signal;

        const loadUserData  = async () => {
            setLoading(true);
            setError(null);

            try {
                //Выполняем запрос к АПИ с сигналом отмены
                const response = await fetch('https://jsonplaceholder.typicode.com/users/${userId}', {signal});

                if (!response.ok) throw new Error('Network error');

                const data = await response.json();

                //сохраняем данные
                setUser(data);
            }  catch (err) {
                //если ошибка произошла изза отмены запроса, не выводим ее
                if (err.name !=='AbortError') {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };
        loadUserData();

        // cleanup функция: react вызоыет ее пееред след запуском эфф. или при удал компон.
        return () => {
            controller.abort();
        };
    }, [userId]);

    if (loading) return <p>Loading user info...</p>;
    if (error) return <p style={{color:'red'}}>Error: {error}</p>;
    if (!user) return null;

    return (
        <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px'}}>
            <h4>User: {user.name}</h4>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
        </div>
    );
}

export default userProfile;