//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css' // Chargement de Font Awesome
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';

function App() {
    const [todos, setTodos] = useState([
        { done: false, description: 'Trouver un job' },
        { done: true, description: 'Apprendre React.JS' },
        { done: true, description: 'Découvrir Formacitron' },
    ]);

    const addTodo = (todo) => {
        const tmpTodos = [...todos];

        const newTodo = { done: false, description: todo }
        tmpTodos.push(newTodo)
        setTodos(tmpTodos)
    }

    const deleteTodo = (index) => {
        const tmpTodos = [...todos];
        tmpTodos.splice(index,1);
        setTodos(tmpTodos)
    }
 const toggleTodo = (index) => {
        const tmpTodos = [...todos];/*...todos fait une copie d'un tableau*/ 
        tmpTodos[index].done = !tmpTodos[index].done;
        setTodos(tmpTodos)
    }

    return (
        <>
            <Header todos={todos}></Header>
            <main>
                <Form addTodo={addTodo}></Form>
                <List todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></List>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
