import React, { useState } from "react";

const Form = ({addTodo}) => {

    const [todo, setTodo] = useState("");

    const handleAdd = (e) => { 

        e.preventDefault();
        addTodo(todo);
        setTodo("")
    } 

    return (
        <form onSubmit={handleAdd}>
            <input type="text" 
                value={todo}
                onChange={ (e) => { setTodo(e.currentTarget.value); } }
            placeholder="Ajouter une tâche" />
            <button>Ajouter</button>
        </form>
    );
}
export default Form;
