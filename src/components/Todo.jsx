import React, { useState } from "react";
import Form from "./Form";

const Todo = ({ description, id, priority, date, category, todos, setTodos, color, handleChangeCategory}) => {
    const [edit, setEdit] = useState(false)

    const deleteTodo = idToDelete => (
        setTodos(todos.filter(todo => todo.id !== idToDelete))
    )

    const priorityColor = priority === "high" ? "bg-red-500" : priority === "medium" ? "bg-yellow-500" : "bg-blue-500"

    const borderColor = `border-${color}-500`

    const complete = category === "Done" ? true : false

    return (
        !edit ?
        <div className={`todo ${borderColor}`}>
            <div className="flex flex-row justify-between pl-4 mb-2">
                <div>
                    <button onClick={() => setEdit(e => !e)}>
                        <i className="fas fa-edit"></i>
                    </button>
                    <span className={`priority ${priorityColor}`}>
                        {priority}
                    </span>
                </div>
                <button onClick={() => deleteTodo(id)} className="">
                    <i className="far fa-trash-alt"/>
                </button>
            </div>

            <div>
                <input 
                    id={id} 
                    type="checkbox" 
                    defaultChecked={complete} 
                    onClick={() => handleChangeCategory(id)}
                    className="ml-4"
                />
                <label htmlFor={id} className="pl-2 h-10">{description}</label>
                <p className="text-right"> 
                    <span className="mr-2">
                        <i className="fas fa-calendar-alt"/>
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
