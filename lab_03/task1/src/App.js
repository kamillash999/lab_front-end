import React from 'react';
import StepCounter from './StepCounter';

function App() {
    return (
        <div>
            <h1> Lab 3.1: Counter App</h1>

            {/* Explanation:
            Props (initialValue, step) передаются от родителя к ребенку и неизменяемые
            State (count, history) находится внутри stepCounter и управляется самим компонентом
            Два компонента ниже независимы. Одно измененние state в одном не влияет на другой.
            */}


            <StepCounter initialValue={0} step={1} />
            <StepCounter initialValue={10} step={5} />
        </div>
    );
}

export default App;