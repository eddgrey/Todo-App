import React, { useState } from "react";
import Form from "./Form";

const Todo = ({ description, id, priority, date, todos, setTodos, color, handleChangeCategory}) => {
    const [edit, setEdit] = useState(false)

    const deleteTodo = idToDelete => (
        setTodos(todos.filter(todo => todo.id !== idToDelete))
    )

    const priorityColor = priority === "high" ? "red" : priority === "medium" ? "yellow" : "blue"

    return (
        !edit ?
        <div className={`container mb-4 flex flex-col justify-around border-l-4 border-${color}-500 bg-gray-100 py-2 pr-2`}>
            <div className="flex flex-row justify-between pl-4 mb-2">
                <div>
                    <button onClick={() => setEdit(e => !e)}>
                        <i className="fas fa-edit"></i>
                    </button>
                    <span className={`py-1 px-2 ml-2 text-white text-xs bg-${priorityColor}-500 border rounded-md w-20 text-center`}>
                        {priority}
                    </span>
                </div>
                <button onClick={() => deleteTodo(id)} className="">
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>

            <div>
                <input 
                    id={id} 
                    type="checkbox" 
                    defaultChecked={true} 
                    onClick={() => handleChangeCategory(id)}
                />
                <label htmlFor={id} className="pl-4 h-10">{description}</label>
                <p className="text-right"> 
                    <span className="mr-2">
                        <i className="fas fa-calendar-alt"></i>
                    </span>
                    {date}
                </p>
            </div>
        </div>
        :
        <Form todos={todos} setTodos={setTodos} action="edit" visible={setEdit} currentTask={description} id={id} color={color}/>

    )
}

export default Todo
