import React, {useState} from 'react';
import UserProfile from './UserProfile';

    function App() {
        //состояние для управления текущим ID польз
        const [selectedId, setSelectedId] = useState(1);

        return (
            <div style ={{ padding:'20px'}}>
            <h1>Lab 3.2 - useEffect and Cleanup</h1>
            
            <p>Select User ID to fetch:</p>
            <button onClick={() => setSelectedId(1)}>Load User 1</button>
            <button onclick={() =>setSelectedId(5)} style={{margin: '0 10px'}}>Load User 10</button>

            <UserProfile userId={selectedId} />
            </div>
        );
    }

export default App;