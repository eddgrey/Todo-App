import React, { useState } from 'react'
import Form from './Form'
import Todo from "./Todo"

const Category = ({title}) => {

    const initalState = [
        {id: "fkl", description: "leer pdf", priority: "medium"},
        {id: "fk2", description: "leer pdf"},
        {id: "fk3", description: "leer pdf"},
    ]

    const [visibleForm, setVisibleForm] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [todos, setTodos] = useState(initalState)


    // const deleteTodo = idToDelete => (
    //     setTodos(todos.filter(todo => todo.id !== idToDelete))
    // )

    // const editTodo = (idToEdit, newDescription, newPriority) => {
    //     const newTodos = todos.map( todo => {
    //         if (todo.id === idToEdit){
    //             return {...todo, description: newDescription, priority: newPriority}
    //         }else{
    //             return todo
    //         }
    //     })
    //     setTodos(newTodos)
    // }

    const categoryColor = title === "To do" ? "orange" : title === "Doing" ? "green" : "blue"

    return (
        <section className="flex flex-col m-4 border w-1/4 px-2">
            <header className={`flex flex-row justify-around py-4 text-gray-50 bg-${categoryColor}-400 bg-teal-400 mb-2`}>
                <h3 className="text-lg font-bold">{title}</h3>
                <p>Tasks: {todos.length}</p>
                <button onClick={() => setHidden(v => !v)} className="focus:outline-none"><i className="fas fa-eye-slash"></i></button>
            </header>
            <div>
                {visibleForm? <Form todos={todos} setTodos={setTodos} action="add" visible={setVisibleForm}/> : 
                <button className="px-6 py-1 border rounded-sm bg-lightBlue-200 text-lightBlue-600 focus:outline-none focus:ring w-full mb-4" onClick={() => setVisibleForm(true)}>
                <span className="mr-4"><i className="fas fa-plus"/></span>Add a item 
                </button>}
            </div>
            {!hidden ?
                <div>
                    {todos.length > 0 ? 
                        todos.map(({id, description, priority}) => <Todo key={id} id={id} description={description} priority={priority} todos={todos} setTodos={setTodos} color={categoryColor}/>)
                        :
                        <p>Empty list</p>
                    }
                </div>
                    :
                null
            }
        </section>
    )
}

export default Category
