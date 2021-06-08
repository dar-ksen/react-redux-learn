import React from 'react';
import Counter from './views/Counter';
import NameCard from './views/NameCard';
import TodoList from './views/TodoList';

function App() {

    return (
        <div className="App">
            <main className="container">
                <Counter/>
                <div className="divider"></div>
                <NameCard/>
                <div className="divider"></div>
                <TodoList/>
                <div className="divider"></div>
            </main>
        </div>
    )
}

export default App;
