import React, { useState } from 'react'

import Form from './Form'
import Todo from "./Todo"

const Category = ({title}) => {

    const initalState = [
        {id: "fkl", description: "leer pdf"},
        {id: "fk2", description: "leer pdf"},
        {id: "fk3", description: "leer pdf"},
    ]

    const [visibleForm, setVisibleForm] = useState(false)
    const [todos, setTodos] = useState(initalState)


    const deleteTodo = idToDelete => (
        setTodos(todos.filter(todo => todo.id !== idToDelete))
    )

    const editTodo = (idToEdit, newDescription, newPriority) => {
        const newTodos = todos.map( todo => {
            if (todo.id === idToEdit){
                return {...todo, description: newDescription, priority: newPriority}
            }else{
                return todo
            }
        })
        setTodos(newTodos)
    }

    return (
        <section className="flex flex-col m-4 border border-gray-800 w-1/4">
            <header className="flex flex-row justify-around py-2">
                <h3>{title}</h3>
                <p>Task: {todos.length}</p>
                <button onClick={() => setVisibleForm(true)}><i class="fas fa-plus"></i></button>
            </header>
            <div>
                {todos.length > 0 ? 
                    todos.map(({id, description, priority}) => <Todo key={id} id={id} description={description} priority={priority} deleteTodo={deleteTodo} editTodo={editTodo}/>)
                    :
                    <p>Empty list</p>
                }
            </div>
            <div>
                {visibleForm? <Form todos={todos} setTodos={setTodos} visible={setVisibleForm}/> : null}
            </div>
        </section>
    )
}

export default Category
