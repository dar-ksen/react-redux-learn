import React from 'react';
import Container from './components/Container';
import Counter from './components/Counter';
import NameCard from './components/NameCard';
import TodoList from './components/TodoList';

function App() {

    return (
        <div className="App">
            <main className="container">
                <Container title={'Simple Counter'}>
                    <Counter/>
                </Container>
                <div className="divider"></div>
                <Container title={'Name card'}>
                    <NameCard/>
                </Container>
                <div className="divider"></div>
                <Container title={'Todo List'}>
                    <TodoList/>
                </Container>
                <div className="divider"></div>
            </main>
        </div>
    )
}

export default App;
