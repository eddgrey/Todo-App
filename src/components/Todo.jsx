import React, { useState } from "react";
import Form from "./Form";

const Todo = ({ description, id, priority, todos, setTodos, color}) => {
    const [edit, setEdit] = useState(false)
    // const [newTask, setNewTask] = useState(description)

    // const editTask = e => setNewTask(e.target.value)

    // const cancelEdit = () => {
    //     setEdit(edit => !edit)
    //     setNewTask(description)
    // }

    // const saveEdit = (e) => {
    //     e.preventDefault()
    //     editTodo(id, newTask, e.target[1].value)
    //     setEdit(edit => !edit)
    // }

    const deleteTodo = idToDelete => (
        setTodos(todos.filter(todo => todo.id !== idToDelete))
    )

    const button = "px-6 py-1 border rounded-xl focus:outline-none focus:ring"
    const priorityColor = priority === "high" ? "red" : priority === "medium" ? "yellow" : "blue"

    return (
        !edit ?
        <div className={`container mb-4 flex flex-col justify-around border-l-4 border-${color}-500 bg-gray-100 py-2 pr-2`}>
            <div className="flex flex-row justify-between pl-4 mb-2">
                <div>
                    <button onClick={() => setEdit(e => !e)}><i className="fas fa-edit"></i></button>
                    <span className={`py-1 px-2 ml-2 text-white text-xs bg-${priorityColor}-500 border rounded-md w-20 text-center`}>{priority}</span>
                </div>
                <button onClick={() => deleteTodo(id)} className=""><i className="far fa-trash-alt"></i></button>
            </div>

            <div>
                <p className="pl-4 h-10">{description}</p>
                <p className="text-right"> <span className="mr-2"><i className="fas fa-calendar-alt"></i></span>23-11-99</p>
            </div>
        </div>
        :
        <Form todos={todos} setTodos={setTodos} action="edit" visible={setEdit} currentTask={description} id={id}/>

    )
}

export default Todo
