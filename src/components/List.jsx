import React from "react";

const List = ({ todos, deleteTodo, toggleTodo }) => {

    const handleDelete = (index) => {
        deleteTodo(index)
    }

    return (
        <ul>
            {todos.map((todo, index) => (

                <li key={index}>
                    <i className={`far fa${todo.done ? "-check" : ""}-square fa-2x`}
                        onClick={ () => { toggleTodo(index) } }
                    ></i>
                    <span>{todo.description}</span>
                    <button onClick={() => { handleDelete(index) }}><i className="fas fa-trash fa-2x"></i></button>
                </li>
            ))}
        </ul>
    );
}
export default List;
